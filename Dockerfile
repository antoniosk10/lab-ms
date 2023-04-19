FROM node:16.19.0-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app

COPY package.json turbo.json ./
COPY apps/lab-next-app/package.json ./apps/lab-next-app/
COPY packages ./packages

RUN cat ./apps/lab-next-app/package.json

RUN yarn cache clean && \
    yarn



# Rebuild the source code only when needed
FROM base AS builder
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/yarn.lock ./

COPY . .
COPY --from=deps /app/yarn.lock ./

ENV NEXT_TELEMETRY_DISABLED 1


#RUN ls -la /app/node_modules/next/dist/bin/next

RUN yarn global add turbo
RUN turbo --version
RUN ls -la
RUN yarn build

# Copy all files built for deployment
RUN cp apps/lab-next-app/.next ./.next -r
RUN ls -la ./.next

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./apps/lab-next-app/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/lab-next-app/public ./apps/lab-next-app/public

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "./apps/lab-next-app/server.js"]
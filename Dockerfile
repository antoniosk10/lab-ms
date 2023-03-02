FROM node:18-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app

COPY package.json yarn.lock ./
COPY apps/lab-next-app/package.json ./apps/lab-next-app/
COPY packages ./packages

RUN yarn --frozen-lockfile



# Rebuild the source code only when needed
FROM base AS builder
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1


#RUN ls -la /app/node_modules/next/dist/bin/next

RUN yarn global add turbo
RUN turbo --version
RUN yarn build

# Copy all files built for deployment
COPY /apps/lab-next-app/.next ./.next

#COPY /apps/lab-next-app/.next /.next

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Uncomment if public folder exists
#COPY --from=builder /app/.next/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static


#USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
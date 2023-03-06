#!/usr/bin/env zx

await $`docker build -t app`
await $`docker-compose -f docker-compose.test.yml up`

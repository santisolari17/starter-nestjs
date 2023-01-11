### RELEASE
FROM node:14.15.1-slim AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:14.15.1-slim
WORKDIR /app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
#COPY --from=builder /app/Dockerfile ./
COPY --from=builder /app/tsconfig.build.json ./
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

RUN mkdir /app/credentials
COPY docker/entrypoint.sh .
CMD ["/bin/sh","entrypoint.sh"]
#redeploy

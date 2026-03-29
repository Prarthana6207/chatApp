# chatApp monorepo

This repository contains:

- `chatServer/` — backend Node.js + TypeScript socket server
- `mobile_chat/` — React Native mobile app

## Fast commands (from repo root)

- `yarn i` - run iOS app (`cd mobile_chat && yarn ios`)
- `yarn a` - run Android app (`cd mobile_chat && yarn android`)
- `yarn metro` - start Metro bundler (`cd mobile_chat && yarn start`)
- `yarn backend` - start backend in production mode (`cd chatServer && yarn start`)
- `yarn backend:dev` - start backend in development mode (`cd chatServer && yarn dev`)

## Setup

```sh
# install root deps maybe none, then per package
cd chatServer && yarn install
cd ../mobile_chat && yarn install
```

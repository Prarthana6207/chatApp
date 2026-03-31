# mobile_chat

React Native client app for chatApp.

## Overview

- React Native (TypeScript) mobile client.
- Connects to the chatServer WebSocket backend.
- Includes UI screens for join room / chat message flow.

## Quick start

1. Install dependencies:

   ```sh
   cd mobile_chat
   yarn install
   ```

2. Run Metro bundler:

   ```sh
   yarn start
   # alias: yarn metro
   ```

3. Run on Android:

   ```sh
   yarn android
   # from repo root: yarn a
   ```

4. Run on iOS:
   ```sh
   cd ios && pod install && cd ..
   yarn ios
   # from repo root: yarn i
   ```

### Root alias commands

From monorepo root (`/chatApp`):

- `yarn i` - run iOS app
- `yarn a` - run Android app
- `yarn metro` - start Metro bundler
- `yarn backend` - start backend server
- `yarn backend:dev` - start backend in dev reload mode

## Project structure

- `App.tsx` - app entrypoint
- `src/routes` - navigation routes
- `src/screens` - UI pages
- `src/service/socketService.ts` - socket client implementation

## Contributing

- Run `yarn lint` and `yarn test` before submitting changes.
- Keep naming and layout clear for mobile screen components.

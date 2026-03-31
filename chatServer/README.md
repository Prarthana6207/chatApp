# chatServer

Backend server for the chatApp project.

## Overview

- Node.js + TypeScript powered WebSocket chat server.
- Uses `socket.io` for real-time communication.
- Project root: `chatServer/`

## Quick start

1. Install dependencies:

   ```sh
   cd chatServer
   yarn install
   ```

2. Start the server:

   ```sh
   yarn start
   ```

3. (Dev mode) Run with autoreload:

   ```sh
   yarn dev
   ```

4. Use from monorepo root:

   ```sh
   yarn backend
   yarn backend:dev
   ```

5. Open the client app and connect to the server URL (default `http://localhost:3000`).

## Notes

- Server entry: `src/server.ts`
- App initialization: `src/app.ts`
- Socket code: `src/socket/index.ts`

## Development

- Rebuild: `yarn build`
- Type checking: `yarn tsc --noEmit`

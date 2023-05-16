# trader-crow

## Notice!
You'll need to grant allowances for testnet sSCRT and SILK to the LBPair contract:

`address`: secret1vdp8lm27h7d906fg0d7g59jnn32sdl7x2m8sea

`code_hash`: aff1a59f3886b7f0a2d20e8ac9ed3628fd11d4b7df2e6a69ebd7cb481b03c70f



## Misc Notes
- after each testnet contract deployment, the following variables need to be updated:
  - /app/src/lib/contracts.ts - update the Liquidity Book Contracts section
  - /app/src/lib/tokens.ts - update token X and Y

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

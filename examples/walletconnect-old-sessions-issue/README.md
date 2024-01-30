# Wallet connect unauthorized sessions issue

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, set up WalletConnect project ID inside `.env.local` from `.env`, then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Reproduce issues

* Create 3 authorization by `Connect` button
* Revoke all of them inside DPM from oldest to latest
* Then the 2 old unauthorized sessions will remain
* Print sessions by `Print session` button, the result will show inside console
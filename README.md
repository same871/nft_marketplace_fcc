# Hardhat NFT Marketplace 

This is a repo showing Marketplace for NFTs

Huge shoutout to [Patrick Collins](https://twitter.com/PatrickAlphaC) and [FreeCodeCamp](https://freecodecamp.org) for the tutorial which helped me create this repo.👊

- [NFT Marketplace](#hardhat-nft-marketplace)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Quickstart](#quickstart)
- [Usage](#usage)
  - [Testing](#testing)
- [Deployment to a testnet or mainnet](#deployment-to-a-testnet-or-mainnet)
- [Thank you!](#thank-you)

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    - You'll know you did right if you run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
    - You'll know you've installed nodejs right if you can run:
        - `node --version` and get an output like: `x.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
    - You'll know you've installed yarn right if you can run:
        - `yarn --version` and get an output like: `x.x.x`
        - You might need to install it with `npm`

## Quickstart

```bash
git clone https://github.com/PatrickAlphaC/hardhat-nextjs-nft-marketplace-fcc
cd hardhat-nextjs-nft-marketplace-fcc
yarn
```


# Usage 

Deploy:

```bash
yarn hardhat deploy
```

## Testing

```bash
yarn hardhat test
```


# Deployment to a testnet or mainnet

1. Setup environment variables

You'll want to set your `SEPOLIA_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file.

- `PRIVATE_KEY`: The private key of your account (like from [metamask](https://metamask.io/)).**NOTE** FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT. 
    - You can [learn how to export it here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
- `SEPOLIA_RPC_URL`: This is url of the sepolia testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/?a=673c802981)

2. Get testnet ETH

Hand over to [faucets.chain.link](https://faucets.chain.link/) and get some testnet ETH. You should see ETH show up in your metamask

3. Deploy

```bash
yarn hardhat deploy --network sepolia
```


# Thank you!

[Samuel Muto Twitter](https://twitter.com/muto_takudzwa)


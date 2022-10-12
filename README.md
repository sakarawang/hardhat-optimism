# hardhat-optimism

Hardhat plugin for Optimism Developers.

## Features

OptimismScan Contract Verification

## Prerequisites

Before the installation steps you need to have your hardhat project initialized using the command

```bash
npx hardhat init
```

Make sure to have dependencies installed!

## Installation

Use the following command to install

```bash
npm i hardhat-optimism --save-dev
```

Import the plugin in your `hardhat.config.js`:

```js
require("hardhat-optimism");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "hardhat-optimism";
```

Remove / Comment the import for `@nomicfoundation/hardhat-toolbox`

Add the following configuration to the `config` object in `hardhat.config.js`.

```js
networks: {
        optimisticGoerli: {
            // can be replaced with the RPC url of your choice.
            url: "https://goerli.optimism.io",
            accounts: [
                "<YOUR_PRIVATE_KEY>"
            ],
        },
        optimisticEthereum: {
            url: "https://mainnet.optimism.io",
            accounts: [
                "<YOUR_PRIVATE_KEY>"
            ],
        }
    },
    etherscan: {
        apiKey: {
            optimisticGoerli: "<OPTIMISMSCAN_API_KEY>",
            optimisticEthereum: "<OPTIMISMSCAN_API_KEY>"
        },
    },
```

Verify your contracts using the following command (Make sure your contracts are compiled before verification)

Optimism Goerli Testnet

```bash
npx hardhat verify <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS> --network optimisticGoerli
```

Optimism Mainnet

```bash
npx hardhat verify <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS> --network optimisticEthereum
```

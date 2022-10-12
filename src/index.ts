import "@nomicfoundation/hardhat-toolbox";
import { extendConfig } from "hardhat/config";
import { HardhatConfig, HardhatUserConfig } from "hardhat/types";

extendConfig(
  (config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
    config.etherscan.customChains.push({
      network: "optimisticGoerli",
      chainId: 420,
      urls: {
        apiURL: "https://api-goerli-optimistic.etherscan.io/api",
        browserURL: "https://goerli-optimistic.etherscan.io",
      },
    });

    config.etherscan.customChains.push({
      network: "optimisticMainnet",
      chainId: 10,
      urls: {
        apiURL: "https://api-optimistic.etherscan.io/api",
        browserURL: "https://optimistic.etherscan.io",
      },
    });
  }
);

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy-ethers";
import "hardhat-deploy";
import "@symfoni/hardhat-react";
import "hardhat-typechain";
import "@typechain/ethers-v5";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  react: {
    providerPriority: ["hardhat", "web3modal"],
    handle: [
      "ERC1400",
      "CapTableQue",
      "CapTableRegistry",
      "ERC1820Registry",
      "ERC1400AuthValidator",
      "AuthProvider",
    ],
    walletConnectV2: {
      enable: true,
    },
    fallbackProvider: "hardhat",
  },
  networks: {
    besuDev: {
      url: "http://localhost:8545",
      providerType: "JsonRpcProvider",
      accounts: [
        "0xad6f29b5b5285c8137787710ebdcc5ee16a3f09598a798bee470e158ade704fc",
      ],
    },
    brok: {
      url:
        "https://e0ri5j5fp2:pA0jrXjkbgdltvu2iaXE7q9NjQy57S1AIF-v0FXyuJ4@e0mvr9jrs7-e0iwsftiw5-rpc.de0-aws.kaleido.io/",
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
      },
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.7.3",
        settings: {
          optimizer: {
            enabled: true,
            runs: 50,
          },
        },
      },
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 50,
          },
        },
      },
      {
        version: "0.5.3",
        settings: {
          optimizer: {
            enabled: true,
            runs: 50,
          },
        },
      },
      {
        version: "0.6.2",
      },
    ],
  },
};
export default config;

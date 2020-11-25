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
    handle: ["ERC1400", "CapTableQue", "CapTableRegistry"],
  },
  networks: {
    brregProd: {
      url:
        "https://u1qdua80h5:Er0LWdZuKqOza22YNQKhtdFCbqRzhzGCRhuZgrtHZ9s@u1txh1ent0-u1ieecy018-rpc.us1-azure.kaleido.io",

      gasPrice: 0,
      inject: true,
      user: "u1qdua80h5",
      password: "Er0LWdZuKqOza22YNQKhtdFCbqRzhzGCRhuZgrtHZ9s",
      providerType: "JsonRpcProvider",
      accounts: {
        mnemonic:
          "shrug antique orange tragic direct drop abstract ring carry price anchor train",
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

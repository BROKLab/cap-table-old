import {
  getERC20MintableBurnable,
  getCapTable,
  getPropertyCDP,
} from "./contracts";
import { ethers, BigNumber } from "ethers";
import { ERC1400 } from "../hardhat/typechain/ERC1400";

export interface CollateralDetail {
  cToken: {
    balance: BigNumber;
    holder: string;
  }[];
  pToken: {
    balance: BigNumber;
    holder: string;
  }[];
  closed: boolean;
  cdpAddress: string;
}
export interface CollateralDetails {
  [tokenHolder: string]: CollateralDetail;
}

// export const getERC20Addresses = async (address: string) => {
//   const signer = await getWeb3();
//   const token = await getERC20MintableBurnable(address);
//   const logs = await signer.provider
//     .getLogs({
//       fromBlock: 0,
//       address: address,
//       toBlock: "latest",
//       topics: [ethers.utils.id(`Transfer(address,address,uint256)`)],
//     })
//     .finally(() => []);

//   // console.log("logs => ", logs);
//   const events = logs.map((log) => {
//     return { ...token.interface.parseLog(log) };
//   });
//   // console.log("events => ", events);

//   const addresses = events
//     .map((event) => {
//       return event.values.to;
//     })
//     .reduce(
//       (prev, cur) => (prev.indexOf(cur) === -1 ? [...prev, cur] : prev),
//       []
//     ) as string[];
//   return addresses;
// };

export const getERC1400Addresses = async (
  address: string,
  partitionFilter = "",
  capTable: ERC1400
) => {
  const logs1 = await capTable.provider
    .getLogs({
      fromBlock: 0,
      address: address,
      toBlock: "latest",
      topics: [
        ethers.utils.id(
          `TransferByPartition(bytes32,address,address,address,uint256,bytes,bytes)`
        ),
      ],
    })
    .finally(() => []);

  const logs2 = await capTable.provider
    .getLogs({
      fromBlock: 0,
      address: address,
      toBlock: "latest",
      topics: [
        ethers.utils.id(
          "IssuedByPartition(bytes32,address,address,uint256,bytes,bytes)"
        ),
      ],
    })
    .finally(() => []);

  const logs3 = await capTable.provider
    .getLogs({
      fromBlock: 0,
      address: address,
      toBlock: "latest",
      topics: [
        ethers.utils.id(
          "RedeemedByPartition(bytes32,address,address,uint256,bytes,bytes)"
        ),
      ],
    })
    .finally(() => []);

  const logs = [...logs1, ...logs2, ...logs3];

  // console.log("logs => ", logs);

  const events = logs.map((log) => {
    return { ...capTable.interface.parseLog(log) };
  });
  // console.log("events => ", events);

  // Only need .to addresses to get every possible token holder
  // filter out duplicate values
  const partitionFilterBytes32 =
    partitionFilter && partitionFilter.substr(0, 2) !== "0x"
      ? ethers.utils.formatBytes32String(partitionFilter)
      : partitionFilter;
  const addresses = events
    .filter((event) => {
      if (partitionFilter) {
        if (
          event.values.partition === partitionFilterBytes32 ||
          event.values.fromPartition === partitionFilterBytes32 ||
          event.values.toPartition === partitionFilterBytes32
        ) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    })
    .map((event) => {
      return event.values.to;
    })
    .reduce(
      (prev, cur, i, arr) => (prev.indexOf(cur) === -1 ? [...prev, cur] : prev),
      []
    );
  console.log("getERC1400Addresses", addresses);

  return addresses as string[];
};

// export const filterCDPHolders = async (
//   addresses: string[]
// ): Promise<string[]> => {
//   const ERC1400_TOKENS_RECIPIENT = ethers.utils.solidityKeccak256(
//     ["string"],
//     ["ERC1400TokensRecipient"]
//   );
//   const ERC1820_ACCEPT_MAGIC = ethers.utils.solidityKeccak256(
//     ["string"],
//     ["ERC1820_ACCEPT_MAGIC"]
//   );
//   const holderPromises = addresses.map(async (address) => {
//     try {
//       const maybePropertyCDP = await getPropertyCDP(address);
//       const bytesAcceptMagicMaybe = await maybePropertyCDP.canImplementInterfaceForAddress(
//         ERC1400_TOKENS_RECIPIENT,
//         address
//       );
//       if (bytesAcceptMagicMaybe === ERC1820_ACCEPT_MAGIC) return address;
//       else return "";
//     } catch (error) {
//       return "";
//     }
//   });
//   const holdersWithEmpty = await Promise.all(holderPromises);
//   const holders = holdersWithEmpty.filter((maybeString) => maybeString);
//   console.log("filterCDPHolders", holders);

//   return holders;
// };

// export const getColleralDetails = async (
//   addresses: string[]
// ): Promise<CollateralDetails> => {
//   // let collateralDetailsObjectArray = [];
//   // for (const address of addresses) {
//   const promises = addresses.map(async (address) => {
//     console.log("Getting collateral details for ", address);

//     const propertyCDP = await getPropertyCDP(address);
//     const cTokenAddress = await propertyCDP.getCToken();
//     const pTokenAddress = await propertyCDP.getPToken();

//     const cToken = await getERC20MintableBurnable(cTokenAddress);
//     const pToken = await getERC20MintableBurnable(pTokenAddress);

//     const cTokenAddresses = await getERC20Addresses(cTokenAddress);
//     const pTokenAddresses = await getERC20Addresses(pTokenAddress);

//     const cTokenBalances = cTokenAddresses.map(async (address) => {
//       return {
//         holder: address,
//         balance: await cToken.balanceOf(address),
//       };
//     });
//     const cTokenDetails = await Promise.all(cTokenBalances);
//     const cTokenDetailsFiltered = cTokenDetails.filter((tokenDetail) => {
//       if (tokenDetail.balance.isZero()) {
//         return false;
//       }
//       return true;
//     });
//     const pTokenBalances = pTokenAddresses.map(async (address) => {
//       return {
//         holder: address,
//         balance: await pToken.balanceOf(address),
//       };
//     });
//     const pTokenDetails = await Promise.all(pTokenBalances);
//     const pTokenDetailsFiltered = pTokenDetails.filter((tokenDetail) => {
//       if (tokenDetail.balance.isZero()) {
//         return false;
//       }
//       return true;
//     });
//     const collateralDetail: CollateralDetail = {
//       closed: await propertyCDP.closed(),
//       cToken: cTokenDetailsFiltered,
//       pToken: pTokenDetailsFiltered,
//       cdpAddress: address,
//     };
//     // collateralDetailsObjectArray.push({ [address]: collateralDetail });
//     return { [address]: collateralDetail };
//   });
//   const collateralDetailsObjectArray = await Promise.all(promises);
//   const collateralDetails = collateralDetailsObjectArray.reduce(
//     (prev, curr) => {
//       return { ...prev, ...curr };
//     },
//     {}
//   );
//   return collateralDetails;
// };

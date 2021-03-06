/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ERC1820ImplementerInterface } from "../ERC1820ImplementerInterface";

export class ERC1820ImplementerInterface__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1820ImplementerInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1820ImplementerInterface;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceHash",
        type: "bytes32",
      },
      {
        name: "addr",
        type: "address",
      },
    ],
    name: "canImplementInterfaceForAddress",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

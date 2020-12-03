/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ControllerRole } from "../ControllerRole";

export class ControllerRole__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    controllers: string[],
    overrides?: Overrides
  ): Promise<ControllerRole> {
    return super.deploy(
      controllers,
      overrides || {}
    ) as Promise<ControllerRole>;
  }
  getDeployTransaction(
    controllers: string[],
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(controllers, overrides || {});
  }
  attach(address: string): ControllerRole {
    return super.attach(address) as ControllerRole;
  }
  connect(signer: Signer): ControllerRole__factory {
    return super.connect(signer) as ControllerRole__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ControllerRole {
    return new Contract(address, _abi, signerOrProvider) as ControllerRole;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "isController",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newController",
        type: "address",
      },
    ],
    name: "addController",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "controllerToRemove",
        type: "address",
      },
    ],
    name: "removeController",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "controllers",
        type: "address[]",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "controllerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "controllerRemoved",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516104903803806104908339810180604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8201602081018481111561005e57600080fd5b815185602082028301116401000000008211171561007b57600080fd5b509093506000925050505b81518110156100c7576100bf82828151811015156100a057fe5b6020908102909101015160009064010000000061025f6100ce82021704565b600101610086565b505061015c565b600160a060020a03811615156100e357600080fd5b6100f68282640100000000610125810204565b1561010057600080fd5b600160a060020a0316600090815260209190915260409020805460ff19166001179055565b6000600160a060020a038216151561013c57600080fd5b50600160a060020a03166000908152602091909152604090205460ff1690565b6103258061016b6000396000f3fe608060405234801561001057600080fd5b50600436106100445760e060020a60003504634e1647fb8114610049578063a7fc7a0714610065578063f6a74ed71461008d575b600080fd5b6100516100b3565b604080519115158252519081900360200190f35b61008b6004803603602081101561007b57600080fd5b5035600160a060020a03166100ca565b005b61008b600480360360208110156100a357600080fd5b5035600160a060020a0316610179565b60006100c5813363ffffffff61022816565b905090565b6100db60003363ffffffff61022816565b1515610131576040805160e560020a62461bcd02815260206004820152601d60248201527f6d73672e73656e646572206d75737420626520434f4e54524f4c4c4552000000604482015290519081900360640190fd5b61014260008263ffffffff61025f16565b604051600160a060020a038216907ffa6e39257880af8101ebfc7063a691ad46167d88e10aad122ecb4c362197760b90600090a250565b61018a60003363ffffffff61022816565b15156101e0576040805160e560020a62461bcd02815260206004820152601d60248201527f6d73672e73656e646572206d75737420626520434f4e54524f4c4c4552000000604482015290519081900360640190fd5b6101f160008263ffffffff6102ad16565b604051600160a060020a038216907f53d07d8e67d16e6d5296e4a17aff7fc5d22c59c86f69505483f92e7bf965260390600090a250565b6000600160a060020a038216151561023f57600080fd5b50600160a060020a03166000908152602091909152604090205460ff1690565b600160a060020a038116151561027457600080fd5b61027e8282610228565b1561028857600080fd5b600160a060020a0316600090815260209190915260409020805460ff19166001179055565b600160a060020a03811615156102c257600080fd5b6102cc8282610228565b15156102d757600080fd5b600160a060020a0316600090815260209190915260409020805460ff1916905556fea165627a7a723058203d1c63b1d6950fac5de12d8f63e39ecf0facdb0d2c4403b0b4e02491a5c572500029";

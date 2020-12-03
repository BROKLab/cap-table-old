/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721Metadata } from "../ERC721Metadata";

export class ERC721Metadata__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): Promise<ERC721Metadata> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC721Metadata>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC721Metadata {
    return super.attach(address) as ERC721Metadata;
  }
  connect(signer: Signer): ERC721Metadata__factory {
    return super.connect(signer) as ERC721Metadata__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Metadata {
    return new Contract(address, _abi, signerOrProvider) as ERC721Metadata;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        name: "",
        type: "address",
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
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
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
        name: "to",
        type: "address",
      },
      {
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "symbol",
        type: "string",
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
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e2738038062000e27833981018060405260408110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919060200180516401000000008111156200009c57600080fd5b82016020810184811115620000b057600080fd5b8151640100000000811182820187101715620000cb57600080fd5b509093506200010892507f01ffc9a700000000000000000000000000000000000000000000000000000000915050640100000000620001a4810204565b6200013c7f80ac58cd00000000000000000000000000000000000000000000000000000000640100000000620001a4810204565b81516200015190600590602085019062000211565b5080516200016790600690602084019062000211565b506200019c7f5b5e139f00000000000000000000000000000000000000000000000000000000640100000000620001a4810204565b5050620002b6565b7fffffffff000000000000000000000000000000000000000000000000000000008082161415620001d457600080fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200025457805160ff191683800117855562000284565b8280016001018555821562000284579182015b828111156200028457825182559160200191906001019062000267565b506200029292915062000296565b5090565b620002b391905b808211156200029257600081556001016200029d565b90565b610b6180620002c66000396000f3fe608060405234801561001057600080fd5b50600436106100b25760e060020a600035046301ffc9a781146100b757806306fdde03146100f2578063081812fc1461016f578063095ea7b3146101a857806323b872dd146101d657806342842e0e1461020c5780636352211e1461024257806370a082311461025f57806395d89b4114610297578063a22cb4651461029f578063b88d4fde146102cd578063c87b56dd14610393578063e985e9c5146103b0575b600080fd5b6100de600480360360208110156100cd57600080fd5b5035600160e060020a0319166103de565b604080519115158252519081900360200190f35b6100fa6103fd565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561013457818101518382015260200161011c565b50505050905090810190601f1680156101615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018c6004803603602081101561018557600080fd5b5035610493565b60408051600160a060020a039092168252519081900360200190f35b6101d4600480360360408110156101be57600080fd5b50600160a060020a0381351690602001356104c5565b005b6101d4600480360360608110156101ec57600080fd5b50600160a060020a0381358116916020810135909116906040013561056e565b6101d46004803603606081101561022257600080fd5b50600160a060020a03813581169160208101359091169060400135610593565b61018c6004803603602081101561025857600080fd5b50356105af565b6102856004803603602081101561027557600080fd5b5035600160a060020a03166105d9565b60408051918252519081900360200190f35b6100fa61060c565b6101d4600480360360408110156102b557600080fd5b50600160a060020a038135169060200135151561066d565b6101d4600480360360808110156102e357600080fd5b600160a060020a0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561031e57600080fd5b82018360208201111561033057600080fd5b8035906020019184600183028401116401000000008311171561035257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106f1945050505050565b6100fa600480360360208110156103a957600080fd5b5035610719565b6100de600480360360408110156103c657600080fd5b50600160a060020a03813581169160200135166107ce565b600160e060020a03191660009081526020819052604090205460ff1690565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104895780601f1061045e57610100808354040283529160200191610489565b820191906000526020600020905b81548152906001019060200180831161046c57829003601f168201915b5050505050905090565b600061049e826107fc565b15156104a957600080fd5b50600090815260026020526040902054600160a060020a031690565b60006104d0826105af565b9050600160a060020a0383811690821614156104eb57600080fd5b33600160a060020a0382161480610507575061050781336107ce565b151561051257600080fd5b6000828152600260205260408082208054600160a060020a031916600160a060020a0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6105783382610819565b151561058357600080fd5b61058e838383610878565b505050565b61058e83838360206040519081016040528060008152506106f1565b600081815260016020526040812054600160a060020a03168015156105d357600080fd5b92915050565b6000600160a060020a03821615156105f057600080fd5b50600160a060020a031660009081526003602052604090205490565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104895780601f1061045e57610100808354040283529160200191610489565b600160a060020a03821633141561068357600080fd5b336000818152600460209081526040808320600160a060020a03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6106fc84848461056e565b61070884848484610987565b151561071357600080fd5b50505050565b6060610724826107fc565b151561072f57600080fd5b60008281526007602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156107c25780601f10610797576101008083540402835291602001916107c2565b820191906000526020600020905b8154815290600101906020018083116107a557829003601f168201915b50505050509050919050565b600160a060020a03918216600090815260046020908152604080832093909416825291909152205460ff1690565b600090815260016020526040902054600160a060020a0316151590565b600080610825836105af565b905080600160a060020a031684600160a060020a03161480610860575083600160a060020a031661085584610493565b600160a060020a0316145b80610870575061087081856107ce565b949350505050565b82600160a060020a031661088b826105af565b600160a060020a03161461089e57600080fd5b600160a060020a03821615156108b357600080fd5b6108bc81610ac2565b600160a060020a0383166000908152600360205260409020546108e690600163ffffffff610aff16565b600160a060020a03808516600090815260036020526040808220939093559084168152205461091c90600163ffffffff610b1416565b600160a060020a03808416600081815260036020908152604080832095909555858252600190528381208054600160a060020a031916831790559251849391928716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600061099b84600160a060020a0316610b2d565b15156109a957506001610870565b60405160e160020a630a85bd010281523360048201818152600160a060020a03888116602485015260448401879052608060648501908152865160848601528651600095928a169463150b7a029490938c938b938b939260a4019060208501908083838e5b83811015610a26578181015183820152602001610a0e565b50505050905090810190601f168015610a535780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610a7557600080fd5b505af1158015610a89573d6000803e3d6000fd5b505050506040513d6020811015610a9f57600080fd5b5051600160e060020a03191660e160020a630a85bd010214915050949350505050565b600081815260026020526040902054600160a060020a031615610afc5760008181526002602052604090208054600160a060020a03191690555b50565b600082821115610b0e57600080fd5b50900390565b600082820183811015610b2657600080fd5b9392505050565b6000903b119056fea165627a7a72305820a6931f32624383a569b50d7f144d2285b927fc1dbad816a65b05f2ad4d702f300029";

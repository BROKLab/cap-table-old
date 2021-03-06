/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DVPHoldableLockable } from "../DVPHoldableLockable";

export class DVPHoldableLockable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DVPHoldableLockable> {
    return super.deploy(overrides || {}) as Promise<DVPHoldableLockable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DVPHoldableLockable {
    return super.attach(address) as DVPHoldableLockable;
  }
  connect(signer: Signer): DVPHoldableLockable__factory {
    return super.connect(signer) as DVPHoldableLockable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DVPHoldableLockable {
    return new Contract(address, _abi, signerOrProvider) as DVPHoldableLockable;
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
        name: "",
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
  {
    constant: false,
    inputs: [
      {
        name: "token1",
        type: "address",
      },
      {
        name: "token1HoldId",
        type: "bytes32",
      },
      {
        name: "tokenStandard1",
        type: "uint8",
      },
      {
        name: "token2",
        type: "address",
      },
      {
        name: "token2HoldId",
        type: "bytes32",
      },
      {
        name: "tokenStandard2",
        type: "uint8",
      },
      {
        name: "preimage",
        type: "bytes32",
      },
    ],
    name: "executeHolds",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "token1",
        type: "address",
      },
      {
        name: "token1HoldId",
        type: "bytes32",
      },
      {
        name: "tokenStandard1",
        type: "uint8",
      },
      {
        name: "token2",
        type: "address",
      },
      {
        name: "token2HoldId",
        type: "bytes32",
      },
      {
        name: "tokenStandard2",
        type: "uint8",
      },
      {
        name: "preimage",
        type: "bytes32",
      },
      {
        name: "token1Recipient",
        type: "address",
      },
      {
        name: "token2Recipient",
        type: "address",
      },
    ],
    name: "executeHolds",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        name: "token1HoldId",
        type: "bytes32",
      },
      {
        indexed: true,
        name: "token2",
        type: "address",
      },
      {
        indexed: false,
        name: "token2HoldId",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "preimage",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "token1Recipient",
        type: "address",
      },
      {
        indexed: false,
        name: "token2Recipient",
        type: "address",
      },
    ],
    name: "ExecuteHolds",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "holdId",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "lockPreimage",
        type: "bytes32",
      },
    ],
    name: "ExecutedHold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "holdId",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "lockPreimage",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "recipient",
        type: "address",
      },
    ],
    name: "ExecutedHold",
    type: "event",
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
        indexed: false,
        name: "tokens",
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
        name: "fromPartition",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "operator",
        type: "address",
      },
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
        indexed: false,
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "TransferByPartition",
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
        name: "noteHash",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "metadata",
        type: "bytes",
      },
    ],
    name: "CreateNote",
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
        name: "noteHash",
        type: "bytes32",
      },
    ],
    name: "DestroyNote",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060408051808201909152601381527f445650486f6c6461626c654c6f636b61626c6500000000000000000000000000602082015261005b9064010000000061077461006082021704565b6100fb565b6001600080836040516020018082805190602001908083835b602083106100985780518252601f199092019160209182019101610079565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6108608061010a6000396000f3fe608060405234801561001057600080fd5b50600436106100445760e060020a6000350463249cb3fa8114610049578063c4eb63cf14610087578063ce8993a5146100dc575b600080fd5b6100756004803603604081101561005f57600080fd5b5080359060200135600160a060020a031661013f565b60408051918252519081900360200190f35b6100da600480360360e081101561009d57600080fd5b50600160a060020a03813581169160208101359160ff604083013581169260608101359092169160808101359160a0820135169060c001356101ae565b005b6100da60048036036101208110156100f357600080fd5b50600160a060020a03813581169160208101359160ff6040830135811692606081013583169260808201359260a0830135169160c08101359160e08201358116916101000135166101c9565b60008281526020819052604081205460ff16156101a45760405160200180807f455243313832305f4143434550545f4d4147494300000000000000000000000081525060140190506040516020818303038152906040528051906020012090506101a8565b5060005b92915050565b6101c0878787878787876000806101e5565b50505050505050565b6101da8989898989898989896101e5565b505050505050505050565b60018760028111156101f357fe5b141561020a5761020589898585610328565b610279565b600287600281111561021857fe5b141561022957610205898985610481565b6040805160e560020a62461bcd02815260206004820152601660248201527f696e76616c696420746f6b656e207374616e6461726400000000000000000000604482015290519081900360640190fd5b600184600281111561028757fe5b141561029e5761029986868584610328565b6102bd565b60028460028111156102ac57fe5b141561022957610299868685610481565b6040805189815260208101879052808201859052600160a060020a03848116606083015283811660808301529151828916928c16917fefa9382344ecae2ce74ab725742a871e21307c0acc083d06361facb34d1d6fd2919081900360a00190a3505050505050505050565b600160a060020a0384161515610388576040805160e560020a62461bcd02815260206004820152601f60248201527f746f6b656e2063616e206e6f742062652061207a65726f206164647265737300604482015290519081900360640190fd5b600160a060020a03811615156104065783600160a060020a031663445850af84846040518363ffffffff1660e060020a0281526004018083815260200182815260200192505050600060405180830381600087803b1580156103e957600080fd5b505af11580156103fd573d6000803e3d6000fd5b5050505061047b565b6040805160e060020a63603dfcb50281526004810185905260248101849052600160a060020a03838116604483015291519186169163603dfcb59160648082019260009290919082900301818387803b15801561046257600080fd5b505af1158015610476573d6000803e3d6000fd5b505050505b50505050565b600160a060020a03831615156104e1576040805160e560020a62461bcd02815260206004820152601f60248201527f746f6b656e2063616e206e6f742062652061207a65726f206164647265737300604482015290519081900360640190fd5b6000610522846040805190810160405280601681526020017f45524331343030546f6b656e7356616c696461746f720000000000000000000081525061066e565b9050600160a060020a038116151561056e5760405160e560020a62461bcd0281526004018080602001828103825260258152602001806108106025913960400191505060405180910390fd5b6040805160e160020a63096d26f3028152600160a060020a0386811660048301526024820186905291516000928416916312da4de691604480830192610120929190829003018186803b1580156105c457600080fd5b505afa1580156105d8573d6000803e3d6000fd5b505050506040513d6101208110156105ef57600080fd5b50608001516040805160e260020a631531bc23028152600160a060020a0388811660048301526024820188905260448201849052606482018790529151929350908416916354c6f08c9160848082019260009290919082900301818387803b15801561065a57600080fd5b505af11580156101da573d6000803e3d6000fd5b600080826040516020018082805190602001908083835b602083106106a45780518252601f199092019160209182019101610685565b51815160209384036101000a60001901801990921691161790526040805192909401828103601f1901835280855282519282019290922060e160020a63555ddc65028352600160a060020a038b166004840152602483018190529351939650731820a4b7618bde71dce8cdc73aab6c95905fad24955063aabbb8ca94506044808301949193509091829003018186803b15801561074057600080fd5b505afa158015610754573d6000803e3d6000fd5b505050506040513d602081101561076a57600080fd5b5051949350505050565b6001600080836040516020018082805190602001908083835b602083106107ac5780518252601f19909201916020918201910161078d565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548160ff0219169083151502179055505056fe746f6b656e20686173206e6f20686f6c6461626c6520746f6b656e20657874656e73696f6ea165627a7a7230582069a76ea95c854fa0d5c7a82db1f60b580c8baa1c5a509d281c1138dd8fef953a0029";

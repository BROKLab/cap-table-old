import { providers, Signer } from "ethers";
import { createContext, useState } from "react";
import { SymfoniERC1400Context } from "../ForvaltContext";
import { ERC1400 } from "./../typechain/ERC1400";
import { ERC1400__factory } from "./../typechain/factories/ERC1400__factory";

export function getERC1400(
  provider: providers.Provider,
  chainId: number,
  connect: (address: string) => void,
  signer?: Signer,
  address?: string
): SymfoniERC1400Context {
  const addresses: { [chainId: number]: string } = {};
  if (address) {
    addresses[chainId] = address;
  }
  const instance = () => {
    if (chainId in addresses) {
      return signer
        ? ERC1400__factory.connect(addresses[chainId], signer)
        : ERC1400__factory.connect(addresses[chainId], provider);
    }
    return undefined;
  };
  const factory = () => {
    return signer ? new ERC1400__factory(signer) : undefined;
  };
  return {
    instance: instance(),
    factory: factory(),
    connect: connect,
  };
}

// export function getERC1400(props: Props) {
//     const [addresses, setaddresses] = useState<{ [chainId: number]: string }>({});
//     const [instance, setInstance] = useState<ERC1400 | undefined>(() => {
//       if (props.chainId in addresses) {
//         return ERC1400__factory.connect(addresses[props.chainId], props.signer);
//       }
//       return undefined;
//     });
//     const [factory, setFactory] = useState<ERC1400__factory | undefined>(() => {
//       return props.signer ? new ERC1400__factory(props.signer) : undefined;
//     });

//     return [instance, factory];
//   }

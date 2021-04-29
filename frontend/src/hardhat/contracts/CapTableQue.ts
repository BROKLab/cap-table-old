import { providers, Signer } from "ethers";
import { SymfoniCapTableQue } from "../ForvaltContext";
import { CapTableQue__factory } from "../typechain/factories/CapTableQue__factory";

export function getCapTableQue(
  provider: providers.Provider,
  chainId: number,
  connect: (address: string) => void,
  signer?: Signer,
  address?: string
): SymfoniCapTableQue {
  const addresses: { [chainId: number]: string } = {
    31337: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  };
  if (address) {
    addresses[chainId] = address;
  }
  const instance = () => {
    if (chainId in addresses) {
      return signer
        ? CapTableQue__factory.connect(addresses[chainId], signer)
        : CapTableQue__factory.connect(addresses[chainId], provider);
    }
    return undefined;
  };
  const factory = () => {
    return signer ? new CapTableQue__factory(signer) : undefined;
  };
  return {
    instance: instance(),
    factory: factory(),
    connect: connect,
  };
}

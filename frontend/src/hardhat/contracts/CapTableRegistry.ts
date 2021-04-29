import { providers, Signer } from "ethers";
import { SymfoniCapTableRegistry } from "../ForvaltContext";
import { CapTableRegistry__factory } from "../typechain/factories/CapTableRegistry__factory";

export function getCapTableRegistry(
  provider: providers.Provider,
  chainId: number,
  connect: (address: string) => void,
  signer?: Signer,
  address?: string
): SymfoniCapTableRegistry {
  const addresses: { [chainId: number]: string } = {
    31337: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
  };
  if (address) {
    addresses[chainId] = address;
  }
  const instance = () => {
    if (chainId in addresses) {
      return signer
        ? CapTableRegistry__factory.connect(addresses[chainId], signer)
        : CapTableRegistry__factory.connect(addresses[chainId], provider);
    }
    return undefined;
  };
  const factory = () => {
    return signer ? new CapTableRegistry__factory(signer) : undefined;
  };
  return {
    instance: instance(),
    factory: factory(),
    connect: connect,
  };
}

import { ChainInfo } from "@keplr-wallet/types";
import {
  ChainInfo as DesmJSChainInfo,
  DesmosBech32Config,
  DesmosGasPriceStep,
  getChainId,
} from "@desmoslabs/desmjs";

export const DesmosBaseFeatures = [
  "stargate",
  "ibc-transfer",
  "cosmwasm",
  "no-legacy-stdTx",
  "ibc-go",
];

export async function setupChainInfo(
  chain: DesmJSChainInfo,
): Promise<ChainInfo> {
  return {
    chainName: chain.chainName,
    chainId: await getChainId(chain),
    rpc: chain.rpcUrl,
    rest: chain.restUrl,
    bip44: chain.bip44,
    bech32Config: DesmosBech32Config,
    currencies: chain.currencies,
    feeCurrencies: chain.feeCurrencies.map((currency) => ({
      ...currency,
      gasPriceStep: DesmosGasPriceStep,
    })),
    stakeCurrency: chain.stakeCurrency,
    features: [...DesmosBaseFeatures],
  };
}

import { ChainInfo } from "@keplr-wallet/types";
import {
  DesmosBip44,
  DesmosBech32Config,
  DesmosGasPriceStep,
  DesmosBaseFeatures,
} from "./constants";

export const DesmosMainnet: ChainInfo = {
  chainId: "desmos-mainnet",
  chainName: "Desmos",
  rpc: "https://rpc.mainnet.desmos.network",
  rest: "https://api.mainnet.desmos.network",
  bip44: DesmosBip44,
  bech32Config: DesmosBech32Config,
  currencies: [
    {
      coinDenom: "DSM",
      coinMinimalDenom: "udsm",
      coinDecimals: 6,
      coinGeckoId: "desmos",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "udsm",
      coinMinimalDenom: "udsm",
      coinDecimals: 6,
      coinGeckoId: "desmos",
    },
  ],
  stakeCurrency: {
    coinDenom: "DSM",
    coinMinimalDenom: "udsm",
    coinDecimals: 6,
    coinGeckoId: "desmos",
  },
  gasPriceStep: DesmosGasPriceStep,
  features: [...DesmosBaseFeatures],
};

export const DesmosTestnet: ChainInfo = {
  chainId: "morpheus-apollo-2",
  chainName: "Desmos Testnet",
  rpc: "https://rpc.morpheus.desmos.network",
  rest: "https://lcd.morpheus.desmos.network",
  bip44: DesmosBip44,
  bech32Config: DesmosBech32Config,
  currencies: [
    {
      coinDenom: "DARIC",
      coinMinimalDenom: "udaric",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "udaric",
      coinMinimalDenom: "udaric",
      coinDecimals: 6,
    },
  ],
  stakeCurrency: {
    coinDenom: "DARIC",
    coinMinimalDenom: "udaric",
    coinDecimals: 6,
  },
  gasPriceStep: DesmosGasPriceStep,
  features: [...DesmosBaseFeatures],
};

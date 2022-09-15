export const DesmosBech32Config = {
  bech32PrefixAccAddr: "desmos",
  bech32PrefixAccPub: "desmospub",
  bech32PrefixValAddr: "desmosvaloper",
  bech32PrefixValPub: "desmosvaloperpub",
  bech32PrefixConsAddr: "desmosvalcons",
  bech32PrefixConsPub: "desmosvalconspub",
};

export const DesmosGasPriceStep = {
  low: 0.01,
  average: 0.03,
  high: 0.05,
};

export const DesmosBip44 = {
  coinType: 852,
};

export const DesmosBaseFeatures = [
  "stargate",
  "ibc-transfer",
  "no-legacy-stdTx",
  "ibc-go",
];

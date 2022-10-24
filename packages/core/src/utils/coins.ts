import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Currency } from "../types";
import { convertReactionValueToAmino } from "../aminomessages/reactions";

/**
 * Converts a coin to its equivalent which has the provided exponent.
 * @param coin - The source coin.
 * @param toExponent - The target exponent.
 * @param currencies - Array that contains all the possible denoms.
 * @returns Returns the converted coin or null on error.
 */
export function convertCoin(
  coin: Coin,
  toExponent: number,
  currencies: Currency[]
): Coin | null {
  const destCoin = currencies.find(
    (currency) =>
      currency.coinMinimalDenom.toLowerCase() === coin.denom.toLowerCase() ||
      currency.coinDenom.toLowerCase() === coin.denom.toLowerCase()
  );

  if (destCoin === undefined) {
    return null;
  }

  if (toExponent !== 0 && toExponent !== destCoin.coinDecimals) {
    return null;
  }

  let conversionFactor = 0;
  let destCoinDenom = coin.denom;
  switch (coin.denom.toLowerCase()) {
    case destCoin.coinDenom.toLowerCase(): {
      if (toExponent === 0) {
        // We are going from lowest to higher exponent
        conversionFactor = destCoin.coinDecimals;
        destCoinDenom = destCoin.coinMinimalDenom;
      }
      break;
    }

    case destCoin.coinMinimalDenom.toLowerCase(): {
      if (toExponent === destCoin.coinDecimals) {
        // We are going from min to max exponent
        conversionFactor = -destCoin.coinDecimals;
        destCoinDenom = destCoin.coinDenom;
      }
      break;
    }

    default:
      return null;
  }

  const newValue = parseFloat(coin.amount) * 10 ** conversionFactor;
  return {
    amount: newValue.toString(),
    denom: destCoinDenom,
  };
}

export default convertCoin;

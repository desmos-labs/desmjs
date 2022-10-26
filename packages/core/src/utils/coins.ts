import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Decimal, Uint64 } from "@cosmjs/math";
import { Currency } from "../types";

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

  let destCoinAmount = coin.amount;
  let destCoinDenom = coin.denom;
  switch (coin.denom.toLowerCase()) {
    case destCoin.coinDenom.toLowerCase(): {
      if (toExponent === 0) {
        destCoinDenom = destCoin.coinMinimalDenom;
        // We are going from lowest to higher exponent
        destCoinAmount = Decimal.fromUserInput(
          coin.amount,
          destCoin.coinDecimals
        )
          .multiply(Uint64.fromNumber(10 ** destCoin.coinDecimals))
          .toString();
      }
      break;
    }

    case destCoin.coinMinimalDenom.toLowerCase(): {
      if (toExponent === destCoin.coinDecimals) {
        // We are going from min to max exponent
        destCoinDenom = destCoin.coinDenom;
        destCoinAmount = (
          Uint64.fromString(coin.amount).toNumber() /
          10 ** destCoin.coinDecimals
        ).toString();
      }
      break;
    }

    default:
      return null;
  }

  return {
    amount: destCoinAmount,
    denom: destCoinDenom,
  };
}

export default convertCoin;

import {Coin} from "cosmjs-types/cosmos/base/v1beta1/coin";
import {DenomUnit} from "../types";

/**
 * Converts a coin to its equivalent which has the provided exponent.
 * @param coin - The source coin.
 * @param toExponent - The target exponent.
 * @param denomUnits - Array that contains all the possible denoms.
 * @returns Returns the converted coin or null on error.
 */
export function convertCoin(coin: Coin, toExponent: number, denomUnits: DenomUnit[]): Coin | null {

    const currentCoinExponent = denomUnits.find(denomUnit => denomUnit.denom === coin.denom)?.exponent;
    const destCoin = denomUnits.find(denomUnit => denomUnit.exponent === toExponent);

    if (destCoin === undefined || currentCoinExponent === undefined) {
        return null
    }

    if (currentCoinExponent === toExponent) {
        return coin;
    }

    const conversionFactor = Math.pow(10, destCoin.exponent - currentCoinExponent);
    const newValue = parseFloat(coin.amount) / conversionFactor;

    return {
        amount: newValue.toString(),
        denom: destCoin.denom
    }
}
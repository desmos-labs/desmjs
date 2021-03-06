import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { convertCoin } from "./conversions";
import { DesmosMainnet } from "../types";

describe("Utils test", () => {
  describe("Conversions", () => {
    it("Convert base to available exponent", () => {
      const coin: Coin = { amount: "1000000", denom: "udsm" };
      const convertedCoin = convertCoin(coin, 6, DesmosMainnet.denomUnits);

      expect(convertedCoin).not.toBe(null);
      expect(convertedCoin!.denom).toBe("dsm");
      expect(convertedCoin!.amount).toBe("1");
    });

    it("Valid coin to base", () => {
      const coin: Coin = { amount: "1", denom: "dsm" };
      const convertedCoin = convertCoin(coin, 0, DesmosMainnet.denomUnits);

      expect(convertedCoin).not.toBe(null);
      expect(convertedCoin!.denom).toBe("udsm");
      expect(convertedCoin!.amount).toBe("1000000");
    });

    it("Convert coin to same exponent", () => {
      const coin: Coin = { amount: "1", denom: "dsm" };
      const convertedCoin = convertCoin(coin, 6, DesmosMainnet.denomUnits);

      expect(convertedCoin).not.toBe(null);
      expect(convertedCoin!.denom).toBe("dsm");
      expect(convertedCoin!.amount).toBe("1");
    });

    it("Convert base to unknown exponent", () => {
      const coin: Coin = { amount: "1000000", denom: "udsm" };
      const convertedCoin = convertCoin(coin, 5, DesmosMainnet.denomUnits);

      expect(convertedCoin).toBe(null);
    });

    it("Convert unknown denom to exponent", () => {
      const coin: Coin = { amount: "1000000", denom: "unknown" };
      const convertedCoin = convertCoin(coin, 0, DesmosMainnet.denomUnits);

      expect(convertedCoin).toBe(null);
    });

    it("Conversion precision", () => {
      const coin: Coin = { amount: "126432187423", denom: "udsm" };
      const convertedCoin = convertCoin(coin, 6, DesmosMainnet.denomUnits);

      expect(convertedCoin).not.toBe(null);
      expect(convertedCoin!.denom).toBe("dsm");
      expect(convertedCoin!.amount).toBe("126432.187423");
    });
  });
});

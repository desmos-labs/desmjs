import { sortedJsonStringify } from "@cosmjs/amino/build/signdoc";
import { AminoConverters } from "@cosmjs/stargate";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { AminoTypes } from "../../aminotypes";
import {
  assertTxSuccess,
  getAminoSignerAndClient,
  getDirectSignerAndClient,
} from "../../testutils";

/**
 * Contains the data of a single converter test.
 */
export interface ConverterTestData<T> {
  readonly name: string;
  readonly typeUrl: string;
  readonly msg: T;
  readonly expectedJsonSerialized: string;
  readonly testToProtobuf?: boolean;
}

/**
 * Contains the data of a single broadcast test.
 */
export interface BroadcastTest {
  readonly name?: string;
  readonly typeUrl: string;
  readonly message: any;
  readonly signer: string;
}

/**
 * Runs the conversion test for the given {@param data}, using the provided {@param converters}.
 */
export function runConverterTest(
  converters: AminoConverters,
  data: ConverterTestData<any>,
) {
  return async () => {
    const converter = converters[data.typeUrl];
    if (!converter) {
      fail(`Cannot find converter for msg with type url ${data.typeUrl}`);
    }

    // Check toAmino conversion
    const aminoConverted = converter.toAmino(data.msg);
    expect(sortedJsonStringify(aminoConverted)).toBe(
      data.expectedJsonSerialized,
    );

    if (data.testToProtobuf === true) {
      const backToProtobuf = converter.fromAmino(aminoConverted);
      expect(backToProtobuf).toEqual(data.msg);
    }
  };
}

/**
 * Runs the conversion test for the given {@param data}, using the provided {@param aminoTypes}.
 */
export function runAminoTypesTest(
  aminoTypes: AminoTypes,
  data: ConverterTestData<any>,
) {
  return async () => {
    // Check toAmino conversion
    const aminoMsg = aminoTypes.toAmino({
      typeUrl: data.typeUrl,
      value: data.msg,
    });
    expect(sortedJsonStringify(aminoMsg.value)).toBe(
      data.expectedJsonSerialized,
    );

    if (data.testToProtobuf === true) {
      const backToProtobuf = aminoTypes.fromAmino(aminoMsg);
      expect(backToProtobuf.value).toEqual(data.msg);
    }
  };
}

export function runBroadcastTest(test: BroadcastTest) {
  // Sign and broadcast the transaction in direct mode.
  it(`${test.name ?? test.typeUrl} Direct mode`, async () => {
    const [, directClient] = await getDirectSignerAndClient();

    const directSignResult = await directClient.signTx(test.signer, [
      {
        typeUrl: test.typeUrl,
        value: test.message,
      },
    ]);
    const directResult = await directClient.broadcastTx(
      TxRaw.encode(directSignResult.txRaw).finish(),
    );
    expect(directResult.code).toBe(0);
  });

  // Sign and broadcast the transaction in amino mode.
  it(`${test.name ?? test.typeUrl} Amino mode`, async () => {
    const [, aminoClient] = await getAminoSignerAndClient();
    const aminoSignResult = await aminoClient.signTx(test.signer, [
      {
        typeUrl: test.typeUrl,
        value: test.message,
      },
    ]);
    const aminoResult = await aminoClient.broadcastTx(
      TxRaw.encode(aminoSignResult.txRaw).finish(),
    );
    expect(aminoResult.code).toBe(0);
  });
}

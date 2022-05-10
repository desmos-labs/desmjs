import { AminoMsg } from "@cosmjs/amino";

export interface AminoAddressData extends AminoMsg {}

export interface AminoBech32Address extends AminoMsg {
  readonly type: "desmos/Bech32Address";
  readonly value: {
    readonly value: string;
    readonly prefix: string;
  };
}

export interface AminoBase58Address extends AminoMsg {
  readonly type: "desmos/Base58Address";
  readonly value: {
    readonly value: string;
  };
}

export interface AminoHexAddress extends AminoMsg {
  readonly type: "desmos/HexAddress";
  readonly value: {
    readonly value: string;
    readonly prefix: string;
  };
}

export interface AminoSignatureData extends AminoMsg {}

export interface AminoSingleSignatureData extends AminoSignatureData {
  readonly type: "desmos/SingleSignatureData";
  readonly value: {
    readonly mode: number;
    readonly signature: string;
  };
}

export interface AminoMultiSignatureData extends AminoSignatureData {
  readonly type: "desmos/MultiSignatureDat";
  value: {
    readonly bit_array: string;
    readonly signatures: [AminoSignatureData];
  };
}

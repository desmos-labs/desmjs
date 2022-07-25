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

export interface AminoSignature extends AminoMsg {}

export interface AminoSingleSignature extends AminoSignature {
  readonly type: "desmos/SingleSignature";
  readonly value: {
    readonly value_type: number;
    readonly signature: string;
  };
}

export interface AminoCosmosMultiSignature extends AminoSignature {
  readonly type: "desmos/CosmosMultiSignature";
  value: {
    readonly bit_array: string;
    readonly signatures: [AminoSignature];
  };
}

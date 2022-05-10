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

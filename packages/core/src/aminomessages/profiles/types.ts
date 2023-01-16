import { AminoMsg } from "@cosmjs/amino";
import {
  Base58AddressAminoType,
  Bech32AddressAminoType,
  CosmosMultiSignatureAminoType,
  HexAddressAminoType,
  SingleSignatureAminoType,
} from "../../const";

export interface AminoAddressData extends AminoMsg {}

export interface AminoBech32Address extends AminoMsg {
  readonly type: typeof Bech32AddressAminoType;
  readonly value: {
    readonly value: string;
    readonly prefix: string;
  };
}

export interface AminoBase58Address extends AminoMsg {
  readonly type: typeof Base58AddressAminoType;
  readonly value: {
    readonly value: string;
  };
}

export interface AminoHexAddress extends AminoMsg {
  readonly type: typeof HexAddressAminoType;
  readonly value: {
    readonly value: string;
    readonly prefix: string;
  };
}

export interface AminoSignature extends AminoMsg {}

export interface AminoSingleSignature extends AminoSignature {
  readonly type: typeof SingleSignatureAminoType;
  readonly value: {
    readonly value_type: number;
    readonly signature: string;
  };
}

export interface AminoCosmosMultiSignature extends AminoSignature {
  readonly type: typeof CosmosMultiSignatureAminoType;
  value: {
    readonly bit_array: string;
    readonly signatures: [AminoSignature];
  };
}

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
    readonly value: string | undefined; // Undefined if empty
    readonly prefix: string | undefined; // Undefined if empty
  };
}

export interface AminoBase58Address extends AminoMsg {
  readonly type: typeof Base58AddressAminoType;
  readonly value: {
    readonly value: string | undefined; // Undefined if empty
  };
}

export interface AminoHexAddress extends AminoMsg {
  readonly type: typeof HexAddressAminoType;
  readonly value: {
    readonly value: string | undefined; // Undefined if empty
    readonly prefix: string | undefined; // Undefined if empty
  };
}

export interface AminoSignatureData extends AminoMsg {}

export interface AminoSingleSignature extends AminoSignatureData {
  readonly type: typeof SingleSignatureAminoType;
  readonly value: {
    readonly value_type: number | undefined; // Undefined if zero
    readonly signature: string | undefined; // Undefined if empty
  };
}

export interface AminoCosmosMultiSignature extends AminoSignatureData {
  readonly type: typeof CosmosMultiSignatureAminoType;
  value: {
    readonly bit_array: string | undefined; // Undefined if empty
    readonly signatures: AminoSignatureData[] | null; // Null if empty
  };
}

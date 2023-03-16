import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgDeleteProfile,
  MsgSaveProfile,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_profile";
import {
  MsgAcceptDTagTransferRequest,
  MsgCancelDTagTransferRequest,
  MsgRefuseDTagTransferRequest,
  MsgRequestDTagTransfer,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_dtag_requests";
import {
  MsgLinkApplication,
  MsgUnlinkApplication,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_app_links";
import {
  MsgLinkChainAccount,
  MsgUnlinkChainAccount,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_chain_links";
import {
  Base58Address,
  Bech32Address,
  ChainConfig,
  CosmosMultiSignature,
  HexAddress,
  Proof,
  signatureValueTypeFromJSON,
  SingleSignature,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/models_chain_links";
import { Any } from "cosmjs-types/google/protobuf/any";
import { fromBase64 } from "@cosmjs/encoding";
import { PubKey as Secp256k1PubKey } from "cosmjs-types/cosmos/crypto/secp256k1/keys";
import { PubKey as Ed25519PubKey } from "cosmjs-types/cosmos/crypto/ed25519/keys";
import Long from "long";
import { CompactBitArray } from "@desmoslabs/desmjs-types/cosmos/crypto/multisig/v1beta1/multisig";
import { Height } from "cosmjs-types/ibc/core/client/v1/client";
import { Data } from "@desmoslabs/desmjs-types/desmos/profiles/v3/models_app_links";
import { Ed25519Pubkey, Secp256k1Pubkey } from "@cosmjs/amino";
import {
  AminoChainConfig,
  AminoLinkData,
  AminoMsgAcceptDTagTransferRequest,
  AminoMsgCancelDTagTransferRequest,
  AminoMsgDeleteProfile,
  AminoMsgLinkApplication,
  AminoMsgLinkChainAccount,
  AminoMsgRefuseDTagTransferRequest,
  AminoMsgRequestDTagTransfer,
  AminoMsgSaveProfile,
  AminoMsgUnlinkApplication,
  AminoMsgUnlinkChainAccount,
  AminoProof,
  AminoPubKey,
  AminoTimeoutHeight,
} from "./messages";
import {
  AminoAddressData,
  AminoBase58Address,
  AminoBech32Address,
  AminoCosmosMultiSignature,
  AminoHexAddress,
  AminoSignatureData,
  AminoSingleSignature,
} from "./types";
import {
  Base58AddressAminoType,
  Base58AddressTypeUrl,
  Bech32AddressAminoType,
  Bech32AddressTypeUrl,
  CosmosMultiSignatureAminoType,
  CosmosMultiSignatureTypeUrl,
  HexAddressAminoType,
  HexAddressTypeUrl,
  MsgAcceptDTagTransferRequestAminoType,
  MsgAcceptDTagTransferRequestTypeUrl,
  MsgCancelDTagTransferRequestAminoType,
  MsgCancelDTagTransferRequestTypeUrl,
  MsgDeleteProfileAminoType,
  MsgDeleteProfileTypeUrl,
  MsgLinkApplicationAminoType,
  MsgLinkApplicationTypeUrl,
  MsgLinkChainAccountAminoType,
  MsgLinkChainAccountTypeUrl,
  MsgRefuseDTagTransferRequestAminoType,
  MsgRefuseDTagTransferRequestTypeUrl,
  MsgRequestDTagTransferAminoType,
  MsgRequestDTagTransferTypeUrl,
  MsgSaveProfileAminoType,
  MsgSaveProfileTypeUrl,
  MsgUnlinkApplicationAminoType,
  MsgUnlinkApplicationTypeUrl,
  MsgUnlinkChainAccountAminoType,
  MsgUnlinkChainAccountTypeUrl,
  SingleSignatureAminoType,
  SingleSignatureTypeUrl,
} from "../../const";
import {
  fromBase64UndefinedIfEmpty,
  fromNullIfEmptyArray,
  fromOmitEmptyString,
  fromOmitZeroLong,
  nullIfEmptyArray,
  omitEmptyNumber,
  omitEmptyString,
  omitZeroLong,
  toBase64NullIfEmpty,
  toBase64UndefinedIfEmpty,
} from "../utils";

function assertDefinedAndNotNull<T>(
  object?: T,
  message?: string
): asserts object is T {
  if (object === undefined || object === null) {
    throw new Error(message);
  }
}

// --------------------------------------------------------------------------------------------------------------------
// --- MsgLinkApplication inner types converters
// --------------------------------------------------------------------------------------------------------------------

function convertLinkDataToAmino(data: Data | undefined): AminoLinkData {
  return {
    application: omitEmptyString(data?.application || ""),
    username: omitEmptyString(data?.username || ""),
  };
}

function convertLinkDataFromAmino(data: AminoLinkData): Data | undefined {
  if (!data.username && !data.application) {
    return undefined;
  }
  return {
    application: fromOmitEmptyString(data.application),
    username: fromOmitEmptyString(data.username),
  };
}

function convertTimeoutHeightToAmino(
  timeout: Height | undefined
): AminoTimeoutHeight {
  return {
    revision_height: omitZeroLong(
      timeout?.revisionHeight || Long.fromNumber(0)
    ),
    revision_number: omitZeroLong(
      timeout?.revisionNumber || Long.fromNumber(0)
    ),
  };
}

function convertTimeoutHeightFromAmino(
  timeout: AminoTimeoutHeight
): Height | undefined {
  if (!timeout.revision_number && !timeout.revision_height) {
    return undefined;
  }

  return {
    revisionHeight: fromOmitZeroLong(timeout.revision_height),
    revisionNumber: fromOmitZeroLong(timeout.revision_number),
  };
}

// --------------------------------------------------------------------------------------------------------------------
// --- Address data converters
// --------------------------------------------------------------------------------------------------------------------

export function bech32AddressToAny(address: Bech32Address): Any {
  return Any.fromPartial({
    typeUrl: Bech32AddressTypeUrl,
    value: Bech32Address.encode(address).finish(),
  });
}

export function base58AddressToAny(address: Base58Address): Any {
  return Any.fromPartial({
    typeUrl: Base58AddressTypeUrl,
    value: Base58Address.encode(address).finish(),
  });
}

export function hexAddressToAny(address: HexAddress): Any {
  return Any.fromPartial({
    typeUrl: HexAddressTypeUrl,
    value: HexAddress.encode(address).finish(),
  });
}

function convertAddressDataToAmino(address: Any): AminoAddressData {
  if (address.typeUrl === Bech32AddressTypeUrl) {
    const bech32Address = Bech32Address.decode(address.value);
    return {
      type: Bech32AddressAminoType,
      value: {
        prefix: omitEmptyString(bech32Address.prefix),
        value: omitEmptyString(bech32Address.value),
      },
    };
  }

  if (address.typeUrl === Base58AddressTypeUrl) {
    const base58Address = Base58Address.decode(address.value);
    return {
      type: Base58AddressAminoType,
      value: {
        value: omitEmptyString(base58Address.value),
      },
    };
  }

  if (address.typeUrl === HexAddressTypeUrl) {
    const hexAddress = HexAddress.decode(address.value);
    return {
      type: HexAddressAminoType,
      value: {
        prefix: omitEmptyString(hexAddress.prefix),
        values: omitEmptyString(hexAddress.value),
      },
    };
  }

  throw new Error(`Unsupported address type: ${address.typeUrl}`);
}

function convertAddressDataFromAmino(address: AminoAddressData): Any {
  if (address.type === Bech32AddressAminoType) {
    const addressData = address.value as AminoBech32Address["value"];
    return bech32AddressToAny({
      value: fromOmitEmptyString(addressData.value),
      prefix: fromOmitEmptyString(addressData.prefix),
    });
  }

  if (address.type === Base58AddressAminoType) {
    const addressData = address.value as AminoBase58Address["value"];
    return base58AddressToAny({
      value: fromOmitEmptyString(addressData.value),
    });
  }

  if (address.type === HexAddressAminoType) {
    const addressData = address.value as AminoHexAddress["value"];
    return hexAddressToAny({
      value: fromOmitEmptyString(addressData.value),
      prefix: fromOmitEmptyString(addressData.prefix),
    });
  }

  throw new Error(`Unsupported address type: ${address.type}`);
}

// --------------------------------------------------------------------------------------------------------------------
// --- Compact bit array converters
// --------------------------------------------------------------------------------------------------------------------

function convertCompactBitArrayToAmino(
  array: CompactBitArray | undefined
): string | null {
  if (!array) {
    return null;
  }

  let bits = "";
  for (let i = 0; i < array.elems.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    const isIndex = (array.elems[i >> 3] & (1 << (7 - (i % 8)))) > 0;
    bits += isIndex ? "x" : "_";
  }

  return bits;
}

function convertCompactBitArrayFromAmino(
  value: string | undefined
): CompactBitArray {
  if (!value) {
    return {
      elems: Uint8Array.of(),
      extraBitsStored: 0,
    };
  }

  const elements = new Uint8Array(value.length);
  for (let i = 0; i < value.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    elements[i >> 3] |= 1 << (7 - (i % 8));
  }

  return {
    elems: elements,
    extraBitsStored: value.length,
  };
}

// --------------------------------------------------------------------------------------------------------------------
// --- Signature data converters
// --------------------------------------------------------------------------------------------------------------------

export function singleSignatureToAny(signature: SingleSignature): Any {
  return Any.fromPartial({
    typeUrl: SingleSignatureTypeUrl,
    value: SingleSignature.encode(signature).finish(),
  });
}

export function cosmosMultiSignatureToAny(
  signature: CosmosMultiSignature
): Any {
  return Any.fromPartial({
    typeUrl: CosmosMultiSignatureTypeUrl,
    value: CosmosMultiSignature.encode(signature).finish(),
  });
}

function convertSignatureDataToAmino(signatureData: Any): AminoSignatureData {
  if (signatureData.typeUrl === SingleSignatureTypeUrl) {
    const data = SingleSignature.decode(signatureData.value);
    return {
      type: SingleSignatureAminoType,
      value: {
        signature: toBase64UndefinedIfEmpty(data.signature),
        value_type: omitEmptyNumber(data.valueType),
      },
    } as AminoSingleSignature;
  }

  if (signatureData.typeUrl === CosmosMultiSignatureTypeUrl) {
    const data = CosmosMultiSignature.decode(signatureData.value);
    const signatures = data.signatures.map(convertSignatureDataToAmino);
    return {
      type: CosmosMultiSignatureAminoType,
      value: {
        bit_array: convertCompactBitArrayToAmino(data.bitArray),
        signatures: nullIfEmptyArray(signatures),
      },
    } as AminoCosmosMultiSignature;
  }

  throw new Error(`Unsupported signature type: ${signatureData}`);
}

function convertSignatureDataFromAmino(signature: AminoSignatureData): Any {
  if (signature.type === SingleSignatureAminoType) {
    const signatureData = signature.value as AminoSingleSignature["value"];
    return singleSignatureToAny(
      SingleSignature.fromPartial({
        signature: fromBase64UndefinedIfEmpty(signatureData.signature),
        valueType: signatureValueTypeFromJSON(signatureData.value_type),
      })
    );
  }

  if (signature.type === CosmosMultiSignatureAminoType) {
    const signatureData = signature.value as AminoCosmosMultiSignature["value"];
    return cosmosMultiSignatureToAny(
      CosmosMultiSignature.fromPartial({
        bitArray: convertCompactBitArrayFromAmino(signatureData.bit_array),
        signatures: fromNullIfEmptyArray(signatureData.signatures).map(
          convertSignatureDataFromAmino
        ),
      })
    );
  }

  throw new Error(`Unsupported signature type: ${signature}`);
}

// --------------------------------------------------------------------------------------------------------------------
// --- MsgLinkChainAccount inner types converters
// --------------------------------------------------------------------------------------------------------------------

function convertChainConfigToAmino(
  config: ChainConfig | undefined
): AminoChainConfig {
  return {
    name: omitEmptyString(config?.name || ""),
  };
}

function convertChainConfigFromAmino(
  config: AminoChainConfig
): ChainConfig | undefined {
  if (!config.name) {
    return undefined;
  }

  return {
    name: fromOmitEmptyString(config.name),
  };
}

function convertPubKeyToAmino(pubKey: Any): AminoPubKey {
  if (pubKey.typeUrl === "/cosmos.crypto.secp256k1.PubKey") {
    const secp256k1Key = Secp256k1PubKey.decode(pubKey.value);
    return {
      type: "tendermint/PubKeySecp256k1",
      value: toBase64NullIfEmpty(secp256k1Key.key),
    };
  }

  if (pubKey.typeUrl === "/cosmos.crypto.ed25519.PubKey") {
    const ed25519PubKey = Ed25519PubKey.decode(pubKey.value);
    return {
      type: "tendermint/PubKeyEd25519",
      value: toBase64NullIfEmpty(ed25519PubKey.key),
    };
  }

  throw new Error(`Unrecognized pub key type: ${pubKey.typeUrl}`);
}

function convertProofToAmino(proof: Proof): AminoProof {
  assertDefinedAndNotNull(proof.pubKey, "pub key not defined");
  assertDefinedAndNotNull(proof.signature, "signature not defined");
  return {
    signature: convertSignatureDataToAmino(proof.signature),
    plain_text: omitEmptyString(proof.plainText),
    pub_key: convertPubKeyToAmino(proof.pubKey),
  };
}

export function secp256k1PubKeyToAny(pubKey: Secp256k1Pubkey): Any {
  return Any.fromPartial({
    typeUrl: "/cosmos.crypto.secp256k1.PubKey",
    value: Secp256k1PubKey.encode(
      Secp256k1PubKey.fromPartial({
        key: fromBase64(pubKey.value),
      })
    ).finish(),
  });
}

export function ed25519PubKeyToAny(pubKey: Ed25519Pubkey): Any {
  return Any.fromPartial({
    typeUrl: "/cosmos.crypto.ed25519.PubKey",
    value: Ed25519PubKey.encode(
      Ed25519PubKey.fromPartial({
        key: fromBase64(pubKey.value),
      })
    ).finish(),
  });
}

function convertPubKeyFromAmino(pubKey: AminoPubKey): Any {
  if (pubKey.type === "tendermint/PubKeySecp256k1") {
    return secp256k1PubKeyToAny(pubKey as Secp256k1Pubkey);
  }

  if (pubKey.type === "tendermint/PubKeyEd25519") {
    return ed25519PubKeyToAny(pubKey as Ed25519Pubkey);
  }

  throw new Error(`Unsupported key type: ${pubKey.type}`);
}

function convertProofFromAmino(proof: AminoProof): Proof {
  return Proof.fromPartial({
    signature: convertSignatureDataFromAmino(proof.signature),
    plainText: fromOmitEmptyString(proof.plain_text),
    pubKey: convertPubKeyFromAmino(proof.pub_key),
  });
}

// --------------------------------------------------------------------------------------------------------------------
// --- Messages converters
// --------------------------------------------------------------------------------------------------------------------

/**
 * Creates all the Amino converters for the profiles messages.
 */
export function createProfilesConverters(): AminoConverters {
  return {
    // Profiles module
    [MsgSaveProfileTypeUrl]: {
      aminoType: MsgSaveProfileAminoType,
      toAmino: (value: MsgSaveProfile): AminoMsgSaveProfile["value"] => ({
        dtag: omitEmptyString(value.dtag),
        bio: omitEmptyString(value.bio),
        nickname: omitEmptyString(value.nickname),
        profile_picture: omitEmptyString(value.profilePicture),
        cover_picture: omitEmptyString(value.coverPicture),
        creator: omitEmptyString(value.creator),
      }),
      fromAmino: (msg: AminoMsgSaveProfile["value"]): MsgSaveProfile => ({
        dtag: fromOmitEmptyString(msg.dtag),
        nickname: fromOmitEmptyString(msg.nickname),
        bio: fromOmitEmptyString(msg.bio),
        profilePicture: fromOmitEmptyString(msg.profile_picture),
        coverPicture: fromOmitEmptyString(msg.cover_picture),
        creator: fromOmitEmptyString(msg.creator),
      }),
    },
    [MsgDeleteProfileTypeUrl]: {
      aminoType: MsgDeleteProfileAminoType,
      toAmino: (value: MsgDeleteProfile): AminoMsgDeleteProfile["value"] => ({
        creator: omitEmptyString(value.creator),
      }),
      fromAmino: (msg: AminoMsgDeleteProfile["value"]): MsgDeleteProfile => ({
        creator: fromOmitEmptyString(msg.creator),
      }),
    },
    [MsgRequestDTagTransferTypeUrl]: {
      aminoType: MsgRequestDTagTransferAminoType,
      toAmino: (
        value: MsgRequestDTagTransfer
      ): AminoMsgRequestDTagTransfer["value"] => ({
        receiver: omitEmptyString(value.receiver),
        sender: omitEmptyString(value.sender),
      }),
      fromAmino: (
        msg: AminoMsgRequestDTagTransfer["value"]
      ): MsgRequestDTagTransfer => ({
        receiver: fromOmitEmptyString(msg.receiver),
        sender: fromOmitEmptyString(msg.sender),
      }),
    },
    [MsgAcceptDTagTransferRequestTypeUrl]: {
      aminoType: MsgAcceptDTagTransferRequestAminoType,
      toAmino: (
        value: MsgAcceptDTagTransferRequest
      ): AminoMsgAcceptDTagTransferRequest["value"] => ({
        new_dtag: omitEmptyString(value.newDtag),
        sender: omitEmptyString(value.sender),
        receiver: omitEmptyString(value.receiver),
      }),
      fromAmino: (
        msg: AminoMsgAcceptDTagTransferRequest["value"]
      ): MsgAcceptDTagTransferRequest => ({
        newDtag: fromOmitEmptyString(msg.new_dtag),
        sender: fromOmitEmptyString(msg.sender),
        receiver: fromOmitEmptyString(msg.receiver),
      }),
    },
    [MsgRefuseDTagTransferRequestTypeUrl]: {
      aminoType: MsgRefuseDTagTransferRequestAminoType,
      toAmino: (
        value: MsgRefuseDTagTransferRequest
      ): AminoMsgRefuseDTagTransferRequest["value"] => ({
        sender: omitEmptyString(value.sender),
        receiver: omitEmptyString(value.receiver),
      }),
      fromAmino: (
        msg: AminoMsgRefuseDTagTransferRequest["value"]
      ): MsgRefuseDTagTransferRequest => ({
        sender: fromOmitEmptyString(msg.sender),
        receiver: fromOmitEmptyString(msg.receiver),
      }),
    },
    [MsgCancelDTagTransferRequestTypeUrl]: {
      aminoType: MsgCancelDTagTransferRequestAminoType,
      toAmino: (
        value: MsgCancelDTagTransferRequest
      ): AminoMsgCancelDTagTransferRequest["value"] => ({
        sender: omitEmptyString(value.sender),
        receiver: omitEmptyString(value.receiver),
      }),
      fromAmino: (
        msg: AminoMsgCancelDTagTransferRequest["value"]
      ): MsgCancelDTagTransferRequest => ({
        sender: fromOmitEmptyString(msg.sender),
        receiver: fromOmitEmptyString(msg.receiver),
      }),
    },
    [MsgLinkApplicationTypeUrl]: {
      aminoType: MsgLinkApplicationAminoType,
      toAmino: (msg: MsgLinkApplication): AminoMsgLinkApplication["value"] => ({
        sender: omitEmptyString(msg.sender),
        link_data: convertLinkDataToAmino(msg.linkData),
        call_data: omitEmptyString(msg.callData),
        source_channel: omitEmptyString(msg.sourceChannel),
        source_port: omitEmptyString(msg.sourcePort),
        timeout_height: convertTimeoutHeightToAmino(msg.timeoutHeight),
        timeout_timestamp: omitZeroLong(msg.timeoutTimestamp),
      }),
      fromAmino: (
        msg: AminoMsgLinkApplication["value"]
      ): MsgLinkApplication => ({
        sender: fromOmitEmptyString(msg.sender),
        linkData: convertLinkDataFromAmino(msg.link_data),
        callData: fromOmitEmptyString(msg.call_data),
        sourceChannel: fromOmitEmptyString(msg.source_channel),
        sourcePort: fromOmitEmptyString(msg.source_port),
        timeoutHeight: convertTimeoutHeightFromAmino(msg.timeout_height),
        timeoutTimestamp: fromOmitZeroLong(msg.timeout_timestamp),
      }),
    },
    [MsgUnlinkApplicationTypeUrl]: {
      aminoType: MsgUnlinkApplicationAminoType,
      toAmino: (
        msg: MsgUnlinkApplication
      ): AminoMsgUnlinkApplication["value"] => ({
        signer: omitEmptyString(msg.signer),
        application: omitEmptyString(msg.application),
        username: omitEmptyString(msg.username),
      }),
      fromAmino: (
        msg: AminoMsgUnlinkApplication["value"]
      ): MsgUnlinkApplication => ({
        signer: fromOmitEmptyString(msg.signer),
        application: fromOmitEmptyString(msg.application),
        username: fromOmitEmptyString(msg.username),
      }),
    },
    [MsgLinkChainAccountTypeUrl]: {
      aminoType: MsgLinkChainAccountAminoType,
      toAmino: (
        msg: MsgLinkChainAccount
      ): AminoMsgLinkChainAccount["value"] => {
        assertDefinedAndNotNull(msg.chainAddress, "chain address not defined");
        assertDefinedAndNotNull(msg.proof, "proof not defined");
        assertDefinedAndNotNull(msg.chainConfig, "chain config not defined");
        return {
          chain_address: convertAddressDataToAmino(msg.chainAddress),
          chain_config: convertChainConfigToAmino(msg.chainConfig),
          proof: convertProofToAmino(msg.proof),
          signer: omitEmptyString(msg.signer),
        };
      },
      fromAmino: (
        msg: AminoMsgLinkChainAccount["value"]
      ): MsgLinkChainAccount => ({
        chainAddress: convertAddressDataFromAmino(msg.chain_address),
        chainConfig: convertChainConfigFromAmino(msg.chain_config),
        proof: convertProofFromAmino(msg.proof),
        signer: fromOmitEmptyString(msg.signer),
      }),
    },
    [MsgUnlinkChainAccountTypeUrl]: {
      aminoType: MsgUnlinkChainAccountAminoType,
      toAmino: (
        msg: MsgUnlinkChainAccount
      ): AminoMsgUnlinkChainAccount["value"] => ({
        chain_name: omitEmptyString(msg.chainName),
        owner: omitEmptyString(msg.owner),
        target: omitEmptyString(msg.target),
      }),
      fromAmino: (
        msg: AminoMsgUnlinkChainAccount["value"]
      ): MsgUnlinkChainAccount => ({
        chainName: fromOmitEmptyString(msg.chain_name),
        owner: fromOmitEmptyString(msg.owner),
        target: fromOmitEmptyString(msg.target),
      }),
    },
  };
}

export default createProfilesConverters;

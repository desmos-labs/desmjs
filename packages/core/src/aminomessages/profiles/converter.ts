import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgDeleteProfile,
  MsgSaveProfile,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_profile";
import {
  MsgAcceptDTagTransferRequest,
  MsgCancelDTagTransferRequest,
  MsgRefuseDTagTransferRequest,
  MsgRequestDTagTransfer,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_dtag_requests";
import {
  MsgLinkApplication,
  MsgUnlinkApplication,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_app_links";
import {
  MsgLinkChainAccount,
  MsgUnlinkChainAccount,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_chain_links";
import {
  Base58Address,
  Bech32Address,
  ChainConfig,
  HexAddress,
  MultiSignatureData,
  Proof,
  SingleSignatureData,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/models_chain_links";
import { Any } from "cosmjs-types/google/protobuf/any";
import { fromBase64, toBase64 } from "@cosmjs/encoding";
import { PubKey } from "cosmjs-types/cosmos/crypto/secp256k1/keys";
import Long from "long";
import {
  SignMode,
  signModeFromJSON,
} from "@desmoslabs/desmjs-types/cosmos/tx/signing/v1beta1/signing";
import { CompactBitArray } from "@desmoslabs/desmjs-types/cosmos/crypto/multisig/v1beta1/multisig";
import {
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
} from "./messages";
import {
  AminoAddressData,
  AminoBase58Address,
  AminoBech32Address,
  AminoHexAddress,
  AminoMultiSignatureData,
  AminoSignatureData,
  AminoSingleSignatureData,
} from "./types";

function assertDefinedAndNotNull(object?: any, message?: string) {
  if (object === undefined || object === null) {
    throw new Error(message);
  }
}

/**
 * Replace default type values with `undefined`
 * @returns `undefined` if it is the default type value, the original value otherwise
 */
function omitDefault<T extends string | number | Long>(
  input: T
): T | undefined {
  if (typeof input === "string") {
    return input === "" ? undefined : input;
  }

  if (typeof input === "number") {
    return input === 0 ? undefined : input;
  }

  if (Long.isLong(input)) {
    return input.isZero() ? undefined : input;
  }

  throw new Error(`Got unsupported type '${typeof input}'`);
}

function convertAddressData(address: Any): AminoAddressData {
  if (address.typeUrl === "/desmos.profiles.v2.Bech32Address") {
    const bech32Address = Bech32Address.decode(address.value);
    return {
      type: "desmos/Bech32Address",
      value: {
        prefix: bech32Address.prefix,
        value: bech32Address.value,
      },
    };
  }

  if (address.typeUrl === "/desmos.profiles.v2.Base58Address") {
    const base58Address = Base58Address.decode(address.value);
    return {
      type: "desmos/Base58Address",
      value: {
        value: base58Address.value,
      },
    };
  }

  if (address.typeUrl === "/desmos.profiles.v2.HexAddress") {
    const hexAddress = HexAddress.decode(address.value);
    return {
      type: "desmos/HexAddress",
      value: {
        prefix: hexAddress.prefix,
        values: hexAddress.value,
      },
    };
  }

  throw new Error(`Unsupported address type: ${address.typeUrl}`);
}

function convertAminoAddressData(address: AminoAddressData): Any {
  if (address.type === "desmos/Bech32Address") {
    const addressData = address.value as AminoBech32Address["value"];
    return {
      typeUrl: "/desmos.profiles.v2.Bech32Address",
      value: Bech32Address.encode(
        Bech32Address.fromPartial({
          prefix: addressData.prefix,
          value: addressData.value,
        })
      ).finish(),
    };
  }

  if (address.type === "desmos/Base58Address") {
    const addressData = address.value as AminoBase58Address["value"];
    return {
      typeUrl: "/desmos.profiles.v2.Base58Address",
      value: Base58Address.encode(
        Base58Address.fromPartial({
          value: addressData.value,
        })
      ).finish(),
    };
  }

  if (address.type === "desmos/HexAddress") {
    const addressData = address.value as AminoHexAddress["value"];
    return {
      typeUrl: "/desmos.profiles.v2.HexAddress",
      value: HexAddress.encode(
        HexAddress.fromPartial({
          value: addressData.value,
          prefix: addressData.prefix,
        })
      ).finish(),
    };
  }

  throw new Error(`Unsupported address type: ${address.type}`);
}

function convertCompactBitArray(array: CompactBitArray | undefined): string {
  if (!array) {
    return "null";
  }

  let bits = "";
  for (let i = 0; i < array.elems.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    const isIndex = (array.elems[i >> 3] & (1 << (7 - (i % 8)))) > 0;
    bits += isIndex ? "x" : "_";
  }

  return bits;
}

function convertAminoCompactBitArray(value: string): CompactBitArray {
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

function convertSignatureData(signatureData: Any): AminoSignatureData {
  if (signatureData.typeUrl === "/desmos.profiles.v2.SingleSignatureData") {
    const data = SingleSignatureData.decode(signatureData.value);
    return {
      type: "desmos/SingleSignatureData",
      value: {
        mode: SignMode[data.mode],
        signature: toBase64(data.signature),
      },
    };
  }

  if (signatureData.typeUrl === "/desmos.profiles.v2.MultiSignatureData") {
    const data = MultiSignatureData.decode(signatureData.value);
    const signatures = data.signatures.map(convertSignatureData);
    return {
      type: "desmos/MultiSignatureData",
      value: {
        bit_array: convertCompactBitArray(data.bitArray),
        signatures,
      },
    };
  }

  throw new Error(`Unsupported signature type: ${signatureData}`);
}

function convertAminoSignature(signature: AminoSignatureData): Any {
  if (signature.type === "desmos/SingleSignatureData") {
    const signatureData = signature.value as AminoSingleSignatureData["value"];
    return {
      typeUrl: "/desmos.profiles.v2.SingleSignatureData",
      value: SingleSignatureData.encode(
        SingleSignatureData.fromPartial({
          signature: fromBase64(signatureData.signature),
          mode: signModeFromJSON(signatureData.mode),
        })
      ).finish(),
    };
  }

  if (signature.type === "desmos/MultiSignatureData") {
    const signatureData = signature.value as AminoMultiSignatureData["value"];
    const signatures = signatureData.signatures.map(convertAminoSignature);
    return {
      typeUrl: "/desmos.profiles.v2.MultiSignatureData",
      value: MultiSignatureData.encode(
        MultiSignatureData.fromPartial({
          bitArray: convertAminoCompactBitArray(signatureData.bit_array),
          signatures,
        })
      ).finish(),
    };
  }

  throw new Error(`Unsupported signature type: ${signature}`);
}

/**
 * Creates all the Amino converters for the profiles messages.
 */
export function createProfilesConverters(): AminoConverters {
  return {
    // Profiles module
    "/desmos.profiles.v2.MsgSaveProfile": {
      aminoType: "desmos/MsgSaveProfile",
      toAmino: (value: MsgSaveProfile): AminoMsgSaveProfile["value"] => {
        return {
          bio: value.bio,
          creator: value.creator,
          dtag: value.dtag,
          nickname: value.nickname,
          profile_picture: value.profilePicture,
          cover_picture: value.coverPicture,
        };
      },
      fromAmino: (msg: AminoMsgSaveProfile["value"]): MsgSaveProfile => {
        return {
          dtag: msg.dtag,
          creator: msg.creator,
          nickname: msg.nickname ?? "",
          bio: msg.bio ?? "",
          profilePicture: msg.profile_picture ?? "",
          coverPicture: msg.cover_picture ?? "",
        };
      },
    },
    "/desmos.profiles.v2.MsgDeleteProfile": {
      aminoType: "desmos/MsgDeleteProfile",
      toAmino: (value: MsgDeleteProfile): AminoMsgDeleteProfile["value"] => {
        return {
          creator: value.creator,
        };
      },
      fromAmino: (msg: AminoMsgDeleteProfile["value"]): MsgDeleteProfile => {
        return {
          creator: msg.creator,
        };
      },
    },
    "/desmos.profiles.v2.MsgRequestDTagTransfer": {
      aminoType: "desmos/MsgRequestDTagTransfer",
      toAmino: ({
        receiver,
        sender,
      }: MsgRequestDTagTransfer): AminoMsgRequestDTagTransfer["value"] => {
        return {
          receiver,
          sender,
        };
      },
      fromAmino: ({
        receiver,
        sender,
      }: AminoMsgRequestDTagTransfer["value"]): MsgRequestDTagTransfer => {
        return {
          receiver,
          sender,
        };
      },
    },
    "/desmos.profiles.v2.MsgAcceptDTagTransferRequest": {
      aminoType: "desmos/MsgAcceptDTagTransferRequest",
      toAmino: ({
        newDtag,
        sender,
        receiver,
      }: MsgAcceptDTagTransferRequest): AminoMsgAcceptDTagTransferRequest["value"] => {
        return {
          new_dtag: newDtag,
          sender,
          receiver,
        };
      },
      fromAmino: ({
        new_dtag,
        sender,
        receiver,
      }: AminoMsgAcceptDTagTransferRequest["value"]): MsgAcceptDTagTransferRequest => {
        return {
          newDtag: new_dtag,
          sender,
          receiver,
        };
      },
    },
    "/desmos.profiles.v2.MsgRefuseDTagTransferRequest": {
      aminoType: "desmos/MsgRefuseDTagTransferRequest",
      toAmino: ({
        sender,
        receiver,
      }: MsgRefuseDTagTransferRequest): AminoMsgRefuseDTagTransferRequest["value"] => {
        return {
          sender,
          receiver,
        };
      },
      fromAmino: ({
        sender,
        receiver,
      }: AminoMsgRefuseDTagTransferRequest["value"]): MsgRefuseDTagTransferRequest => {
        return {
          sender,
          receiver,
        };
      },
    },
    "/desmos.profiles.v2.MsgCancelDTagTransferRequest": {
      aminoType: "desmos/MsgCancelDTagTransferRequest",
      toAmino: ({
        sender,
        receiver,
      }: MsgCancelDTagTransferRequest): AminoMsgCancelDTagTransferRequest["value"] => {
        return {
          sender,
          receiver,
        };
      },
      fromAmino: ({
        sender,
        receiver,
      }: AminoMsgCancelDTagTransferRequest["value"]): MsgCancelDTagTransferRequest => {
        return {
          sender,
          receiver,
        };
      },
    },
    "/desmos.profiles.v2.MsgLinkApplication": {
      aminoType: "desmos/MsgLinkApplication",
      toAmino: (msg: MsgLinkApplication): AminoMsgLinkApplication["value"] => {
        return {
          sender: msg.sender,
          link_data: {
            application: msg.linkData!.application,
            username: msg.linkData!.username,
          },
          call_data: msg.callData,
          source_channel: msg.sourceChannel,
          source_port: msg.sourcePort,
          timeout_height: msg.timeoutHeight
            ? {
                revision_height: omitDefault(
                  msg.timeoutHeight.revisionHeight
                )?.toString(),
                revision_number: omitDefault(
                  msg.timeoutHeight.revisionNumber
                )?.toString(),
              }
            : {},
          timeout_timestamp: omitDefault(msg.timeoutTimestamp)?.toString(),
        };
      },
      fromAmino: (
        msg: AminoMsgLinkApplication["value"]
      ): MsgLinkApplication => {
        return {
          sender: msg.sender,
          linkData: {
            application: msg.link_data.application,
            username: msg.link_data.username,
          },
          callData: msg.call_data,
          sourceChannel: msg.source_channel,
          sourcePort: msg.source_port,
          timeoutHeight: msg.timeout_height
            ? {
                revisionHeight: Long.fromString(
                  msg.timeout_height.revision_height || "0",
                  true
                ),
                revisionNumber: Long.fromString(
                  msg.timeout_height.revision_number || "0",
                  true
                ),
              }
            : undefined,
          timeoutTimestamp: Long.fromString(msg.timeout_timestamp || "0", true),
        };
      },
    },
    "/desmos.profiles.v2.MsgUnlinkApplication": {
      aminoType: "desmos/MsgUnlinkApplication",
      toAmino: (
        msg: MsgUnlinkApplication
      ): AminoMsgUnlinkApplication["value"] => {
        return {
          signer: msg.signer,
          application: msg.application,
          username: msg.username,
        };
      },
      fromAmino: (
        msg: AminoMsgUnlinkApplication["value"]
      ): MsgUnlinkApplication => {
        return {
          signer: msg.signer,
          application: msg.application,
          username: msg.username,
        };
      },
    },
    "/desmos.profiles.v2.MsgLinkChainAccount": {
      aminoType: "desmos/MsgLinkChainAccount",
      toAmino: (
        msg: MsgLinkChainAccount
      ): AminoMsgLinkChainAccount["value"] => {
        assertDefinedAndNotNull(msg.chainAddress, "chain address not defined");
        assertDefinedAndNotNull(msg.proof, "proof not defined");
        assertDefinedAndNotNull(msg.proof!.pubKey, "pub key not defined");
        assertDefinedAndNotNull(msg.proof!.signature, "signature not defined");
        assertDefinedAndNotNull(msg.chainConfig, "chain config not defined");

        const pubKey = PubKey.decode(msg.proof!.pubKey!.value);
        return {
          signer: msg.signer,
          chain_address: convertAddressData(msg.chainAddress!),
          chain_config: {
            name: msg.chainConfig!.name,
          },
          proof: {
            pub_key: {
              type: "tendermint/PubKeySecp256k1",
              value: toBase64(pubKey.key),
            },
            signature: convertSignatureData(msg.proof!.signature!),
            plain_text: msg.proof!.plainText,
          },
        };
      },
      fromAmino: (
        msg: AminoMsgLinkChainAccount["value"]
      ): MsgLinkChainAccount => {
        if (msg.chain_address.type !== "desmos/Bech32Address") {
          throw new Error(
            `Invalid chain_address type "${msg.chain_address.type}"`
          );
        }

        return {
          signer: msg.signer,
          chainAddress: convertAminoAddressData(msg.chain_address),
          chainConfig: ChainConfig.fromPartial({
            name: msg.chain_config.name,
          }),
          proof: Proof.fromPartial({
            signature: convertAminoSignature(msg.proof.signature),
            plainText: msg.proof.plain_text,
            pubKey: {
              typeUrl: "/cosmos.crypto.secp256k1.PubKey",
              value: PubKey.encode({
                key: fromBase64(msg.proof.pub_key.value),
              }).finish(),
            },
          }),
        };
      },
    },
    "/desmos.profiles.v2.MsgUnlinkChainAccount": {
      aminoType: "desmos/MsgUnlinkChainAccount",
      toAmino: (
        msg: MsgUnlinkChainAccount
      ): AminoMsgUnlinkChainAccount["value"] => {
        return {
          chain_name: msg.chainName,
          owner: msg.owner,
          target: msg.target,
        };
      },
      fromAmino: (
        msg: AminoMsgUnlinkChainAccount["value"]
      ): MsgUnlinkChainAccount => {
        return {
          chainName: msg.chain_name,
          owner: msg.owner,
          target: msg.target,
        };
      },
    },
  };
}

export default createProfilesConverters;

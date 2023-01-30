import { AminoMsg } from "@cosmjs/amino";
import { AminoAddressData, AminoSignatureData } from "./types";
import {
  MsgAcceptDTagTransferRequestAminoType,
  MsgCancelDTagTransferRequestAminoType,
  MsgDeleteProfileAminoType,
  MsgLinkApplicationAminoType,
  MsgLinkChainAccountAminoType,
  MsgRefuseDTagTransferRequestAminoType,
  MsgRequestDTagTransferAminoType,
  MsgSaveProfileAminoType,
  MsgUnlinkApplicationAminoType,
  MsgUnlinkChainAccountAminoType,
} from "../../const";

export interface AminoMsgSaveProfile extends AminoMsg {
  readonly type: typeof MsgSaveProfileAminoType;
  readonly value: {
    creator: string | undefined; // Undefined if empty
    dtag: string | undefined; // Undefined if empty
    nickname: string | undefined; // Undefined if empty
    bio: string | undefined; // Undefined if empty
    profile_picture: string | undefined; // Undefined if empty
    cover_picture: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgDeleteProfile extends AminoMsg {
  readonly type: typeof MsgDeleteProfileAminoType;
  readonly value: {
    creator: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgRequestDTagTransfer extends AminoMsg {
  readonly type: typeof MsgRequestDTagTransferAminoType;
  readonly value: {
    receiver: string | undefined; // Undefined if empty
    sender: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgAcceptDTagTransferRequest extends AminoMsg {
  readonly type: typeof MsgAcceptDTagTransferRequestAminoType;
  readonly value: {
    new_dtag: string | undefined; // Undefined if empty
    sender: string | undefined; // Undefined if empty
    receiver: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgRefuseDTagTransferRequest extends AminoMsg {
  readonly type: typeof MsgRefuseDTagTransferRequestAminoType;
  readonly value: {
    sender: string | undefined; // Undefined if empty
    receiver: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgCancelDTagTransferRequest extends AminoMsg {
  readonly type: typeof MsgCancelDTagTransferRequestAminoType;
  readonly value: {
    sender: string | undefined; // Undefined if empty
    receiver: string | undefined; // Undefined if empty
  };
}

export interface AminoLinkData {
  readonly application: string | undefined; // Undefined if empty
  readonly username: string | undefined; // Undefined if empty
}

export interface AminoTimeoutHeight {
  readonly revision_height: string | undefined; // Undefined if empty
  readonly revision_number: string | undefined; // Undefined if empty
}

export interface AminoMsgLinkApplication extends AminoMsg {
  readonly type: typeof MsgLinkApplicationAminoType;
  readonly value: {
    sender: string | undefined; // Undefined if empty
    link_data: AminoLinkData;
    call_data: string | undefined; // Undefined if empty
    source_channel: string | undefined; // Undefined if empty
    source_port: string | undefined; // Undefined if empty
    timeout_height: AminoTimeoutHeight;
    timeout_timestamp?: string | undefined; // Undefined if zero
  };
}

export interface AminoMsgUnlinkApplication extends AminoMsg {
  readonly type: typeof MsgUnlinkApplicationAminoType;
  readonly value: {
    signer: string | undefined; // Undefined if empty
    application: string | undefined; // Undefined if empty
    username: string | undefined; // Undefined if empty
  };
}

export interface AminoChainConfig {
  readonly name: string | undefined; // Undefined if empty
}

export interface AminoPubKey {
  readonly type: string;
  readonly value: string | null; // Null if empty
}

export interface AminoProof {
  readonly pub_key: AminoPubKey;
  readonly signature: AminoSignatureData;
  readonly plain_text: string | undefined; // Undefined if empty
}

export interface AminoMsgLinkChainAccount extends AminoMsg {
  readonly type: typeof MsgLinkChainAccountAminoType;
  readonly value: {
    chain_address: AminoAddressData;
    chain_config: AminoChainConfig;
    proof: AminoProof;
    signer: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgUnlinkChainAccount extends AminoMsg {
  readonly type: typeof MsgUnlinkChainAccountAminoType;
  readonly value: {
    chain_name: string | undefined; // Undefined when empty
    owner: string | undefined; // Undefined when empty
    target: string | undefined; // Undefined when empty
  };
}

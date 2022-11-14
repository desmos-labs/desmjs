/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  MsgLinkApplication,
  MsgLinkApplicationResponse,
  MsgUnlinkApplication,
  MsgUnlinkApplicationResponse,
} from "./msgs_app_links";
import {
  MsgLinkChainAccount,
  MsgLinkChainAccountResponse,
  MsgSetDefaultExternalAddress,
  MsgSetDefaultExternalAddressResponse,
  MsgUnlinkChainAccount,
  MsgUnlinkChainAccountResponse,
} from "./msgs_chain_links";
import {
  MsgAcceptDTagTransferRequest,
  MsgAcceptDTagTransferRequestResponse,
  MsgCancelDTagTransferRequest,
  MsgCancelDTagTransferRequestResponse,
  MsgRefuseDTagTransferRequest,
  MsgRefuseDTagTransferRequestResponse,
  MsgRequestDTagTransfer,
  MsgRequestDTagTransferResponse,
} from "./msgs_dtag_requests";
import { MsgDeleteProfile, MsgDeleteProfileResponse, MsgSaveProfile, MsgSaveProfileResponse } from "./msgs_profile";

/** Msg defines the relationships Msg service. */
export interface Msg {
  /** SaveProfile defines the method to save a profile */
  SaveProfile(request: MsgSaveProfile): Promise<MsgSaveProfileResponse>;
  /** DeleteProfile defines the method to delete an existing profile */
  DeleteProfile(request: MsgDeleteProfile): Promise<MsgDeleteProfileResponse>;
  /**
   * RequestDTagTransfer defines the method to request another user to transfer
   * their DTag to you
   */
  RequestDTagTransfer(request: MsgRequestDTagTransfer): Promise<MsgRequestDTagTransferResponse>;
  /**
   * CancelDTagTransferRequest defines the method to cancel an outgoing DTag
   * transfer request
   */
  CancelDTagTransferRequest(request: MsgCancelDTagTransferRequest): Promise<MsgCancelDTagTransferRequestResponse>;
  /**
   * AcceptDTagTransferRequest defines the method to accept an incoming DTag
   * transfer request
   */
  AcceptDTagTransferRequest(request: MsgAcceptDTagTransferRequest): Promise<MsgAcceptDTagTransferRequestResponse>;
  /**
   * RefuseDTagTransferRequest defines the method to refuse an incoming DTag
   * transfer request
   */
  RefuseDTagTransferRequest(request: MsgRefuseDTagTransferRequest): Promise<MsgRefuseDTagTransferRequestResponse>;
  /**
   * LinkChainAccount defines a method to link an external chain account to a
   * profile
   */
  LinkChainAccount(request: MsgLinkChainAccount): Promise<MsgLinkChainAccountResponse>;
  /**
   * UnlinkChainAccount defines a method to unlink an external chain account
   * from a profile
   */
  UnlinkChainAccount(request: MsgUnlinkChainAccount): Promise<MsgUnlinkChainAccountResponse>;
  /**
   * SetDefaultExternalAddress allows to set a specific external address as the
   * default one for a given chain
   */
  SetDefaultExternalAddress(request: MsgSetDefaultExternalAddress): Promise<MsgSetDefaultExternalAddressResponse>;
  /**
   * LinkApplication defines a method to create a centralized application
   * link
   */
  LinkApplication(request: MsgLinkApplication): Promise<MsgLinkApplicationResponse>;
  /** UnlinkApplication defines a method to remove a centralized application */
  UnlinkApplication(request: MsgUnlinkApplication): Promise<MsgUnlinkApplicationResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "desmos.profiles.v3.Msg";
    this.rpc = rpc;
    this.SaveProfile = this.SaveProfile.bind(this);
    this.DeleteProfile = this.DeleteProfile.bind(this);
    this.RequestDTagTransfer = this.RequestDTagTransfer.bind(this);
    this.CancelDTagTransferRequest = this.CancelDTagTransferRequest.bind(this);
    this.AcceptDTagTransferRequest = this.AcceptDTagTransferRequest.bind(this);
    this.RefuseDTagTransferRequest = this.RefuseDTagTransferRequest.bind(this);
    this.LinkChainAccount = this.LinkChainAccount.bind(this);
    this.UnlinkChainAccount = this.UnlinkChainAccount.bind(this);
    this.SetDefaultExternalAddress = this.SetDefaultExternalAddress.bind(this);
    this.LinkApplication = this.LinkApplication.bind(this);
    this.UnlinkApplication = this.UnlinkApplication.bind(this);
  }
  SaveProfile(request: MsgSaveProfile): Promise<MsgSaveProfileResponse> {
    const data = MsgSaveProfile.encode(request).finish();
    const promise = this.rpc.request(this.service, "SaveProfile", data);
    return promise.then((data) => MsgSaveProfileResponse.decode(new _m0.Reader(data)));
  }

  DeleteProfile(request: MsgDeleteProfile): Promise<MsgDeleteProfileResponse> {
    const data = MsgDeleteProfile.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteProfile", data);
    return promise.then((data) => MsgDeleteProfileResponse.decode(new _m0.Reader(data)));
  }

  RequestDTagTransfer(request: MsgRequestDTagTransfer): Promise<MsgRequestDTagTransferResponse> {
    const data = MsgRequestDTagTransfer.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestDTagTransfer", data);
    return promise.then((data) => MsgRequestDTagTransferResponse.decode(new _m0.Reader(data)));
  }

  CancelDTagTransferRequest(request: MsgCancelDTagTransferRequest): Promise<MsgCancelDTagTransferRequestResponse> {
    const data = MsgCancelDTagTransferRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelDTagTransferRequest", data);
    return promise.then((data) => MsgCancelDTagTransferRequestResponse.decode(new _m0.Reader(data)));
  }

  AcceptDTagTransferRequest(request: MsgAcceptDTagTransferRequest): Promise<MsgAcceptDTagTransferRequestResponse> {
    const data = MsgAcceptDTagTransferRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcceptDTagTransferRequest", data);
    return promise.then((data) => MsgAcceptDTagTransferRequestResponse.decode(new _m0.Reader(data)));
  }

  RefuseDTagTransferRequest(request: MsgRefuseDTagTransferRequest): Promise<MsgRefuseDTagTransferRequestResponse> {
    const data = MsgRefuseDTagTransferRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RefuseDTagTransferRequest", data);
    return promise.then((data) => MsgRefuseDTagTransferRequestResponse.decode(new _m0.Reader(data)));
  }

  LinkChainAccount(request: MsgLinkChainAccount): Promise<MsgLinkChainAccountResponse> {
    const data = MsgLinkChainAccount.encode(request).finish();
    const promise = this.rpc.request(this.service, "LinkChainAccount", data);
    return promise.then((data) => MsgLinkChainAccountResponse.decode(new _m0.Reader(data)));
  }

  UnlinkChainAccount(request: MsgUnlinkChainAccount): Promise<MsgUnlinkChainAccountResponse> {
    const data = MsgUnlinkChainAccount.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnlinkChainAccount", data);
    return promise.then((data) => MsgUnlinkChainAccountResponse.decode(new _m0.Reader(data)));
  }

  SetDefaultExternalAddress(request: MsgSetDefaultExternalAddress): Promise<MsgSetDefaultExternalAddressResponse> {
    const data = MsgSetDefaultExternalAddress.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetDefaultExternalAddress", data);
    return promise.then((data) => MsgSetDefaultExternalAddressResponse.decode(new _m0.Reader(data)));
  }

  LinkApplication(request: MsgLinkApplication): Promise<MsgLinkApplicationResponse> {
    const data = MsgLinkApplication.encode(request).finish();
    const promise = this.rpc.request(this.service, "LinkApplication", data);
    return promise.then((data) => MsgLinkApplicationResponse.decode(new _m0.Reader(data)));
  }

  UnlinkApplication(request: MsgUnlinkApplication): Promise<MsgUnlinkApplicationResponse> {
    const data = MsgUnlinkApplication.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnlinkApplication", data);
    return promise.then((data) => MsgUnlinkApplicationResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgLinkApplication,
  MsgUnlinkApplication,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_app_links";
import {
  MsgLinkChainAccount,
  MsgUnlinkChainAccount,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_chain_links";
import {
  MsgAcceptDTagTransferRequest,
  MsgCancelDTagTransferRequest,
  MsgRefuseDTagTransferRequest,
  MsgRequestDTagTransfer,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_dtag_requests";
import {
  MsgDeleteProfile,
  MsgSaveProfile,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_profile";
import {
  Base58Address,
  Bech32Address,
  CosmosMultiSignature,
  HexAddress,
  SingleSignature,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/models_chain_links";
import {
  Base58AddressTypeUrl,
  Bech32AddressTypeUrl,
  CosmosMultiSignatureTypeUrl,
  HexAddressTypeUrl,
  MsgAcceptDTagTransferRequestTypeUrl,
  MsgCancelDTagTransferRequestTypeUrl,
  MsgDeleteProfileTypeUrl,
  MsgLinkApplicationTypeUrl,
  MsgLinkChainAccountTypeUrl,
  MsgRefuseDTagTransferRequestTypeUrl,
  MsgRequestDTagTransferTypeUrl,
  MsgSaveProfileTypeUrl,
  MsgUnlinkApplicationTypeUrl,
  MsgUnlinkChainAccountTypeUrl,
  SingleSignatureTypeUrl,
} from "./consts";

export const registry: ReadonlyArray<[string, GeneratedType]> = [
  // Types
  [Bech32AddressTypeUrl, Bech32Address],
  [Base58AddressTypeUrl, Base58Address],
  [HexAddressTypeUrl, HexAddress],
  [SingleSignatureTypeUrl, SingleSignature],
  [CosmosMultiSignatureTypeUrl, CosmosMultiSignature],

  // Messages
  [MsgLinkApplicationTypeUrl, MsgLinkApplication],
  [MsgUnlinkApplicationTypeUrl, MsgUnlinkApplication],
  [MsgLinkChainAccountTypeUrl, MsgLinkChainAccount],
  [MsgUnlinkChainAccountTypeUrl, MsgUnlinkChainAccount],
  [MsgRequestDTagTransferTypeUrl, MsgRequestDTagTransfer],
  [MsgCancelDTagTransferRequestTypeUrl, MsgCancelDTagTransferRequest],
  [MsgAcceptDTagTransferRequestTypeUrl, MsgAcceptDTagTransferRequest],
  [MsgRefuseDTagTransferRequestTypeUrl, MsgRefuseDTagTransferRequest],
  [MsgSaveProfileTypeUrl, MsgSaveProfile],
  [MsgDeleteProfileTypeUrl, MsgDeleteProfile],
];

export default registry;

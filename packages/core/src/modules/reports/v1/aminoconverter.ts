import {
  MsgAddReason,
  MsgCreateReport,
  MsgDeleteReport,
  MsgRemoveReason,
  MsgSupportStandardReason,
} from "@desmoslabs/desmjs-types/desmos/reports/v1/msgs";
import { Any } from "cosmjs-types/google/protobuf/any";
import { assertDefined, assertDefinedAndNotNull } from "@cosmjs/utils";
import {
  PostTarget,
  UserTarget,
} from "@desmoslabs/desmjs-types/desmos/reports/v1/models";
import { AminoPostTarget, AminoUserTarget } from "./aminotypes";
import {
  AminoMsgAddReason,
  AminoMsgCreateReport,
  AminoMsgDeleteReport,
  AminoMsgRemoveReason,
  AminoMsgSupportStandardReason,
} from "./aminomessages";
import {
  MsgAddReasonAminoType,
  MsgAddReasonTypeUrl,
  MsgCreateReportAminoType,
  MsgCreateReportTypeUrl,
  MsgDeleteReportAminoType,
  MsgDeleteReportTypeUrl,
  MsgRemoveReasonAminoType,
  MsgRemoveReasonTypeUrl,
  MsgSupportStandardReasonAminoType,
  MsgSupportStandardReasonTypeUrl,
  PostTargetAminoType,
  PostTargetTypeUrl,
  UserTargetAminoType,
  UserTargetTypeUrl,
} from "./consts";
import {
  fromOmitEmptyArray,
  fromOmitEmptyNumber,
  fromOmitEmptyString,
  fromOmitZeroLong,
  omitEmptyArray,
  omitEmptyNumber,
  omitEmptyString,
  omitZeroLong,
} from "../../../utils/aminoutils";
import { AminoConverters, AminoTypes } from "../../../aminotypes";

export function userTargetToAny(target: UserTarget): Any {
  return Any.fromPartial({
    typeUrl: UserTargetTypeUrl,
    value: UserTarget.encode(target).finish(),
  });
}

export function postTargetToAny(target: PostTarget): Any {
  return Any.fromPartial({
    typeUrl: PostTargetTypeUrl,
    value: PostTarget.encode(target).finish(),
  });
}

/**
 * Creates all the Amino converters for the reports messages.
 */
export const AminoConverter: AminoConverters = {
  // Types
  [UserTargetTypeUrl]: {
    aminoType: UserTargetAminoType,
    toAmino: (target: UserTarget): AminoUserTarget["value"] => ({
      user: omitEmptyString(target.user),
    }),
    fromAmino: (msg: AminoUserTarget["value"]): UserTarget =>
      UserTarget.fromPartial({
        user: fromOmitEmptyString(msg.user),
      }),
  },
  [PostTargetTypeUrl]: {
    aminoType: PostTargetAminoType,
    toAmino: (target: PostTarget): AminoPostTarget["value"] => ({
      post_id: omitZeroLong(target.postId),
    }),
    fromAmino: (target: AminoPostTarget["value"]): PostTarget =>
      PostTarget.fromPartial({
        postId: fromOmitZeroLong(target.post_id),
      }),
  },

  // Messages
  [MsgCreateReportTypeUrl]: {
    aminoType: MsgCreateReportAminoType,
    toAmino: (
      msg: MsgCreateReport,
      aminoTypes?: AminoTypes
    ): AminoMsgCreateReport["value"] => {
      assertDefinedAndNotNull(msg.target, "report target not defined");
      assertDefined(
        aminoTypes,
        "aminoTypes must be defined to convert MsgCreateReport.target to amino"
      );
      return {
        subspace_id: omitZeroLong(msg.subspaceId),
        target: aminoTypes.fromAny(msg.target),
        reasons_ids: omitEmptyArray(msg.reasonsIds),
        message: omitEmptyString(msg.message),
        reporter: omitEmptyString(msg.reporter),
      };
    },
    fromAmino: (
      msg: AminoMsgCreateReport["value"],
      aminoTypes?: AminoTypes
    ): MsgCreateReport => {
      assertDefined(
        aminoTypes,
        "aminoTypes must be defined to convert AminoMsgCreateReport.target from amino"
      );
      return {
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        target: aminoTypes.toAny(msg.target),
        reasonsIds: fromOmitEmptyArray(msg.reasons_ids),
        message: fromOmitEmptyString(msg.message),
        reporter: fromOmitEmptyString(msg.reporter),
      };
    },
  },
  [MsgDeleteReportTypeUrl]: {
    aminoType: MsgDeleteReportAminoType,
    toAmino: (msg: MsgDeleteReport): AminoMsgDeleteReport["value"] => ({
      subspace_id: omitZeroLong(msg.subspaceId),
      report_id: omitZeroLong(msg.reportId),
      signer: omitEmptyString(msg.signer),
    }),
    fromAmino: (msg: AminoMsgDeleteReport["value"]): MsgDeleteReport => ({
      subspaceId: fromOmitZeroLong(msg.subspace_id),
      reportId: fromOmitZeroLong(msg.report_id),
      signer: fromOmitEmptyString(msg.signer),
    }),
  },
  [MsgSupportStandardReasonTypeUrl]: {
    aminoType: MsgSupportStandardReasonAminoType,
    toAmino: (
      msg: MsgSupportStandardReason
    ): AminoMsgSupportStandardReason["value"] => ({
      subspace_id: omitZeroLong(msg.subspaceId),
      standard_reason_id: omitEmptyNumber(msg.standardReasonId),
      signer: omitEmptyString(msg.signer),
    }),
    fromAmino: (
      msg: AminoMsgSupportStandardReason["value"]
    ): MsgSupportStandardReason => ({
      subspaceId: fromOmitZeroLong(msg.subspace_id),
      standardReasonId: fromOmitEmptyNumber(msg.standard_reason_id),
      signer: fromOmitEmptyString(msg.signer),
    }),
  },
  [MsgAddReasonTypeUrl]: {
    aminoType: MsgAddReasonAminoType,
    toAmino: (msg: MsgAddReason): AminoMsgAddReason["value"] => ({
      subspace_id: omitZeroLong(msg.subspaceId),
      title: omitEmptyString(msg.title),
      description: omitEmptyString(msg.description),
      signer: omitEmptyString(msg.signer),
    }),
    fromAmino: (msg: AminoMsgAddReason["value"]): MsgAddReason => ({
      subspaceId: fromOmitZeroLong(msg.subspace_id),
      title: fromOmitEmptyString(msg.title),
      description: fromOmitEmptyString(msg.description),
      signer: fromOmitEmptyString(msg.signer),
    }),
  },
  [MsgRemoveReasonTypeUrl]: {
    aminoType: MsgRemoveReasonAminoType,
    toAmino: (msg: MsgRemoveReason): AminoMsgRemoveReason["value"] => ({
      subspace_id: omitZeroLong(msg.subspaceId),
      reason_id: omitEmptyNumber(msg.reasonId),
      signer: omitEmptyString(msg.signer),
    }),
    fromAmino: (msg: AminoMsgRemoveReason["value"]): MsgRemoveReason => ({
      subspaceId: fromOmitZeroLong(msg.subspace_id),
      reasonId: fromOmitEmptyNumber(msg.reason_id),
      signer: fromOmitEmptyString(msg.signer),
    }),
  },
};

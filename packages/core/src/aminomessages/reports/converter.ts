import { AminoConverter, AminoConverters } from "@cosmjs/stargate";
import {
  MsgAddReason,
  MsgCreateReport,
  MsgDeleteReport,
  MsgRemoveReason,
  MsgSupportStandardReason,
} from "@desmoslabs/desmjs-types/desmos/reports/v1/msgs";
import { Any } from "cosmjs-types/google/protobuf/any";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import {
  PostTarget,
  UserTarget,
} from "@desmoslabs/desmjs-types/desmos/reports/v1/models";
import Long from "long";
import { AminoPostTarget, AminoReportTarget, AminoUserTarget } from "./types";
import {
  AminoMsgAddReason,
  AminoMsgCreateReport,
  AminoMsgDeleteReport,
  AminoMsgRemoveReason,
  AminoMsgSupportStandardReason,
} from "./messages";
import { isAminoConverter } from "../../types";
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
} from "../../const";
import {
  fromOmitEmptyArray,
  fromOmitEmptyNumber,
  fromOmitEmptyString,
  fromOmitZeroLong,
  omitEmptyArray,
  omitEmptyNumber,
  omitEmptyString,
  omitZeroLong,
} from "../utils";

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

export const reportTargetConverters: AminoConverters = {
  [UserTargetTypeUrl]: {
    aminoType: UserTargetAminoType,
    toAmino: (msg: Any): AminoUserTarget["value"] => {
      const target = UserTarget.decode(msg.value);
      return {
        user: omitEmptyString(target.user),
      };
    },
    fromAmino: (msg: AminoUserTarget["value"]): Any =>
      userTargetToAny(
        UserTarget.fromPartial({
          user: fromOmitEmptyString(msg.user),
        })
      ),
  },
  [PostTargetTypeUrl]: {
    aminoType: PostTargetAminoType,
    toAmino: (msg: Any): AminoPostTarget["value"] => {
      const target = PostTarget.decode(msg.value);
      return {
        post_id: omitZeroLong(target.postId),
      };
    },
    fromAmino: (msg: AminoPostTarget["value"]): Any =>
      postTargetToAny(
        PostTarget.fromPartial({
          postId: fromOmitZeroLong(msg.post_id),
        })
      ),
  },
};

export function convertReportTargetToAmino(target: Any): AminoReportTarget {
  const converter = reportTargetConverters[target.typeUrl] as AminoConverter;
  return {
    type: converter.aminoType,
    value: converter.toAmino(target),
  };
}

export function convertReportTargetFromAmino(target: AminoReportTarget): Any {
  const matches = Object.entries(reportTargetConverters)
    .filter(isAminoConverter)
    .filter(([, { aminoType }]) => aminoType === target.type);
  const [, converter] = matches[0];
  return converter.fromAmino(target);
}

/**
 * Creates all the Amino converters for the reports messages.
 */
export function createReportsConverters(): AminoConverters {
  return {
    [MsgCreateReportTypeUrl]: {
      aminoType: MsgCreateReportAminoType,
      toAmino: (msg: MsgCreateReport): AminoMsgCreateReport["value"] => {
        assertDefinedAndNotNull(msg.target, "report target not defined");
        return {
          subspace_id: omitZeroLong(msg.subspaceId),
          target: convertReportTargetToAmino(msg.target),
          reasons_ids: omitEmptyArray(msg.reasonsIds),
          message: omitEmptyString(msg.message),
          reporter: omitEmptyString(msg.reporter),
        };
      },
      fromAmino: (msg: AminoMsgCreateReport["value"]): MsgCreateReport => ({
        subspaceId: fromOmitZeroLong(msg.subspace_id),
        target: convertReportTargetFromAmino(msg.target),
        reasonsIds: fromOmitEmptyArray(msg.reasons_ids),
        message: fromOmitEmptyString(msg.message),
        reporter: fromOmitEmptyString(msg.reporter),
      }),
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
        subspace_id: msg.subspaceId.toString(),
        title: msg.title,
        description: omitEmptyString(msg.description),
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgAddReason["value"]): MsgAddReason => ({
        subspaceId: Long.fromString(msg.subspace_id),
        title: msg.title,
        description: fromOmitEmptyString(msg.description),
        signer: msg.signer,
      }),
    },
    [MsgRemoveReasonTypeUrl]: {
      aminoType: MsgRemoveReasonAminoType,
      toAmino: (msg: MsgRemoveReason): AminoMsgRemoveReason["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        reason_id: msg.reasonId,
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgRemoveReason["value"]): MsgRemoveReason => ({
        subspaceId: Long.fromString(msg.subspace_id),
        reasonId: msg.reason_id,
        signer: msg.signer,
      }),
    },
  };
}

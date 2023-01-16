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

export function convertUserTargetToAny(target: UserTarget): Any {
  return Any.fromPartial({
    typeUrl: UserTargetTypeUrl,
    value: UserTarget.encode(target).finish(),
  });
}

export function convertPostTargetToAny(target: PostTarget): Any {
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
        user: target.user,
      };
    },
    fromAmino: (msg: AminoUserTarget["value"]): Any =>
      convertUserTargetToAny(
        UserTarget.fromPartial({
          user: msg.user,
        })
      ),
  },
  [PostTargetTypeUrl]: {
    aminoType: PostTargetAminoType,
    toAmino: (msg: Any): AminoPostTarget["value"] => {
      const target = PostTarget.decode(msg.value);
      return {
        post_id: target.postId.toString(),
      };
    },
    fromAmino: (msg: AminoPostTarget["value"]): Any =>
      convertPostTargetToAny(
        PostTarget.fromPartial({
          postId: Long.fromString(msg.post_id),
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
          subspace_id: msg.subspaceId.toString(),
          reasons_ids: msg.reasonsIds,
          message: msg.message,
          reporter: msg.reporter,
          target: convertReportTargetToAmino(msg.target),
        };
      },
      fromAmino: (msg: AminoMsgCreateReport["value"]): MsgCreateReport => ({
        subspaceId: Long.fromString(msg.subspace_id),
        reasonsIds: msg.reasons_ids,
        message: msg.message,
        reporter: msg.reporter,
        target: convertReportTargetFromAmino(msg.target),
      }),
    },
    [MsgDeleteReportTypeUrl]: {
      aminoType: MsgDeleteReportAminoType,
      toAmino: (msg: MsgDeleteReport): AminoMsgDeleteReport["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        report_id: msg.reportId.toString(),
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgDeleteReport["value"]): MsgDeleteReport => ({
        subspaceId: Long.fromString(msg.subspace_id),
        reportId: Long.fromString(msg.report_id),
        signer: msg.signer,
      }),
    },
    [MsgSupportStandardReasonTypeUrl]: {
      aminoType: MsgSupportStandardReasonAminoType,
      toAmino: (
        msg: MsgSupportStandardReason
      ): AminoMsgSupportStandardReason["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        standard_reason_id: msg.standardReasonId,
        signer: msg.signer,
      }),
      fromAmino: (
        msg: AminoMsgSupportStandardReason["value"]
      ): MsgSupportStandardReason => ({
        subspaceId: Long.fromString(msg.subspace_id),
        standardReasonId: msg.standard_reason_id,
        signer: msg.signer,
      }),
    },
    [MsgAddReasonTypeUrl]: {
      aminoType: MsgAddReasonAminoType,
      toAmino: (msg: MsgAddReason): AminoMsgAddReason["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        title: msg.title,
        description: msg.description,
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgAddReason["value"]): MsgAddReason => ({
        subspaceId: Long.fromString(msg.subspace_id),
        title: msg.title,
        description: msg.description,
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

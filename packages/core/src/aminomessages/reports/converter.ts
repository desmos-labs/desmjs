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
import { AminoPostTarget, AminoReportTarget, AminoUserTarget } from "./types";
import {
  AminoMsgAddReason,
  AminoMsgCreateReport,
  AminoMsgDeleteReport,
  AminoMsgRemoveReason,
  AminoMsgSupportStandardReason,
} from "./messages";
import { isAminoConverter } from "../../types";

export function convertUserTargetToAny(target: UserTarget): Any {
  return Any.fromPartial({
    typeUrl: "/desmos.reports.v1.UserTarget",
    value: UserTarget.encode(target).finish(),
  });
}

export function convertPostTargetToAny(target: PostTarget): Any {
  return Any.fromPartial({
    typeUrl: "/desmos.reports.v1.PostTarget",
    value: PostTarget.encode(target).finish(),
  });
}

export const reportTargetConverters: AminoConverters = {
  "/desmos.reports.v1.UserTarget": {
    aminoType: "desmos/UserTarget",
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
  "/desmos.reports.v1.PostTarget": {
    aminoType: "desmos/PostTarget",
    toAmino: (msg: Any): AminoPostTarget["value"] => {
      const target = PostTarget.decode(msg.value);
      return {
        post_id: target.postId,
      };
    },
    fromAmino: (msg: AminoPostTarget["value"]): Any =>
      convertPostTargetToAny(
        PostTarget.fromPartial({
          postId: msg.post_id,
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
    "/desmos.reports.v1.MsgCreateReport": {
      aminoType: "desmos/MsgCreateReport",
      toAmino: (msg: MsgCreateReport): AminoMsgCreateReport["value"] => {
        assertDefinedAndNotNull(msg.target, "report target not defined");
        return {
          subspace_id: msg.subspaceId,
          reasons_ids: msg.reasonsIds,
          message: msg.message,
          reporter: msg.reporter,
          target: convertReportTargetToAmino(msg.target),
        };
      },
      fromAmino: (msg: AminoMsgCreateReport["value"]): MsgCreateReport => ({
        subspaceId: msg.subspace_id,
        reasonsIds: msg.reasons_ids,
        message: msg.message,
        reporter: msg.reporter,
        target: convertReportTargetFromAmino(msg.target),
      }),
    },
    "/desmos.reports.v1.MsgDeleteReport": {
      aminoType: "desmos/MsgDeleteReport",
      toAmino: (msg: MsgDeleteReport): AminoMsgDeleteReport["value"] => ({
        subspace_id: msg.subspaceId,
        report_id: msg.reportId,
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgDeleteReport["value"]): MsgDeleteReport => ({
        subspaceId: msg.subspace_id,
        reportId: msg.report_id,
        signer: msg.signer,
      }),
    },
    "/desmos.reports.v1.MsgSupportStandardReason": {
      aminoType: "desmos/MsgSupportStandardReason",
      toAmino: (
        msg: MsgSupportStandardReason
      ): AminoMsgSupportStandardReason["value"] => ({
        subspace_id: msg.subspaceId,
        standard_reason_id: msg.standardReasonId,
        signer: msg.signer,
      }),
      fromAmino: (
        msg: AminoMsgSupportStandardReason["value"]
      ): MsgSupportStandardReason => ({
        subspaceId: msg.subspace_id,
        standardReasonId: msg.standard_reason_id,
        signer: msg.signer,
      }),
    },
    "/desmos.reports.v1.MsgAddReason": {
      aminoType: "desmos/MsgAddReason",
      toAmino: (msg: MsgAddReason): AminoMsgAddReason["value"] => ({
        subspace_id: msg.subspaceId,
        title: msg.title,
        description: msg.description,
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgAddReason["value"]): MsgAddReason => ({
        subspaceId: msg.subspace_id,
        title: msg.title,
        description: msg.description,
        signer: msg.signer,
      }),
    },
    "/desmos.reports.v1.MsgRemoveReason": {
      aminoType: "desmos/MsgRemoveReason",
      toAmino: (msg: MsgRemoveReason): AminoMsgRemoveReason["value"] => ({
        subspace_id: msg.subspaceId,
        reason_id: msg.reasonId,
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgRemoveReason["value"]): MsgRemoveReason => ({
        subspaceId: msg.subspace_id,
        reasonId: msg.reason_id,
        signer: msg.signer,
      }),
    },
  };
}

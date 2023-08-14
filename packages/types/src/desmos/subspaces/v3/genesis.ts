/* eslint-disable */
import {
  Subspace,
  SubspaceAmino,
  Section,
  SectionAmino,
  UserPermission,
  UserPermissionAmino,
  UserGroup,
  UserGroupAmino,
} from "./models";
import { Grant, GrantAmino } from "./models_feegrant";
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.subspaces.v3";
/** GenesisState contains the data of the genesis state for the subspaces module */
export interface GenesisState {
  initialSubspaceId: Long;
  subspacesData: SubspaceData[];
  subspaces: Subspace[];
  sections: Section[];
  userPermissions: UserPermission[];
  userGroups: UserGroup[];
  userGroupsMembers: UserGroupMemberEntry[];
  grants: Grant[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/desmos.subspaces.v3.GenesisState";
  value: Uint8Array;
}
/** GenesisState contains the data of the genesis state for the subspaces module */
export interface GenesisStateAmino {
  initial_subspace_id: string;
  subspaces_data: SubspaceDataAmino[];
  subspaces: SubspaceAmino[];
  sections: SectionAmino[];
  user_permissions: UserPermissionAmino[];
  user_groups: UserGroupAmino[];
  user_groups_members: UserGroupMemberEntryAmino[];
  grants: GrantAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/desmos.subspaces.v3.GenesisState";
  value: GenesisStateAmino;
}
/** SubspaceData contains the genesis data for a single subspace */
export interface SubspaceData {
  subspaceId: Long;
  nextGroupId: number;
  nextSectionId: number;
}
export interface SubspaceDataProtoMsg {
  typeUrl: "/desmos.subspaces.v3.SubspaceData";
  value: Uint8Array;
}
/** SubspaceData contains the genesis data for a single subspace */
export interface SubspaceDataAmino {
  subspace_id: string;
  next_group_id: number;
  next_section_id: number;
}
export interface SubspaceDataAminoMsg {
  type: "/desmos.subspaces.v3.SubspaceData";
  value: SubspaceDataAmino;
}
/** UserGroupMemberEntry contains the details of a user group member */
export interface UserGroupMemberEntry {
  subspaceId: Long;
  groupId: number;
  user: string;
}
export interface UserGroupMemberEntryProtoMsg {
  typeUrl: "/desmos.subspaces.v3.UserGroupMemberEntry";
  value: Uint8Array;
}
/** UserGroupMemberEntry contains the details of a user group member */
export interface UserGroupMemberEntryAmino {
  subspace_id: string;
  group_id: number;
  user: string;
}
export interface UserGroupMemberEntryAminoMsg {
  type: "/desmos.subspaces.v3.UserGroupMemberEntry";
  value: UserGroupMemberEntryAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    initialSubspaceId: Long.UZERO,
    subspacesData: [],
    subspaces: [],
    sections: [],
    userPermissions: [],
    userGroups: [],
    userGroupsMembers: [],
    grants: [],
  };
}
export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.initialSubspaceId.isZero()) {
      writer.uint32(8).uint64(message.initialSubspaceId);
    }
    for (const v of message.subspacesData) {
      SubspaceData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.subspaces) {
      Subspace.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sections) {
      Section.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.userPermissions) {
      UserPermission.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.userGroups) {
      UserGroup.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.userGroupsMembers) {
      UserGroupMemberEntry.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initialSubspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.subspacesData.push(
            SubspaceData.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.subspaces.push(Subspace.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sections.push(Section.decode(reader, reader.uint32()));
          break;
        case 5:
          message.userPermissions.push(
            UserPermission.decode(reader, reader.uint32()),
          );
          break;
        case 6:
          message.userGroups.push(UserGroup.decode(reader, reader.uint32()));
          break;
        case 7:
          message.userGroupsMembers.push(
            UserGroupMemberEntry.decode(reader, reader.uint32()),
          );
          break;
        case 8:
          message.grants.push(Grant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      initialSubspaceId: isSet(object.initialSubspaceId)
        ? Long.fromValue(object.initialSubspaceId)
        : Long.UZERO,
      subspacesData: Array.isArray(object?.subspacesData)
        ? object.subspacesData.map((e: any) => SubspaceData.fromJSON(e))
        : [],
      subspaces: Array.isArray(object?.subspaces)
        ? object.subspaces.map((e: any) => Subspace.fromJSON(e))
        : [],
      sections: Array.isArray(object?.sections)
        ? object.sections.map((e: any) => Section.fromJSON(e))
        : [],
      userPermissions: Array.isArray(object?.userPermissions)
        ? object.userPermissions.map((e: any) => UserPermission.fromJSON(e))
        : [],
      userGroups: Array.isArray(object?.userGroups)
        ? object.userGroups.map((e: any) => UserGroup.fromJSON(e))
        : [],
      userGroupsMembers: Array.isArray(object?.userGroupsMembers)
        ? object.userGroupsMembers.map((e: any) =>
            UserGroupMemberEntry.fromJSON(e),
          )
        : [],
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => Grant.fromJSON(e))
        : [],
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.initialSubspaceId !== undefined &&
      (obj.initialSubspaceId = (
        message.initialSubspaceId || Long.UZERO
      ).toString());
    if (message.subspacesData) {
      obj.subspacesData = message.subspacesData.map((e) =>
        e ? SubspaceData.toJSON(e) : undefined,
      );
    } else {
      obj.subspacesData = [];
    }
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map((e) =>
        e ? Subspace.toJSON(e) : undefined,
      );
    } else {
      obj.subspaces = [];
    }
    if (message.sections) {
      obj.sections = message.sections.map((e) =>
        e ? Section.toJSON(e) : undefined,
      );
    } else {
      obj.sections = [];
    }
    if (message.userPermissions) {
      obj.userPermissions = message.userPermissions.map((e) =>
        e ? UserPermission.toJSON(e) : undefined,
      );
    } else {
      obj.userPermissions = [];
    }
    if (message.userGroups) {
      obj.userGroups = message.userGroups.map((e) =>
        e ? UserGroup.toJSON(e) : undefined,
      );
    } else {
      obj.userGroups = [];
    }
    if (message.userGroupsMembers) {
      obj.userGroupsMembers = message.userGroupsMembers.map((e) =>
        e ? UserGroupMemberEntry.toJSON(e) : undefined,
      );
    } else {
      obj.userGroupsMembers = [];
    }
    if (message.grants) {
      obj.grants = message.grants.map((e) => (e ? Grant.toJSON(e) : undefined));
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    message.initialSubspaceId =
      object.initialSubspaceId !== undefined &&
      object.initialSubspaceId !== null
        ? Long.fromValue(object.initialSubspaceId)
        : Long.UZERO;
    message.subspacesData =
      object.subspacesData?.map((e) => SubspaceData.fromPartial(e)) || [];
    message.subspaces =
      object.subspaces?.map((e) => Subspace.fromPartial(e)) || [];
    message.sections =
      object.sections?.map((e) => Section.fromPartial(e)) || [];
    message.userPermissions =
      object.userPermissions?.map((e) => UserPermission.fromPartial(e)) || [];
    message.userGroups =
      object.userGroups?.map((e) => UserGroup.fromPartial(e)) || [];
    message.userGroupsMembers =
      object.userGroupsMembers?.map((e) =>
        UserGroupMemberEntry.fromPartial(e),
      ) || [];
    message.grants = object.grants?.map((e) => Grant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      initialSubspaceId: Long.fromString(object.initial_subspace_id),
      subspacesData: Array.isArray(object?.subspaces_data)
        ? object.subspaces_data.map((e: any) => SubspaceData.fromAmino(e))
        : [],
      subspaces: Array.isArray(object?.subspaces)
        ? object.subspaces.map((e: any) => Subspace.fromAmino(e))
        : [],
      sections: Array.isArray(object?.sections)
        ? object.sections.map((e: any) => Section.fromAmino(e))
        : [],
      userPermissions: Array.isArray(object?.user_permissions)
        ? object.user_permissions.map((e: any) => UserPermission.fromAmino(e))
        : [],
      userGroups: Array.isArray(object?.user_groups)
        ? object.user_groups.map((e: any) => UserGroup.fromAmino(e))
        : [],
      userGroupsMembers: Array.isArray(object?.user_groups_members)
        ? object.user_groups_members.map((e: any) =>
            UserGroupMemberEntry.fromAmino(e),
          )
        : [],
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => Grant.fromAmino(e))
        : [],
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.initial_subspace_id = message.initialSubspaceId
      ? message.initialSubspaceId.toString()
      : undefined;
    if (message.subspacesData) {
      obj.subspaces_data = message.subspacesData.map((e) =>
        e ? SubspaceData.toAmino(e) : undefined,
      );
    } else {
      obj.subspaces_data = [];
    }
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map((e) =>
        e ? Subspace.toAmino(e) : undefined,
      );
    } else {
      obj.subspaces = [];
    }
    if (message.sections) {
      obj.sections = message.sections.map((e) =>
        e ? Section.toAmino(e) : undefined,
      );
    } else {
      obj.sections = [];
    }
    if (message.userPermissions) {
      obj.user_permissions = message.userPermissions.map((e) =>
        e ? UserPermission.toAmino(e) : undefined,
      );
    } else {
      obj.user_permissions = [];
    }
    if (message.userGroups) {
      obj.user_groups = message.userGroups.map((e) =>
        e ? UserGroup.toAmino(e) : undefined,
      );
    } else {
      obj.user_groups = [];
    }
    if (message.userGroupsMembers) {
      obj.user_groups_members = message.userGroupsMembers.map((e) =>
        e ? UserGroupMemberEntry.toAmino(e) : undefined,
      );
    } else {
      obj.user_groups_members = [];
    }
    if (message.grants) {
      obj.grants = message.grants.map((e) =>
        e ? Grant.toAmino(e) : undefined,
      );
    } else {
      obj.grants = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.GenesisState",
      value: GenesisState.encode(message).finish(),
    };
  },
};
function createBaseSubspaceData(): SubspaceData {
  return {
    subspaceId: Long.UZERO,
    nextGroupId: 0,
    nextSectionId: 0,
  };
}
export const SubspaceData = {
  encode(
    message: SubspaceData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.nextGroupId !== 0) {
      writer.uint32(16).uint32(message.nextGroupId);
    }
    if (message.nextSectionId !== 0) {
      writer.uint32(24).uint32(message.nextSectionId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SubspaceData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubspaceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.nextGroupId = reader.uint32();
          break;
        case 3:
          message.nextSectionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SubspaceData {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      nextGroupId: isSet(object.nextGroupId) ? Number(object.nextGroupId) : 0,
      nextSectionId: isSet(object.nextSectionId)
        ? Number(object.nextSectionId)
        : 0,
    };
  },
  toJSON(message: SubspaceData): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.nextGroupId !== undefined &&
      (obj.nextGroupId = Math.round(message.nextGroupId));
    message.nextSectionId !== undefined &&
      (obj.nextSectionId = Math.round(message.nextSectionId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SubspaceData>, I>>(
    object: I,
  ): SubspaceData {
    const message = createBaseSubspaceData();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.nextGroupId = object.nextGroupId ?? 0;
    message.nextSectionId = object.nextSectionId ?? 0;
    return message;
  },
  fromAmino(object: SubspaceDataAmino): SubspaceData {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      nextGroupId: object.next_group_id,
      nextSectionId: object.next_section_id,
    };
  },
  toAmino(message: SubspaceData): SubspaceDataAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.next_group_id = message.nextGroupId;
    obj.next_section_id = message.nextSectionId;
    return obj;
  },
  fromAminoMsg(object: SubspaceDataAminoMsg): SubspaceData {
    return SubspaceData.fromAmino(object.value);
  },
  fromProtoMsg(message: SubspaceDataProtoMsg): SubspaceData {
    return SubspaceData.decode(message.value);
  },
  toProto(message: SubspaceData): Uint8Array {
    return SubspaceData.encode(message).finish();
  },
  toProtoMsg(message: SubspaceData): SubspaceDataProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.SubspaceData",
      value: SubspaceData.encode(message).finish(),
    };
  },
};
function createBaseUserGroupMemberEntry(): UserGroupMemberEntry {
  return {
    subspaceId: Long.UZERO,
    groupId: 0,
    user: "",
  };
}
export const UserGroupMemberEntry = {
  encode(
    message: UserGroupMemberEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UserGroupMemberEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGroupMemberEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.groupId = reader.uint32();
          break;
        case 3:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserGroupMemberEntry {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
    };
  },
  toJSON(message: UserGroupMemberEntry): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserGroupMemberEntry>, I>>(
    object: I,
  ): UserGroupMemberEntry {
    const message = createBaseUserGroupMemberEntry();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: UserGroupMemberEntryAmino): UserGroupMemberEntry {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      groupId: object.group_id,
      user: object.user,
    };
  },
  toAmino(message: UserGroupMemberEntry): UserGroupMemberEntryAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.group_id = message.groupId;
    obj.user = message.user;
    return obj;
  },
  fromAminoMsg(object: UserGroupMemberEntryAminoMsg): UserGroupMemberEntry {
    return UserGroupMemberEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: UserGroupMemberEntryProtoMsg): UserGroupMemberEntry {
    return UserGroupMemberEntry.decode(message.value);
  },
  toProto(message: UserGroupMemberEntry): Uint8Array {
    return UserGroupMemberEntry.encode(message).finish();
  },
  toProtoMsg(message: UserGroupMemberEntry): UserGroupMemberEntryProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.UserGroupMemberEntry",
      value: UserGroupMemberEntry.encode(message).finish(),
    };
  },
};

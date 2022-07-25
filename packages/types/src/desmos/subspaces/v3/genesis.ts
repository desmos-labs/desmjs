/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Subspace,
  Section,
  UserPermission,
  UserGroup,
} from "../../../desmos/subspaces/v3/models";

/** GenesisState contains the data of the genesis state for the subspaces module */
export interface GenesisState {
  initialSubspaceId: Long;
  subspacesData: SubspaceData[];
  subspaces: Subspace[];
  sections: Section[];
  userPermissions: UserPermission[];
  userGroups: UserGroup[];
  userGroupsMembers: UserGroupMemberEntry[];
}

/** SubspaceData contains the genesis data for a single subspace */
export interface SubspaceData {
  subspaceId: Long;
  nextGroupId: number;
  nextSectionId: number;
}

/** UserGroupMemberEntry contains the details of a user group member */
export interface UserGroupMemberEntry {
  subspaceId: Long;
  groupId: number;
  user: string;
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
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
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
            SubspaceData.decode(reader, reader.uint32())
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
            UserPermission.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.userGroups.push(UserGroup.decode(reader, reader.uint32()));
          break;
        case 7:
          message.userGroupsMembers.push(
            UserGroupMemberEntry.decode(reader, reader.uint32())
          );
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
        ? Long.fromString(object.initialSubspaceId)
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
            UserGroupMemberEntry.fromJSON(e)
          )
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
        e ? SubspaceData.toJSON(e) : undefined
      );
    } else {
      obj.subspacesData = [];
    }
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map((e) =>
        e ? Subspace.toJSON(e) : undefined
      );
    } else {
      obj.subspaces = [];
    }
    if (message.sections) {
      obj.sections = message.sections.map((e) =>
        e ? Section.toJSON(e) : undefined
      );
    } else {
      obj.sections = [];
    }
    if (message.userPermissions) {
      obj.userPermissions = message.userPermissions.map((e) =>
        e ? UserPermission.toJSON(e) : undefined
      );
    } else {
      obj.userPermissions = [];
    }
    if (message.userGroups) {
      obj.userGroups = message.userGroups.map((e) =>
        e ? UserGroup.toJSON(e) : undefined
      );
    } else {
      obj.userGroups = [];
    }
    if (message.userGroupsMembers) {
      obj.userGroupsMembers = message.userGroupsMembers.map((e) =>
        e ? UserGroupMemberEntry.toJSON(e) : undefined
      );
    } else {
      obj.userGroupsMembers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
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
        UserGroupMemberEntry.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseSubspaceData(): SubspaceData {
  return { subspaceId: Long.UZERO, nextGroupId: 0, nextSectionId: 0 };
}

export const SubspaceData = {
  encode(
    message: SubspaceData,
    writer: _m0.Writer = _m0.Writer.create()
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
        ? Long.fromString(object.subspaceId)
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
    object: I
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
};

function createBaseUserGroupMemberEntry(): UserGroupMemberEntry {
  return { subspaceId: Long.UZERO, groupId: 0, user: "" };
}

export const UserGroupMemberEntry = {
  encode(
    message: UserGroupMemberEntry,
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
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
        ? Long.fromString(object.subspaceId)
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
    object: I
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
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

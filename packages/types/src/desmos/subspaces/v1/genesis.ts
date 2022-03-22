/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Subspace, UserGroup } from "../../../desmos/subspaces/v1/models";

/** GenesisState contains the data of the genesis state for the subspaces module */
export interface GenesisState {
  initialSubspaceId: Long;
  subspaces: GenesisSubspace[];
  acl: ACLEntry[];
  userGroups: UserGroup[];
  userGroupsMembers: UserGroupMembersEntry[];
}

/** GenesisSubspace contains the genesis data for a single subspace */
export interface GenesisSubspace {
  subspace?: Subspace;
  initialGroupId: number;
}

/** ACLEntry represents a single Access Control List entry */
export interface ACLEntry {
  subspaceId: Long;
  user: string;
  permissions: number;
}

/** UserGroupMembersEntry contains all the members of a specific user group */
export interface UserGroupMembersEntry {
  subspaceId: Long;
  groupId: number;
  members: string[];
}

function createBaseGenesisState(): GenesisState {
  return {
    initialSubspaceId: Long.UZERO,
    subspaces: [],
    acl: [],
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
    for (const v of message.subspaces) {
      GenesisSubspace.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.acl) {
      ACLEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.userGroups) {
      UserGroup.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.userGroupsMembers) {
      UserGroupMembersEntry.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.subspaces.push(
            GenesisSubspace.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.acl.push(ACLEntry.decode(reader, reader.uint32()));
          break;
        case 4:
          message.userGroups.push(UserGroup.decode(reader, reader.uint32()));
          break;
        case 5:
          message.userGroupsMembers.push(
            UserGroupMembersEntry.decode(reader, reader.uint32())
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
      subspaces: Array.isArray(object?.subspaces)
        ? object.subspaces.map((e: any) => GenesisSubspace.fromJSON(e))
        : [],
      acl: Array.isArray(object?.acl)
        ? object.acl.map((e: any) => ACLEntry.fromJSON(e))
        : [],
      userGroups: Array.isArray(object?.userGroups)
        ? object.userGroups.map((e: any) => UserGroup.fromJSON(e))
        : [],
      userGroupsMembers: Array.isArray(object?.userGroupsMembers)
        ? object.userGroupsMembers.map((e: any) =>
            UserGroupMembersEntry.fromJSON(e)
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
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map((e) =>
        e ? GenesisSubspace.toJSON(e) : undefined
      );
    } else {
      obj.subspaces = [];
    }
    if (message.acl) {
      obj.acl = message.acl.map((e) => (e ? ACLEntry.toJSON(e) : undefined));
    } else {
      obj.acl = [];
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
        e ? UserGroupMembersEntry.toJSON(e) : undefined
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
    message.subspaces =
      object.subspaces?.map((e) => GenesisSubspace.fromPartial(e)) || [];
    message.acl = object.acl?.map((e) => ACLEntry.fromPartial(e)) || [];
    message.userGroups =
      object.userGroups?.map((e) => UserGroup.fromPartial(e)) || [];
    message.userGroupsMembers =
      object.userGroupsMembers?.map((e) =>
        UserGroupMembersEntry.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseGenesisSubspace(): GenesisSubspace {
  return { subspace: undefined, initialGroupId: 0 };
}

export const GenesisSubspace = {
  encode(
    message: GenesisSubspace,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subspace !== undefined) {
      Subspace.encode(message.subspace, writer.uint32(10).fork()).ldelim();
    }
    if (message.initialGroupId !== 0) {
      writer.uint32(16).uint32(message.initialGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisSubspace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisSubspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = Subspace.decode(reader, reader.uint32());
          break;
        case 2:
          message.initialGroupId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisSubspace {
    return {
      subspace: isSet(object.subspace)
        ? Subspace.fromJSON(object.subspace)
        : undefined,
      initialGroupId: isSet(object.initialGroupId)
        ? Number(object.initialGroupId)
        : 0,
    };
  },

  toJSON(message: GenesisSubspace): unknown {
    const obj: any = {};
    message.subspace !== undefined &&
      (obj.subspace = message.subspace
        ? Subspace.toJSON(message.subspace)
        : undefined);
    message.initialGroupId !== undefined &&
      (obj.initialGroupId = Math.round(message.initialGroupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisSubspace>, I>>(
    object: I
  ): GenesisSubspace {
    const message = createBaseGenesisSubspace();
    message.subspace =
      object.subspace !== undefined && object.subspace !== null
        ? Subspace.fromPartial(object.subspace)
        : undefined;
    message.initialGroupId = object.initialGroupId ?? 0;
    return message;
  },
};

function createBaseACLEntry(): ACLEntry {
  return { subspaceId: Long.UZERO, user: "", permissions: 0 };
}

export const ACLEntry = {
  encode(
    message: ACLEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    if (message.permissions !== 0) {
      writer.uint32(24).uint32(message.permissions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ACLEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseACLEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.user = reader.string();
          break;
        case 3:
          message.permissions = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ACLEntry {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      user: isSet(object.user) ? String(object.user) : "",
      permissions: isSet(object.permissions) ? Number(object.permissions) : 0,
    };
  },

  toJSON(message: ACLEntry): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.user !== undefined && (obj.user = message.user);
    message.permissions !== undefined &&
      (obj.permissions = Math.round(message.permissions));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ACLEntry>, I>>(object: I): ACLEntry {
    const message = createBaseACLEntry();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.user = object.user ?? "";
    message.permissions = object.permissions ?? 0;
    return message;
  },
};

function createBaseUserGroupMembersEntry(): UserGroupMembersEntry {
  return { subspaceId: Long.UZERO, groupId: 0, members: [] };
}

export const UserGroupMembersEntry = {
  encode(
    message: UserGroupMembersEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.groupId !== 0) {
      writer.uint32(16).uint32(message.groupId);
    }
    for (const v of message.members) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UserGroupMembersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGroupMembersEntry();
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
          message.members.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserGroupMembersEntry {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: UserGroupMembersEntry): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    if (message.members) {
      obj.members = message.members.map((e) => e);
    } else {
      obj.members = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserGroupMembersEntry>, I>>(
    object: I
  ): UserGroupMembersEntry {
    const message = createBaseUserGroupMembersEntry();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.groupId = object.groupId ?? 0;
    message.members = object.members?.map((e) => e) || [];
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

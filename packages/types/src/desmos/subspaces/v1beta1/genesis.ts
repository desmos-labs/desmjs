/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Subspace } from "../../../desmos/subspaces/v1beta1/subspace";

/** GenesisState contains the data of the genesis state for the subspaces module */
export interface GenesisState {
  subspaces: Subspace[];
  admins: UsersEntry[];
  registeredUsers: UsersEntry[];
  bannedUsers: UsersEntry[];
}

/**
 * UsersEntry contains the data of a slice of users associated to a subspace
 * with a specific id
 */
export interface UsersEntry {
  subspaceId: string;
  users: string[];
}

function createBaseGenesisState(): GenesisState {
  return { subspaces: [], admins: [], registeredUsers: [], bannedUsers: [] };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subspaces) {
      Subspace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.admins) {
      UsersEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.registeredUsers) {
      UsersEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.bannedUsers) {
      UsersEntry.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.subspaces.push(Subspace.decode(reader, reader.uint32()));
          break;
        case 2:
          message.admins.push(UsersEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.registeredUsers.push(
            UsersEntry.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.bannedUsers.push(UsersEntry.decode(reader, reader.uint32()));
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
      subspaces: Array.isArray(object?.subspaces)
        ? object.subspaces.map((e: any) => Subspace.fromJSON(e))
        : [],
      admins: Array.isArray(object?.admins)
        ? object.admins.map((e: any) => UsersEntry.fromJSON(e))
        : [],
      registeredUsers: Array.isArray(object?.registeredUsers)
        ? object.registeredUsers.map((e: any) => UsersEntry.fromJSON(e))
        : [],
      bannedUsers: Array.isArray(object?.bannedUsers)
        ? object.bannedUsers.map((e: any) => UsersEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map((e) =>
        e ? Subspace.toJSON(e) : undefined
      );
    } else {
      obj.subspaces = [];
    }
    if (message.admins) {
      obj.admins = message.admins.map((e) =>
        e ? UsersEntry.toJSON(e) : undefined
      );
    } else {
      obj.admins = [];
    }
    if (message.registeredUsers) {
      obj.registeredUsers = message.registeredUsers.map((e) =>
        e ? UsersEntry.toJSON(e) : undefined
      );
    } else {
      obj.registeredUsers = [];
    }
    if (message.bannedUsers) {
      obj.bannedUsers = message.bannedUsers.map((e) =>
        e ? UsersEntry.toJSON(e) : undefined
      );
    } else {
      obj.bannedUsers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.subspaces =
      object.subspaces?.map((e) => Subspace.fromPartial(e)) || [];
    message.admins = object.admins?.map((e) => UsersEntry.fromPartial(e)) || [];
    message.registeredUsers =
      object.registeredUsers?.map((e) => UsersEntry.fromPartial(e)) || [];
    message.bannedUsers =
      object.bannedUsers?.map((e) => UsersEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUsersEntry(): UsersEntry {
  return { subspaceId: "", users: [] };
}

export const UsersEntry = {
  encode(
    message: UsersEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subspaceId !== "") {
      writer.uint32(10).string(message.subspaceId);
    }
    for (const v of message.users) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.string();
          break;
        case 2:
          message.users.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UsersEntry {
    return {
      subspaceId: isSet(object.subspaceId) ? String(object.subspaceId) : "",
      users: Array.isArray(object?.users)
        ? object.users.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: UsersEntry): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = message.subspaceId);
    if (message.users) {
      obj.users = message.users.map((e) => e);
    } else {
      obj.users = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UsersEntry>, I>>(
    object: I
  ): UsersEntry {
    const message = createBaseUsersEntry();
    message.subspaceId = object.subspaceId ?? "";
    message.users = object.users?.map((e) => e) || [];
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

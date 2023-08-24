/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import {
  MsgCreateDenom,
  MsgMint,
  MsgBurn,
  MsgSetDenomMetadata,
  MsgUpdateParams,
} from "./msgs";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.tokenfactory.v1.MsgCreateDenom", MsgCreateDenom],
  ["/desmos.tokenfactory.v1.MsgMint", MsgMint],
  ["/desmos.tokenfactory.v1.MsgBurn", MsgBurn],
  ["/desmos.tokenfactory.v1.MsgSetDenomMetadata", MsgSetDenomMetadata],
  ["/desmos.tokenfactory.v1.MsgUpdateParams", MsgUpdateParams],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgCreateDenom",
        value: MsgCreateDenom.encode(value).finish(),
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgMint",
        value: MsgMint.encode(value).finish(),
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgBurn",
        value: MsgBurn.encode(value).finish(),
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgCreateDenom",
        value,
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgMint",
        value,
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgBurn",
        value,
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgSetDenomMetadata",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgUpdateParams",
        value,
      };
    },
  },
  toJSON: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgCreateDenom",
        value: MsgCreateDenom.toJSON(value),
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgMint",
        value: MsgMint.toJSON(value),
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgBurn",
        value: MsgBurn.toJSON(value),
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.toJSON(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    createDenom(value: any) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgCreateDenom",
        value: MsgCreateDenom.fromJSON(value),
      };
    },
    mint(value: any) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgMint",
        value: MsgMint.fromJSON(value),
      };
    },
    burn(value: any) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgBurn",
        value: MsgBurn.fromJSON(value),
      };
    },
    setDenomMetadata(value: any) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.fromJSON(value),
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgCreateDenom",
        value: MsgCreateDenom.fromPartial(value),
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgMint",
        value: MsgMint.fromPartial(value),
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgBurn",
        value: MsgBurn.fromPartial(value),
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.tokenfactory.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};

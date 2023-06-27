import { AminoMsg } from "@cosmjs/amino";
import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import {
  AminoConverter as CosmJSAminoConverter,
  AminoTypes as CosmJSAminoTypes,
} from "@cosmjs/stargate";
import { Any } from "@desmoslabs/desmjs-types/google/protobuf/any";

export interface AminoConverter extends CosmJSAminoConverter {
  readonly toAmino: (value: any, aminoTypes?: AminoTypes) => any;
  readonly fromAmino: (value: any, aminoTypes?: AminoTypes) => any;
}

declare type AminoConverters = Record<
  string,
  AminoConverter | "not_supported_by_chain"
>;

export class AminoTypes extends CosmJSAminoTypes {
  private readonly converters;

  private readonly registry;

  constructor(converters: AminoConverters, registry: Registry) {
    super(converters);
    this.converters = converters;
    this.registry = registry;
  }

  public override toAmino({ typeUrl, value }: EncodeObject): AminoMsg {
    const converter = this.converters[typeUrl];
    if (!converter) {
      throw new Error(
        `Type URL '${typeUrl}' does not exist in the Amino message type register. ` +
          "If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. " +
          "If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues."
      );
    }

    if (typeof converter === "string") {
      throw new Error(converter);
    }

    return {
      type: converter.aminoType,
      value: converter.toAmino(value, this),
    };
  }

  public override fromAmino({ type, value }: AminoMsg): EncodeObject {
    const matches = Object.entries(this.converters).filter(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_typeUrl, converter]) => {
        if (typeof converter === "object") {
          return converter.aminoType === type;
        }
        return false;
      }
    ) as [string, AminoConverter][];

    switch (matches.length) {
      case 0: {
        throw new Error(
          `Amino type identifier '${type}' does not exist in the Amino message type register. ` +
            "If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. " +
            "If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues."
        );
      }
      case 1: {
        const [typeUrl, converter] = matches[0];
        return {
          typeUrl,
          value: converter.fromAmino(value, this),
        };
      }
      default:
        throw new Error(
          `Multiple types are registered with Amino type identifier '${type}': '${matches
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map(([key, _value]) => key)
            .sort()
            .join("', '")}'. Thus fromAmino cannot be performed.`
        );
    }
  }

  public fromAny({ typeUrl, value }: Any): AminoMsg {
    // Convert the Any object to an EncodeObject.
    const encodeObject: EncodeObject = {
      typeUrl,
      value: this.registry.decode({ typeUrl, value }),
    };
    // Convert the EncodeObject to Amino.
    return this.toAmino(encodeObject);
  }

  public toAny({ type, value }: AminoMsg): Any {
    // Convert the AminoMsg to an EncodeObj
    return this.registry.encodeAsAny(this.fromAmino({ type, value }));
  }
}

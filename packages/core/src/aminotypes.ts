import { AminoMsg } from "@cosmjs/amino";
import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import {
  AminoConverter as CosmJSAminoConverter,
  AminoTypes as CosmJSAminoTypes,
} from "@cosmjs/stargate";
import { Any } from "@desmoslabs/desmjs-types/google/protobuf/any";

/**
 * Interface that represents an object capable of convert
 * an {@link EncodeObject} from and to {@link AminoMsg}.
 * NOTE: This is an extension of the {@link CosmJSAminoConverter} from
 * cosmjs to allow the conversion of objects that have a field with
 * type {@link Any} like the MsgExec of the x/authz module.
 */
export interface AminoConverter extends CosmJSAminoConverter {
  /**
   * Converts an object to its amino representation.
   * @param value - The object to convert to {@link AminoMsg}.
   * @param aminoTypes - An object to convert an {@link Any} encoded object
   * from and to {@link AminoMsg}.
   * NOTE: This is optional to make the interface backward compatible with
   * {@link CosmJSAminoConverter}.
   */
  readonly toAmino: (value: any, aminoTypes?: AminoTypes) => any;
  /**
   * Converts an amino encoded object to its protobuf representation.
   * @param value - The object to convert.
   * @param aminoTypes - An object to convert an {@link Any} encoded object
   * from and to {@link AminoMsg}.
   * NOTE: This is optional to make the interface backward compatible with
   * {@link CosmJSAminoConverter}.
   */
  readonly fromAmino: (value: any, aminoTypes?: AminoTypes) => any;
}

export type AminoConverters = Record<string, AminoConverter>;

/**
 * Extensions of the {@link CosmJSAminoTypes} that supports
 * the amino serialization of messages that have {@link Any} encoed
 * messages as child like the MsgExec of the x/authz module.
 */
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
          "If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues.",
      );
    }

    return {
      type: converter.aminoType,
      value: converter.toAmino(value, this),
    };
  }

  public override fromAmino({ type, value }: AminoMsg): EncodeObject {
    const matches = Object.entries(this.converters).filter(
      ([, converter]) => converter.aminoType === type,
    );

    switch (matches.length) {
      case 0: {
        throw new Error(
          `Amino type identifier '${type}' does not exist in the Amino message type register. ` +
            "If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. " +
            "If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues.",
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
            .map(([key]) => key)
            .sort()
            .join("', '")}'. Thus fromAmino cannot be performed.`,
        );
    }
  }

  /**
   * Function to convert a {@link Any} encoded object to its
   * amino representation.
   * @param anyEncodedObject - The object to convert to amino.
   */
  public fromAny(anyEncodedObject: Any): AminoMsg {
    const decoded = this.registry.decode(anyEncodedObject);

    return this.toAmino({
      typeUrl: anyEncodedObject.typeUrl,
      value: decoded,
    });
  }

  /**
   * Function to convert a {@link AminoMsg} to its {@link Any}
   * representation.
   * @param aminoEncodedObject - The object to convert to {@link Any}.
   */
  public toAny(aminoEncodedObject: AminoMsg): Any {
    return this.registry.encodeAsAny(this.fromAmino(aminoEncodedObject));
  }
}

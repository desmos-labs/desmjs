import { patchInterfaceDefinition, patchObjectMethods } from "../../../../patch-utils";

export async function patchModule(outputPath: string) {
  const bankFile = `${outputPath}/cosmos/bank/v1beta1/bank.ts`;

  // Patch DenomUnitAmino definition
  await patchInterfaceDefinition(bankFile, [{
    name: "DenomUnitAmino",
    prop: "exponent",
    newDefinition: "exponent?: number;"
  }]);

  // Patch DenomUnitAmino from/to Amino
  await patchObjectMethods(bankFile, [
    {
      object: "DenomUnit",
      methodName: "fromAmino",
      newDefinition: "fromAmino(object: DenomUnitAmino): DenomUnit {\n" +
        "    return {\n" +
        "      denom: object.denom,\n" +
        "      exponent: object.exponent ?? 0,\n" +
        "      aliases: Array.isArray(object?.aliases)\n" +
        "        ? object.aliases.map((e: any) => e)\n" +
        "        : [],\n" +
        "    };\n" +
        "  }"
    },
    {
      object: "DenomUnit",
      methodName: "toAmino",
      newDefinition: "toAmino(message: DenomUnit): DenomUnitAmino {\n" +
        "    const obj: any = {};\n" +
        "    obj.denom = message.denom;\n" +
        "    obj.exponent = message.exponent > 0 ? message.exponent : undefined;\n" +
        "    if (message.aliases) {\n" +
        "      obj.aliases = message.aliases.map((e) => e);\n" +
        "    } else {\n" +
        "      obj.aliases = [];\n" +
        "    }\n" +
        "    return obj;\n" +
        "  }"
    }
  ]);


  // Patch MetadataAmino definition
  await patchInterfaceDefinition(bankFile, [
    {
      name: "MetadataAmino",
      prop: "uri",
      newDefinition: "uri?: string;"
    },
    {
      name: "MetadataAmino",
      prop: "uri_hash",
      newDefinition: "uri_hash?: string;"
    }
  ]);

  // Patch MetadataAmino from/to Amino
  await patchObjectMethods(bankFile, [
    {
      object: "Metadata",
      methodName: "fromAmino",
      newDefinition: "fromAmino(object: MetadataAmino): Metadata {\n" +
        "    return {\n" +
        "      description: object.description,\n" +
        "      denomUnits: Array.isArray(object?.denom_units)\n" +
        "        ? object.denom_units.map((e: any) => DenomUnit.fromAmino(e))\n" +
        "        : [],\n" +
        "      base: object.base,\n" +
        "      display: object.display,\n" +
        "      name: object.name,\n" +
        "      symbol: object.symbol,\n" +
        "      uri: object.uri ?? '',\n" +
        "      uriHash: object.uri_hash ?? '',\n" +
        "    };\n" +
        "  }"
    },
    {
      object: "Metadata",
      methodName: "toAmino",
      newDefinition: "toAmino(message: Metadata): MetadataAmino {\n" +
        "    const obj: any = {};\n" +
        "    obj.description = message.description;\n" +
        "    if (message.denomUnits) {\n" +
        "      obj.denom_units = message.denomUnits.map((e) =>\n" +
        "        e ? DenomUnit.toAmino(e) : undefined,\n" +
        "      );\n" +
        "    } else {\n" +
        "      obj.denom_units = [];\n" +
        "    }\n" +
        "    obj.base = message.base;\n" +
        "    obj.display = message.display;\n" +
        "    obj.name = message.name;\n" +
        "    obj.symbol = message.symbol;\n" +
        "    obj.uri = message.uri !== '' ? message.uri : undefined;\n" +
        "    obj.uri_hash = message.uriHash !== '' ? message.uriHash : undefined;\n" +
        "    return obj;\n" +
        "  }"
    }
  ])
}

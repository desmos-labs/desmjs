import { patchObjectMethods } from "../../../patch-utils";

export async function patchModule(outputPath: string): Promise<void> {
  // Patch Any generated fromAmino and toAmino
  await patchObjectMethods(`${outputPath}/google/protobuf/any.ts`, [
    {
      object: 'Any',
      methodName: "toAmino",
      newDefinition: "toAmino(message: Any): AnyAmino {\n" +
        "   return {\n" +
        "     type: message.typeUrl,\n" +
        "     value: message.value,\n" +
        "   }\n" +
        "  }"
    },
    {
      object: 'Any',
      methodName: "fromAmino",
      newDefinition: "fromAmino(object: AnyAmino): Any {\n" +
        "    return {\n" +
        "      typeUrl: object.type,\n" +
        "      value: object.value,\n" +
        "    };\n" +
        "  }"
    }
  ]);

  // Patch timestamp fromAmino and toAmino
  await patchObjectMethods(`${outputPath}/google/protobuf/timestamp.ts`, [
    {
      object: 'Timestamp',
      methodName: "toAmino",
      newDefinition: "toAmino(message: Timestamp): TimestampAmino {\n" +
        "    const millisecondsSinceEpoch = message.seconds.multiply(1000).toNumber();\n" +
        "    const nanosFraction = Math.round(message.nanos / 1000000)\n" +
        "    return new Date(millisecondsSinceEpoch + nanosFraction).toISOString();\n" +
        "  }"
    },
    {
      object: 'Timestamp',
      methodName: "fromAmino",
      newDefinition: "fromAmino(object: TimestampAmino): Timestamp {\n" +
        "    const data = new Date(object);\n" +
        "    const seconds = Math.trunc(data.getTime() / 1000);\n" +
        "    const nanos = (data.getTime() % 1000) * 1000000;\n" +
        "    return {\n" +
        "      seconds: Long.fromNumber(seconds),\n" +
        "      nanos,\n" +
        "    };\n" +
        "  }"
    }
  ]);

  // Patch FieldDescriptorProto
  await patchObjectMethods(`${outputPath}/google/protobuf/descriptor.ts`, [
    {
      object: 'FieldDescriptorProto',
      methodName: "fromJSON",
      newDefinition: "fromJSON(object: any): FieldDescriptorProto {\n" +
        "    return {\n" +
        "      name: isSet(object.name) ? String(object.name) : \"\",\n" +
        "      number: isSet(object.number) ? Number(object.number) : 0,\n" +
        "      label: isSet(object.label)\n" +
        "        ? fieldDescriptorProto_LabelFromJSON(object.label)\n" +
        "        : FieldDescriptorProto_Label.UNRECOGNIZED,\n" +
        "      type: isSet(object.type)\n" +
        "        ? fieldDescriptorProto_TypeFromJSON(object.type)\n" +
        "        : FieldDescriptorProto_Type.UNRECOGNIZED,\n" +
        "      typeName: isSet(object.typeName) ? String(object.typeName) : \"\",\n" +
        "      extendee: isSet(object.extendee) ? String(object.extendee) : \"\",\n" +
        "      defaultValue: isSet(object.defaultValue)\n" +
        "        ? String(object.defaultValue)\n" +
        "        : \"\",\n" +
        "      oneofIndex: isSet(object.oneofIndex) ? Number(object.oneofIndex) : 0,\n" +
        "      jsonName: isSet(object.jsonName) ? String(object.jsonName) : \"\",\n" +
        "      options: isSet(object.options)\n" +
        "        ? FieldOptions.fromJSON(object.options)\n" +
        "        : undefined,\n" +
        "    };\n" +
        "  }"
    },
    {
      object: 'FieldDescriptorProto',
      methodName: 'toAmino',
      newDefinition: "fromAmino(object: FieldDescriptorProtoAmino): FieldDescriptorProto {\n" +
        "    return {\n" +
        "      name: object.name,\n" +
        "      number: object.number,\n" +
        "      label: isSet(object.label)\n" +
        "        ? fieldDescriptorProto_LabelFromJSON(object.label)\n" +
        "        : FieldDescriptorProto_Label.UNRECOGNIZED,\n" +
        "      type: isSet(object.type)\n" +
        "        ? fieldDescriptorProto_TypeFromJSON(object.type)\n" +
        "        : FieldDescriptorProto_Type.UNRECOGNIZED,\n" +
        "      typeName: object.type_name,\n" +
        "      extendee: object.extendee,\n" +
        "      defaultValue: object.default_value,\n" +
        "      oneofIndex: object.oneof_index,\n" +
        "      jsonName: object.json_name,\n" +
        "      options: object?.options\n" +
        "        ? FieldOptions.fromAmino(object.options)\n" +
        "        : undefined,\n" +
        "    };\n" +
        "  },"
    }
  ]);

  // Patch FileOptions
  await patchObjectMethods(`${outputPath}/google/protobuf/descriptor.ts`, [
    {
      object: 'FileOptions',
      methodName: "fromJSON",
      newDefinition: "fromJSON(object: any): FileOptions {\n" +
        "    return {\n" +
        "      javaPackage: isSet(object.javaPackage) ? String(object.javaPackage) : \"\",\n" +
        "      javaOuterClassname: isSet(object.javaOuterClassname)\n" +
        "        ? String(object.javaOuterClassname)\n" +
        "        : \"\",\n" +
        "      javaMultipleFiles: isSet(object.javaMultipleFiles)\n" +
        "        ? Boolean(object.javaMultipleFiles)\n" +
        "        : false,\n" +
        "      javaGenerateEqualsAndHash: isSet(object.javaGenerateEqualsAndHash)\n" +
        "        ? Boolean(object.javaGenerateEqualsAndHash)\n" +
        "        : false,\n" +
        "      javaStringCheckUtf8: isSet(object.javaStringCheckUtf8)\n" +
        "        ? Boolean(object.javaStringCheckUtf8)\n" +
        "        : false,\n" +
        "      optimizeFor: isSet(object.optimizeFor)\n" +
        "        ? fileOptions_OptimizeModeFromJSON(object.optimizeFor)\n" +
        "        : FileOptions_OptimizeMode.UNRECOGNIZED,\n" +
        "      goPackage: isSet(object.goPackage) ? String(object.goPackage) : \"\",\n" +
        "      ccGenericServices: isSet(object.ccGenericServices)\n" +
        "        ? Boolean(object.ccGenericServices)\n" +
        "        : false,\n" +
        "      javaGenericServices: isSet(object.javaGenericServices)\n" +
        "        ? Boolean(object.javaGenericServices)\n" +
        "        : false,\n" +
        "      pyGenericServices: isSet(object.pyGenericServices)\n" +
        "        ? Boolean(object.pyGenericServices)\n" +
        "        : false,\n" +
        "      phpGenericServices: isSet(object.phpGenericServices)\n" +
        "        ? Boolean(object.phpGenericServices)\n" +
        "        : false,\n" +
        "      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,\n" +
        "      ccEnableArenas: isSet(object.ccEnableArenas)\n" +
        "        ? Boolean(object.ccEnableArenas)\n" +
        "        : false,\n" +
        "      objcClassPrefix: isSet(object.objcClassPrefix)\n" +
        "        ? String(object.objcClassPrefix)\n" +
        "        : \"\",\n" +
        "      csharpNamespace: isSet(object.csharpNamespace)\n" +
        "        ? String(object.csharpNamespace)\n" +
        "        : \"\",\n" +
        "      swiftPrefix: isSet(object.swiftPrefix) ? String(object.swiftPrefix) : \"\",\n" +
        "      phpClassPrefix: isSet(object.phpClassPrefix)\n" +
        "        ? String(object.phpClassPrefix)\n" +
        "        : \"\",\n" +
        "      phpNamespace: isSet(object.phpNamespace)\n" +
        "        ? String(object.phpNamespace)\n" +
        "        : \"\",\n" +
        "      phpMetadataNamespace: isSet(object.phpMetadataNamespace)\n" +
        "        ? String(object.phpMetadataNamespace)\n" +
        "        : \"\",\n" +
        "      rubyPackage: isSet(object.rubyPackage) ? String(object.rubyPackage) : \"\",\n" +
        "      uninterpretedOption: Array.isArray(object?.uninterpretedOption)\n" +
        "        ? object.uninterpretedOption.map((e: any) =>\n" +
        "            UninterpretedOption.fromJSON(e),\n" +
        "          )\n" +
        "        : [],\n" +
        "    };\n" +
        "  }"
    },
    {
      object: 'FileOptions',
      methodName: "fromAmino",
      newDefinition: "fromAmino(object: FileOptionsAmino): FileOptions {\n" +
        "    return {\n" +
        "      javaPackage: object.java_package,\n" +
        "      javaOuterClassname: object.java_outer_classname,\n" +
        "      javaMultipleFiles: object.java_multiple_files,\n" +
        "      javaGenerateEqualsAndHash: object.java_generate_equals_and_hash,\n" +
        "      javaStringCheckUtf8: object.java_string_check_utf8,\n" +
        "      optimizeFor: isSet(object.optimize_for)\n" +
        "        ? fileOptions_OptimizeModeFromJSON(object.optimize_for)\n" +
        "        : FileOptions_OptimizeMode.UNRECOGNIZED,\n" +
        "      goPackage: object.go_package,\n" +
        "      ccGenericServices: object.cc_generic_services,\n" +
        "      javaGenericServices: object.java_generic_services,\n" +
        "      pyGenericServices: object.py_generic_services,\n" +
        "      phpGenericServices: object.php_generic_services,\n" +
        "      deprecated: object.deprecated,\n" +
        "      ccEnableArenas: object.cc_enable_arenas,\n" +
        "      objcClassPrefix: object.objc_class_prefix,\n" +
        "      csharpNamespace: object.csharp_namespace,\n" +
        "      swiftPrefix: object.swift_prefix,\n" +
        "      phpClassPrefix: object.php_class_prefix,\n" +
        "      phpNamespace: object.php_namespace,\n" +
        "      phpMetadataNamespace: object.php_metadata_namespace,\n" +
        "      rubyPackage: object.ruby_package,\n" +
        "      uninterpretedOption: Array.isArray(object?.uninterpreted_option)\n" +
        "        ? object.uninterpreted_option.map((e: any) =>\n" +
        "            UninterpretedOption.fromAmino(e),\n" +
        "          )\n" +
        "        : [],\n" +
        "    };\n" +
        "  }"
    }
  ]);
}

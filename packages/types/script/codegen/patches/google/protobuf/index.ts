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
}

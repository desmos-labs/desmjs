import { patchInterfaceDefinition, patchObjectMethods } from "../../../../patch-utils";

export async function patchModule(outputPath: string): Promise<void> {
  // Patch MsgVote generated fromAmino and toAmino
  await patchInterfaceDefinition(`${outputPath}/cosmos/gov/v1/tx.ts`, [
    {
      name: 'MsgVoteAmino',
      prop: 'metadata',
      newDefinition: 'metadata?: string;',
    }
  ])
  await patchObjectMethods(`${outputPath}/cosmos/gov/v1/tx.ts`, [
    {
      object: 'MsgVote',
      methodName: 'fromAmino',
      newDefinition: 'fromAmino(object: MsgVoteAmino): MsgVote {\n' +
        '    return {\n' +
        '      proposalId: Long.fromString(object.proposal_id),\n' +
        '      voter: object.voter,\n' +
        '      option: isSet(object.option) ? object.option : 0,\n' +
        '      metadata: object.metadata ?? "",\n' +
        '    };\n' +
        '  }'
    },
    {
      object: 'MsgVote',
      methodName: 'toAmino',
      newDefinition: 'toAmino(message: MsgVote): MsgVoteAmino {\n' +
        '    const obj: any = {};\n' +
        '    obj.proposal_id = message.proposalId\n' +
        '      ? message.proposalId.toString()\n' +
        '      : undefined;\n' +
        '    obj.voter = message.voter;\n' +
        '    obj.option = message.option;\n' +
        '    obj.metadata = message.metadata === "" ? undefined : message.metadata;\n' +
        '    return obj;\n' +
        '  }'
    },
  ]);
}

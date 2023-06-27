import { appendImport, patchInterfaceDefinition, patchObjectMethods } from "../../../../patch-utils";

export async function patchModule(outputPath: string): Promise<void> {
  // Patch MsgVote generated fromAmino and toAmino
  const govV1TxFile = `${outputPath}/cosmos/gov/v1/tx.ts`;
  appendImport(govV1TxFile, `
  import { AminoMsg } from "@cosmjs/amino";
  import { AminoConverter } from "../../../aminoconverter";
  `)
  await patchInterfaceDefinition(govV1TxFile, [
    {
      name: 'MsgVoteAmino',
      prop: 'metadata',
      newDefinition: 'metadata?: string;',
    },
    {
      name: 'MsgSubmitProposalAmino',
      prop: 'metadata',
      newDefinition: 'metadata?: string;',
    },
    {
      name: 'MsgSubmitProposalAmino',
      prop: 'messages',
      newDefinition: 'messages?: AminoMsg[];',
    }
  ])
  await patchObjectMethods(govV1TxFile, [
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
    {
      object: 'MsgSubmitProposal',
      methodName: 'fromAmino',
      newDefinition: 'fromAmino(object: MsgSubmitProposalAmino, converter?: AminoConverter): MsgSubmitProposal {\n' +
        '    if (converter === undefined) {\n' +
        '      throw new Error("Can\'t convert to MsgSubmitProposal from amino without an AminoConverter instance");\n' +
        '    }\n' +
        '    return {\n' +
        '      messages: object.messages?.map(m => converter.toAny(m)) ?? [],\n' +
        '      initialDeposit: Array.isArray(object?.initial_deposit)\n' +
        '        ? object.initial_deposit.map((e: any) => Coin.fromAmino(e))\n' +
        '        : [],\n' +
        '      proposer: object.proposer,\n' +
        '      metadata: object.metadata ?? "",\n' +
        '      title: object.title,\n' +
        '      summary: object.summary\n' +
        '    };\n' +
        '  }'
    },
    {
      object: 'MsgSubmitProposal',
      methodName: 'toAmino',
      newDefinition: 'toAmino(message: MsgSubmitProposal, converter?: AminoConverter): MsgSubmitProposalAmino {\n' +
        '    if (converter === undefined) {\n' +
        '      throw new Error("Can\'t convert to MsgSubmitProposal to amino without an AminoConverter instance");\n' +
        '    }\n' +
        '\n' +
        '    const obj: any = {};\n' +
        '    if (message.messages && message.messages.length > 0) {\n' +
        '      obj.messages = message.messages.map(m => converter.fromAny(m));\n' +
        '    }\n' +
        '    if (message.initialDeposit) {\n' +
        '      obj.initial_deposit = message.initialDeposit.map((e) =>\n' +
        '        e ? Coin.toAmino(e) : undefined\n' +
        '      );\n' +
        '    } else {\n' +
        '      obj.initial_deposit = [];\n' +
        '    }\n' +
        '    obj.proposer = message.proposer;\n' +
        '    if (message.metadata !== "") {\n' +
        '      obj.metadata = message.metadata;\n' +
        '    }\n' +
        '    obj.title = message.title;\n' +
        '    obj.summary = message.summary;\n' +
        '    return obj;\n' +
        '  }'
    },
  ]);
}

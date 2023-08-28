import { patchInterfaceDefinition, patchObjectMethods } from "../../../../patch-utils";

export async function patchModule(outputPath: string) {
  const postsMsgsFile = `${outputPath}/desmos/posts/v3/msgs.ts`;

  // Patch MsgMovePostAmino definition
  await patchInterfaceDefinition(postsMsgsFile, [
    {
      name: "MsgMovePostAmino",
      prop: "subspace_id",
      newDefinition: "subspace_id?: string"
    },
    {
      name: "MsgMovePostAmino",
      prop: "post_id",
      newDefinition: "post_id?: string"
    },
    {
      name: "MsgMovePostAmino",
      prop: "target_subspace_id",
      newDefinition: "target_subspace_id?: string"
    },
    {
      name: "MsgMovePostAmino",
      prop: "target_section_id",
      newDefinition: "target_section_id?: number"
    }
  ]);

  // Patch MsgMovePost from/to amino.
  await patchObjectMethods(postsMsgsFile, [
    {
      object: "MsgMovePost",
      methodName: "toAmino",
      newDefinition: "toAmino(message: MsgMovePost): MsgMovePostAmino {\n" +
        "    const obj: any = {};\n" +
        "    obj.subspace_id = message.subspaceId.gt(0)\n" +
        "      ? message.subspaceId.toString()\n" +
        "      : undefined;\n" +
        "    obj.post_id = message.postId.gt(0) ? message.postId.toString() : undefined;\n" +
        "    obj.target_subspace_id = message.targetSubspaceId.gt(0)\n" +
        "      ? message.targetSubspaceId.toString()\n" +
        "      : undefined;\n" +
        "    obj.target_section_id = message.targetSectionId > 0 ? message.targetSectionId : undefined;\n" +
        "    obj.owner = message.owner;\n" +
        "    return obj;\n" +
        "  }"
    },
    {
      object: "MsgMovePost",
      methodName: "fromAmino",
      newDefinition: "fromAmino(object: MsgMovePostAmino): MsgMovePost {\n" +
        "    return {\n" +
        "      subspaceId: Long.fromString(object.subspace_id ?? '0'),\n" +
        "      postId: Long.fromString(object.post_id ?? '0'),\n" +
        "      targetSubspaceId: Long.fromString(object.target_subspace_id ?? '0'),\n" +
        "      targetSectionId: object.target_section_id ?? 0,\n" +
        "      owner: object.owner,\n" +
        "    };\n" +
        "  }"
    }
  ]);

  // Patch MsgRequestPostOwnerTransferAmino definition
  await patchInterfaceDefinition(postsMsgsFile, [
    {
      name: "MsgRequestPostOwnerTransferAmino",
      prop: "subspace_id",
      newDefinition: "subspace_id?: string"
    },
    {
      name: "MsgRequestPostOwnerTransferAmino",
      prop: "post_id",
      newDefinition: "post_id?: string"
    }
  ]);

  // Patch MsgRequestPostOwnerTransfer from/to amino
  await patchObjectMethods(postsMsgsFile, [
    {
      object: "MsgRequestPostOwnerTransfer",
      methodName: "toAmino",
      newDefinition: "toAmino(\n" +
        "    message: MsgRequestPostOwnerTransfer,\n" +
        "  ): MsgRequestPostOwnerTransferAmino {\n" +
        "    const obj: any = {};\n" +
        "    obj.subspace_id = message.subspaceId.gt(0)\n" +
        "      ? message.subspaceId.toString()\n" +
        "      : undefined;\n" +
        "    obj.post_id = message.postId.gt(0) ? message.postId.toString() : undefined;\n" +
        "    obj.receiver = message.receiver;\n" +
        "    obj.sender = message.sender;\n" +
        "    return obj;\n" +
        "  }"
    },
    {
      object: "MsgRequestPostOwnerTransfer",
      methodName: "fromAmino",
      newDefinition: "fromAmino(\n" +
        "    object: MsgRequestPostOwnerTransferAmino,\n" +
        "  ): MsgRequestPostOwnerTransfer {\n" +
        "    return {\n" +
        "      subspaceId: Long.fromString(object.subspace_id ?? '0'),\n" +
        "      postId: Long.fromString(object.post_id ?? '0'),\n" +
        "      receiver: object.receiver,\n" +
        "      sender: object.sender,\n" +
        "    };\n" +
        "  }"
    }
  ]);

  // Patch MsgCancelPostOwnerTransferRequestAmino definition
  await patchInterfaceDefinition(postsMsgsFile, [
    {
      name: "MsgCancelPostOwnerTransferRequestAmino",
      prop: "subspace_id",
      newDefinition: "subspace_id?: string"
    },
    {
      name: "MsgCancelPostOwnerTransferRequestAmino",
      prop: "post_id",
      newDefinition: "post_id?: string"
    }
  ]);

  // Patch MsgCancelPostOwnerTransferRequest from/to amino
  await patchObjectMethods(postsMsgsFile, [
    {
      object: "MsgCancelPostOwnerTransferRequest",
      methodName: "toAmino",
      newDefinition: "toAmino(\n" +
        "    message: MsgCancelPostOwnerTransferRequest,\n" +
        "  ): MsgCancelPostOwnerTransferRequestAmino {\n" +
        "    const obj: any = {};\n" +
        "    obj.subspace_id = message.subspaceId.gt(0)\n" +
        "      ? message.subspaceId.toString()\n" +
        "      : undefined;\n" +
        "    obj.post_id = message.postId.gt(0) ? message.postId.toString() : undefined;\n" +
        "    obj.sender = message.sender;\n" +
        "    return obj;\n" +
        "  }"
    },
    {
      object: "MsgCancelPostOwnerTransferRequest",
      methodName: "fromAmino",
      newDefinition: "fromAmino(\n" +
        "    object: MsgCancelPostOwnerTransferRequestAmino,\n" +
        "  ): MsgCancelPostOwnerTransferRequest {\n" +
        "    return {\n" +
        "      subspaceId: Long.fromString(object.subspace_id ?? '0'),\n" +
        "      postId: Long.fromString(object.post_id ?? '0'),\n" +
        "      sender: object.sender,\n" +
        "    };\n" +
        "  }"
    }
  ]);

  // Patch MsgAcceptPostOwnerTransferRequestAmino definition
  await patchInterfaceDefinition(postsMsgsFile, [
    {
      name: "MsgAcceptPostOwnerTransferRequestAmino",
      prop: "subspace_id",
      newDefinition: "subspace_id?: string"
    },
    {
      name: "MsgAcceptPostOwnerTransferRequestAmino",
      prop: "post_id",
      newDefinition: "post_id?: string"
    }
  ]);

  // Patch MsgAcceptPostOwnerTransferRequest from/to amino
  await patchObjectMethods(postsMsgsFile, [
    {
      object: "MsgAcceptPostOwnerTransferRequest",
      methodName: "toAmino",
      newDefinition: "toAmino(\n" +
        "    message: MsgAcceptPostOwnerTransferRequest,\n" +
        "  ): MsgAcceptPostOwnerTransferRequestAmino {\n" +
        "    const obj: any = {};\n" +
        "    obj.subspace_id = message.subspaceId.gt(0)\n" +
        "      ? message.subspaceId.toString()\n" +
        "      : undefined;\n" +
        "    obj.post_id = message.postId.gt(0) ? message.postId.toString() : undefined;\n" +
        "    obj.receiver = message.receiver;\n" +
        "    return obj;\n" +
        "  }"
    },
    {
      object: "MsgAcceptPostOwnerTransferRequest",
      methodName: "fromAmino",
      newDefinition: "fromAmino(\n" +
        "    object: MsgAcceptPostOwnerTransferRequestAmino,\n" +
        "  ): MsgAcceptPostOwnerTransferRequest {\n" +
        "    return {\n" +
        "      subspaceId: Long.fromString(object.subspace_id ?? '0'),\n" +
        "      postId: Long.fromString(object.post_id ?? '0'),\n" +
        "      receiver: object.receiver,\n" +
        "    };\n" +
        "  }"
    }
  ]);

  // Patch MsgRefusePostOwnerTransferRequestAmino definition
  await patchInterfaceDefinition(postsMsgsFile, [
    {
      name: "MsgRefusePostOwnerTransferRequestAmino",
      prop: "subspace_id",
      newDefinition: "subspace_id?: string"
    },
    {
      name: "MsgRefusePostOwnerTransferRequestAmino",
      prop: "post_id",
      newDefinition: "post_id?: string"
    },
  ]);

  // Patch MsgRefusePostOwnerTransferRequest from/to amino
  await patchObjectMethods(postsMsgsFile, [
    {
      object: "MsgRefusePostOwnerTransferRequest",
      methodName: "toAmino",
      newDefinition: "toAmino(\n" +
        "    message: MsgRefusePostOwnerTransferRequest,\n" +
        "  ): MsgRefusePostOwnerTransferRequestAmino {\n" +
        "    const obj: any = {};\n" +
        "    obj.subspace_id = message.subspaceId.gt(0)\n" +
        "      ? message.subspaceId.toString()\n" +
        "      : undefined;\n" +
        "    obj.post_id = message.postId.gt(0) ? message.postId.toString() : undefined;\n" +
        "    obj.receiver = message.receiver;\n" +
        "    return obj;\n" +
        "  }"
    },
    {
      object: "MsgRefusePostOwnerTransferRequest",
      methodName: "fromAmino",
      newDefinition: "fromAmino(\n" +
        "    object: MsgRefusePostOwnerTransferRequestAmino,\n" +
        "  ): MsgRefusePostOwnerTransferRequest {\n" +
        "    return {\n" +
        "      subspaceId: Long.fromString(object.subspace_id ?? '0'),\n" +
        "      postId: Long.fromString(object.post_id ?? '0'),\n" +
        "      receiver: object.receiver,\n" +
        "    };\n" +
        "  }"
    }
  ])
}

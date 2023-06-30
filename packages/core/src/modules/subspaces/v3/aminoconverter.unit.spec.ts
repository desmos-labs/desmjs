import {
  MsgAddUserToUserGroup,
  MsgCreateSection,
  MsgCreateSubspace,
  MsgCreateUserGroup,
  MsgDeleteSection,
  MsgDeleteSubspace,
  MsgDeleteUserGroup,
  MsgEditSection,
  MsgEditSubspace,
  MsgEditUserGroup,
  MsgMoveSection,
  MsgMoveUserGroup,
  MsgRemoveUserFromUserGroup,
  MsgSetUserGroupPermissions,
  MsgSetUserPermissions,
} from "@desmoslabs/desmjs-types/desmos/subspaces/v3/msgs";
import Long from "long";
import { ConverterTestData, runConverterTest } from "../../../utils/testutils";
import { AminoConverter } from "./aminoconverter";
import {
  MsgAddUserToUserGroupTypeUrl,
  MsgCreateSectionTypeUrl,
  MsgCreateSubspaceTypeUrl,
  MsgCreateUserGroupTypeUrl,
  MsgDeleteSectionTypeUrl,
  MsgDeleteSubspaceTypeUrl,
  MsgDeleteUserGroupTypeUrl,
  MsgEditSectionTypeUrl,
  MsgEditSubspaceTypeUrl,
  MsgEditUserGroupTypeUrl,
  MsgMoveSectionTypeUrl,
  MsgMoveUserGroupTypeUrl,
  MsgRemoveUserFromUserGroupTypeUrl,
  MsgSetUserGroupPermissionsTypeUrl,
  MsgSetUserPermissionsTypeUrl,
} from "./consts";

describe("Subspaces converter", () => {
  function executeTests(data: ConverterTestData<any>[]) {
    data.forEach((test) => {
      it(test.name, runConverterTest(AminoConverter, test));
    });
  }

  describe("MsgCreateSubspace", () => {
    const testData: ConverterTestData<MsgCreateSubspace>[] = [
      {
        name: "empty message",
        typeUrl: MsgCreateSubspaceTypeUrl,
        msg: MsgCreateSubspace.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgCreateSubspaceTypeUrl,
        msg: {
          name: "Test subspace",
          description: "This is a test subspace",
          owner: "cosmos1lv3e0l66rr68k5l74mnrv4j9kyny6cz27pvnez",
          creator: "cosmos1qzskhrcjnkdz2ln4yeafzsdwht8ch08j4wed69",
        },
        expectedJsonSerialized:
          '{"creator":"cosmos1qzskhrcjnkdz2ln4yeafzsdwht8ch08j4wed69","description":"This is a test subspace","name":"Test subspace","owner":"cosmos1lv3e0l66rr68k5l74mnrv4j9kyny6cz27pvnez"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgEditSubspace", () => {
    const testData: ConverterTestData<MsgEditSubspace>[] = [
      {
        name: "empty message",
        typeUrl: MsgEditSubspaceTypeUrl,
        msg: MsgEditSubspace.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgEditSubspaceTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          name: "This is a new name",
          description: "This is a new description",
          owner: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"description":"This is a new description","name":"This is a new name","owner":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgDeleteSubspace", () => {
    const testData: ConverterTestData<MsgDeleteSubspace>[] = [
      {
        name: "empty message",
        typeUrl: MsgDeleteSubspaceTypeUrl,
        msg: MsgDeleteSubspace.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgDeleteSubspaceTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgCreateSection", () => {
    const testData: ConverterTestData<MsgCreateSection>[] = [
      {
        name: "empty message",
        typeUrl: MsgCreateSectionTypeUrl,
        msg: MsgCreateSection.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgCreateSectionTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          name: "Test section",
          description: "This is a test section",
          parentId: 1,
          creator: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"creator":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","description":"This is a test section","name":"Test section","parent_id":1,"subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgEditSection", () => {
    const testData: ConverterTestData<MsgEditSection>[] = [
      {
        name: "empty message",
        typeUrl: MsgEditSectionTypeUrl,
        msg: MsgEditSection.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgEditSectionTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          sectionId: 1,
          name: "Test section",
          description: "This is a test section",
          editor: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"description":"This is a test section","editor":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","name":"Test section","section_id":1,"subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgMoveSection", () => {
    const testData: ConverterTestData<MsgMoveSection>[] = [
      {
        name: "empty message",
        typeUrl: MsgMoveSectionTypeUrl,
        msg: MsgMoveSection.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgMoveSectionTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          sectionId: 1,
          newParentId: 1,
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"new_parent_id":1,"section_id":1,"signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgDeleteSection", () => {
    const testData: ConverterTestData<MsgDeleteSection>[] = [
      {
        name: "empty message",
        typeUrl: MsgDeleteSectionTypeUrl,
        msg: MsgDeleteSection.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgDeleteSectionTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          sectionId: 1,
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"section_id":1,"signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgCreateUserGroup", () => {
    const testData: ConverterTestData<MsgCreateUserGroup>[] = [
      {
        name: "empty message",
        typeUrl: MsgCreateUserGroupTypeUrl,
        msg: MsgCreateUserGroup.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgCreateUserGroupTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          sectionId: 1,
          name: "Group",
          description: "Description",
          defaultPermissions: ["EDIT_SUBSPACE"],
          initialMembers: ["cosmos16yhs7fgqnf6fjm4tftv66g2smtmee62wyg780l"],
          creator: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"creator":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","default_permissions":["EDIT_SUBSPACE"],"description":"Description","initial_members":["cosmos16yhs7fgqnf6fjm4tftv66g2smtmee62wyg780l"],"name":"Group","section_id":1,"subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgEditUserGroup", () => {
    const testData: ConverterTestData<MsgEditUserGroup>[] = [
      {
        name: "empty message",
        typeUrl: MsgEditUserGroupTypeUrl,
        msg: MsgEditUserGroup.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgEditUserGroupTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          groupId: 1,
          name: "Group",
          description: "Description",
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"description":"Description","group_id":1,"name":"Group","signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgMoveUserGroup", () => {
    const testData: ConverterTestData<MsgMoveUserGroup>[] = [
      {
        name: "empty message",
        typeUrl: MsgMoveUserGroupTypeUrl,
        msg: MsgMoveUserGroup.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgMoveUserGroupTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          groupId: 1,
          newSectionId: 2,
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"group_id":1,"new_section_id":2,"signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgSetUserGroupPermissions", () => {
    const testData: ConverterTestData<MsgSetUserGroupPermissions>[] = [
      {
        name: "empty message",
        typeUrl: MsgSetUserGroupPermissionsTypeUrl,
        msg: MsgSetUserGroupPermissions.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgSetUserGroupPermissionsTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          groupId: 1,
          permissions: ["EDIT_SUBSPACE"],
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"group_id":1,"permissions":["EDIT_SUBSPACE"],"signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgDeleteUserGroup", () => {
    const testData: ConverterTestData<MsgDeleteUserGroup>[] = [
      {
        name: "empty message",
        typeUrl: MsgDeleteUserGroupTypeUrl,
        msg: MsgDeleteUserGroup.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgDeleteUserGroupTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          groupId: 1,
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"group_id":1,"signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgAddUserToUserGroup", () => {
    const testData: ConverterTestData<MsgAddUserToUserGroup>[] = [
      {
        name: "empty message",
        typeUrl: MsgAddUserToUserGroupTypeUrl,
        msg: MsgAddUserToUserGroup.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgAddUserToUserGroupTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          groupId: 1,
          user: "cosmos1x5pjlvufs4znnhhkwe8v4tw3kz30f3lxgwza53",
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"group_id":1,"signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1","user":"cosmos1x5pjlvufs4znnhhkwe8v4tw3kz30f3lxgwza53"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgRemoveUserFromUserGroup", () => {
    const testData: ConverterTestData<MsgRemoveUserFromUserGroup>[] = [
      {
        name: "empty message",
        typeUrl: MsgRemoveUserFromUserGroupTypeUrl,
        msg: MsgRemoveUserFromUserGroup.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgRemoveUserFromUserGroupTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          groupId: 1,
          user: "cosmos1x5pjlvufs4znnhhkwe8v4tw3kz30f3lxgwza53",
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"group_id":1,"signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1","user":"cosmos1x5pjlvufs4znnhhkwe8v4tw3kz30f3lxgwza53"}',
      },
    ];
    executeTests(testData);
  });

  describe("MsgSetUserPermissions", () => {
    const testData: ConverterTestData<MsgSetUserPermissions>[] = [
      {
        name: "empty message",
        typeUrl: MsgSetUserPermissionsTypeUrl,
        msg: MsgSetUserPermissions.fromPartial({}),
        expectedJsonSerialized: "{}",
      },
      {
        name: "complete message",
        typeUrl: MsgSetUserPermissionsTypeUrl,
        msg: {
          subspaceId: Long.fromNumber(1),
          sectionId: 1,
          user: "cosmos1x5pjlvufs4znnhhkwe8v4tw3kz30f3lxgwza53",
          permissions: ["EDIT_SUBSPACE"],
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"permissions":["EDIT_SUBSPACE"],"section_id":1,"signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1","user":"cosmos1x5pjlvufs4znnhhkwe8v4tw3kz30f3lxgwza53"}',
      },
    ];
    executeTests(testData);
  });
});

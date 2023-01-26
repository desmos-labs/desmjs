import {
  MsgCreateSection,
  MsgCreateSubspace,
  MsgCreateUserGroup,
  MsgDeleteSection,
  MsgDeleteSubspace,
  MsgEditSection,
  MsgEditSubspace,
  MsgEditUserGroup,
  MsgMoveSection,
} from "@desmoslabs/desmjs-types/desmos/subspaces/v3/msgs";
import Long from "long";
import { ConverterTestData, runConverterTest } from "../testutils";
import createSubspacesConverters from "./converter";
import {
  MsgCreateSectionTypeUrl,
  MsgCreateSubspaceTypeUrl,
  MsgCreateUserGroupTypeUrl,
  MsgDeleteSectionTypeUrl,
  MsgDeleteSubspaceTypeUrl,
  MsgEditSectionTypeUrl,
  MsgEditSubspaceTypeUrl,
  MsgEditUserGroupTypeUrl,
  MsgMoveSectionTypeUrl,
} from "../../const";

describe("Subspaces converter", () => {
  const converters = createSubspacesConverters();

  function executeTests(data: ConverterTestData<any>[]) {
    data.forEach((test) => {
      it(test.name, runConverterTest(converters, test));
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
          treasury: "cosmos1dkan28w7t65xe3fr44wxr4v86wnwuwh5tun2w2",
          creator: "cosmos1qzskhrcjnkdz2ln4yeafzsdwht8ch08j4wed69",
        },
        expectedJsonSerialized:
          '{"creator":"cosmos1qzskhrcjnkdz2ln4yeafzsdwht8ch08j4wed69","description":"This is a test subspace","name":"Test subspace","owner":"cosmos1lv3e0l66rr68k5l74mnrv4j9kyny6cz27pvnez","treasury":"cosmos1dkan28w7t65xe3fr44wxr4v86wnwuwh5tun2w2"}',
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
          treasury: "cosmos1dkan28w7t65xe3fr44wxr4v86wnwuwh5tun2w2",
          owner: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
          signer: "cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5",
        },
        expectedJsonSerialized:
          '{"description":"This is a new description","name":"This is a new name","owner":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","signer":"cosmos1m0czrla04f7rp3zg7dsgc4kla54q7pc4xt00l5","subspace_id":"1","treasury":"cosmos1dkan28w7t65xe3fr44wxr4v86wnwuwh5tun2w2"}',
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
});

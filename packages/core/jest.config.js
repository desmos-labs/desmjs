/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
    },
  },
  moduleNameMapper: {
    "^@desmos-labs/proto/(.*)$": "<rootDir>/../proto/build/$1",
  },
};

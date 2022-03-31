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
    "^@desmoslabs/types/(.*)$": "<rootDir>/../types/build/$1",
  },
};

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@desmoslabs/desmjs-types/(.*)$": "<rootDir>/../types/build/$1",
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: "./tsconfig.json",
      },
    ],
  },
};

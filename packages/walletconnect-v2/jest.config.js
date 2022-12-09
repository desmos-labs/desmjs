/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["./test.dotenv.config.js"],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: "./tsconfig.json",
      },
    ],
  },
};

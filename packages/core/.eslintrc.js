module.exports = {
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  plugins: ["@typescript-eslint", "prettier"],
  env: {
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  rules: {
    // Permitting console.logs/warns
    "no-console": 0,
    // Permitting to define functions wherever you want
    "no-use-before-define": 0,
    // Permitting to use the '_' (safely)
    "no-underscore-dangle": 0,
    // Strange behavior with default imports
    "import/no-named-as-default": 0,
    // Typescript related warnings
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unused-vars": 0,
  },
};

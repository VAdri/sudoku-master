module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "functional", "lodash-fp"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:functional/recommended",
    "plugin:lodash-fp/recommended",
  ],
  rules: {
    "functional/no-conditional-statement": ["error", { allowReturningBranches: "ifExhaustive" }],
  },
};

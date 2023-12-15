module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
  },
};

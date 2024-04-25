// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@jrock2004/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

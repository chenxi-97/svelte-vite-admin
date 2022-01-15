/**
 * 参考https://github.com/sveltejs/eslint-plugin-svelte3配置
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "svelte3",
    "@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    project: ["./tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  overrides: [
    // this stays the same
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  rules: {
    "quotes": [2, "double", {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }],
    "semi": [2, "always"],
    "semi-spacing": [2, {
      "before": false,
      "after": true
    }],
    "no-cond-assign": "error",
    "no-debugger": "warn",
    "no-dupe-args": "error",
    "no-caller": "error",
    "no-undef": "off",
    "no-unmodified-loop-condition": "error",
    "no-with": "error",
    "no-catch-shadow": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "no-case-declarations": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/require-await": "off",
    "no-constant-condition": "off"
  },
  settings: {
    "svelte3/typescript": () => require("typescript"), 
  },
};

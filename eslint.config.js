const globals = require("globals");
const pluginJs = require("@eslint/js");
const tseslint = require("typescript-eslint");

module.exports = [
    {
      files: ["**/*.{js,mjs,cjs,ts}"]
    },
    {
      languageOptions: { globals: {...globals.browser, ...globals.node} }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
      ignores:[
      "node_modules",
      "build",
      ]
    },
    {
      rules: {
        "no-console": "warn",
        "no-undef": "off",
        "@typescript-eslint/no-require-imports":"off"
      }
    }
]
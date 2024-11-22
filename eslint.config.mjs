// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";

// export default [
//   {
//     files: ["**/*.js"], // Only JS files
//     languageOptions: {
//       sourceType: "commonjs",
//       globals: globals.browser,
//     },
//     plugins: {
//       js: pluginJs,
//     },
//     rules: {
//       ...pluginJs.configs.recommended.rules,
//     },
//   },
//   {
//     files: ["**/*.ts"], // Only TS files
//     languageOptions: {
//       sourceType: "module",
//       globals: globals.browser,
//     },
//     rules: {
//       ...tseslint.configs.recommended.rules,
//     },
//   },
// ];

import globals from "globals";
import eslint from "@eslint/js";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/*Remove the commented import below for possible fix*/
//import tseslint from "typescript-eslint";

export default [
  // JavaScript files configuration
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      js: eslint,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      // Add or override rules for JavaScript
      // "no-unused-vars": "warn",
    },
  },
  // TypeScript files configuration
  {
    files: ["**/*.ts"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      ts: tseslintPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      // Add or override rules for TypeScript
      // "@typescript-eslint/no-unused-vars": "error"
    },
  },
];

/************* First Iteration *************/
// ts are also getted linted by eslint and js files are also getting linted by tseslint
// giving wrong lint errors for app.ts and index.js file

// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";


// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.{js,mjs,cjs,ts}"]},
//   {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
// ];
/************* First Iteration *************/

/************* Second Iteration *************/
// lints run but tseslint does not display any lint errors from my app.ts file

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
/************* Second Iteration *************/

/*******Third Iteration****/
import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/*Comment the above imports and uncomment the below for possible fix
 However, still does not achieve the goal to have eslint lint js files and tseslint lint onlt ts files
*/
// import globals from "globals";
// import eslint from "@eslint/js";
// import tseslintPlugin from "@typescript-eslint/eslint-plugin";
// import tsParser from "@typescript-eslint/parser";
// import tseslint from "typescript-eslint";

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
      ts: tseslint, // Rename this tseslintPlugin for possible fix
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      // Add or override rules for TypeScript
      // "@typescript-eslint/no-unused-vars": "error"
    },
  },
];

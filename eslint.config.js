import js from "@eslint/js";
import globals from "globals";

export default [
    {
        ignores: ["node_modules/**", "dist/**", "coverage/**"],
    },
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            "no-console": "off",
            "no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],
            quotes: ["error", "double"],
            semi: ["error", "always"],
        },
    },
];

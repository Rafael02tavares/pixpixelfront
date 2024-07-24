module.exports = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    extends: [
      "eslint:recommended",
      "plugin:astro/recommended",
      "plugin:tailwindcss/recommended",
      "prettier"
    ],
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
      },
    ],
    rules: {
      // Suas regras personalizadas aqui
    },
  };
  
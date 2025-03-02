/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "@ianvs/prettier-plugin-sort-imports"],
  proseWrap: "always",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

import string from "rollup-plugin-string";

export default [
  {
    // Generate JSON for all standards
    input: "src/index.js",
    output: [
      {
        file: "milstd2525.js",
        format: "umd",
        name: "milstd2525"
      },
      {
        file: "milstd2525.esm.js",
        format: "es"
      }
    ],
    plugins: [
      string({
        // Required to be specified
        include: "**/*.tsv"
      })
    ]
  }
];

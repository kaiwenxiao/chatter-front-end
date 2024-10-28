import type { CodegenConfig } from "@graphql-codegen/cli";

// 1. yarn graphql-code-generator init, to generate this file
// 2. npm run codegen to generate "prisma client"

// similar to prisma client
const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3001/graphql",
  documents: "src/**/*.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;

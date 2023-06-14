import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

const getPath = (route: string) => path.resolve(__dirname, route);

const BASE_PATH = "/todo-with-react-node-dynamodb/";

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_PATH,
  resolve: {
    alias: {
      "@/pages": getPath("./src/pages"),
      "@/components": getPath("./src/common/components"),
      "@/hooks": getPath("./src/common/hooks"),
      "@/styles": getPath("./src/common/styles"),
      "@/lib": getPath("./src/common/lib"),
      "@/store": getPath("./src/common/store"),
      "@/images": getPath("./src/assets/images"),
      "@/assets": getPath("./src/assets"),
      "@/": getPath("./src"),
      "~/": getPath("./"),
    },
  },
  plugins: [react()],
});

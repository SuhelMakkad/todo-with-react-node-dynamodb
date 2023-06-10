import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

const getPath = (route: string) => path.resolve(__dirname, route);

// https://vitejs.dev/config/
export default defineConfig({
  base: "/todo-with-react-node-dynamodb/",
  resolve: {
    alias: {
      "@/components": getPath("./src/common/components"),
      "@/hooks": getPath("./src/common/hooks"),
      "@/styles": getPath("./src/common/styles"),
      "@/images": getPath("./src/assets/images"),
      "@/assets": getPath("./src/assets"),
      "@/": getPath("./src"),
    },
  },
  plugins: [react()],
});

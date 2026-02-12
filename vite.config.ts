import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { defineConfig as defineVitestConfig } from "vitest/config";
import { mergeConfig } from "vite";

export default mergeConfig(
  defineConfig({
    plugins: [react()],
  }),
  defineVitestConfig({
    test: {
      environment: "happy-dom",
      globals: true,
    },
  })
);

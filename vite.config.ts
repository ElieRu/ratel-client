import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), visualizer({ open: false, filename: "build/stats.html" })],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            if (id.includes("/routes/dashboard/")) return "dashboard";
            if (id.includes("/routes/admin/")) return "admin";
            return undefined;
          }

          if (id.includes("@clerk")) return "clerk";
          if (id.includes("recharts") || id.includes("d3") || id.includes("@visx")) return "charts";
          if (id.includes("react-router") || id.includes("@react-router")) return "router";
          if (id.includes("lucide-react") || id.includes("@radix-ui")) return "ui";
          if (id.includes("zod") || id.includes("@hookform") || id.includes("date-fns")) return "forms";
          return "vendor";
        },
      },
    },
  },
});



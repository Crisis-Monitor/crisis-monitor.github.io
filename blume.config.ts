import { defineConfig } from "blume";

export default defineConfig({
  title: "Crisis Monitor Docs",
  description: "Documentação de uso do Crisis Monitor.",
  content: { root: "docs" },
  deployment: {
    output: "static",
    site: "https://crisis-monitor.github.io",
  },
  navigation: {
    tabs: [{ label: "Docs", path: "/" }],
    sidebar: { display: "group" },
  },
  search: { provider: "orama" },
  ai: {
    llmsTxt: true,
    mcp: { enabled: false, route: "/mcp" },
  },
});

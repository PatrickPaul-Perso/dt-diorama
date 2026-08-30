import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/dt-diorama",
        trailingSlash: true,
        typescript: {
          tsconfigPath: "./tsconfig.pages.json",
        },
      }
    : {}),
};

export default nextConfig;

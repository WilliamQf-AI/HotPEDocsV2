import { defineConfig } from "vitepress";
import sidebar from "./sidebar";

export default defineConfig({
  lang: "zh-CN",
  title: "HotPE Docs",
  description: "一个纯净、强大、优雅的Win11PE",
  lastUpdated: true,
  base: "/",
  themeConfig: {
    logo: "https://www.hotpe.top/Other/HotPE_logo.png",
    sidebar,
    nav: [
      {
        text: "首页",
        link: "https://www.hotpe.top/",
      },
      {
        text: "下载站",
        link: "https://down.hotpe.top/",
      },
      {
        text: "GitHub",
        link: "https://www.hotpe.top/CodeWarehouse",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present VirtualHotBar",
    },
    editLink: {
      style: 'github',
      domain: 'github.com',
      repo: 'VirtualHotBar/HotPEToolBox',
      branch: 'main',
      dir: 'docs',
      text: '在 GitHub 上编辑此页',
      pattern: 'https://github.com/VirtualHotBar/HotPEDocsV2/edit/main/docs/:path'
    },
    lastUpdatedText: "最近更新于",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/VirtualHotBar/HotPEToolBox' }
    ],
  },
});

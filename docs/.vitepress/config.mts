import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My VitePress Test",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Pages", link: "/pages/index" },
    ],

    sidebar: [
      {
        text: "Pages",
        items: [
          { text: "This is my first page", link: "/pages/1" },
          { text: "This is my second page", link: "/pages/2" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});

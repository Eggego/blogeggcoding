import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  head: [['link', { rel: 'icon', href: '/Logos.svg' }]],
  title: "蛋的独立博客",
  description: "记录美好生活，分享技术经验",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '技术',
        items: [
          { text: '前端', link: '/markdown-examples' },
          { text: '后端', link: '/item-2' },
          { text: '运维', link: '/item-3' }
        ]
      },
      { text: '生活', link: '/api-examples' },
    ],
    logo: '/Logos.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/egglife' }
    ]
  }
})

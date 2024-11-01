import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'

export const navbarZh: NavbarOptions = [
  {
    text: '指南',
    children: [
      '/guide/introduction.md',
      '/guide/getting-started.md',
      '/guide/configuration.md',
      '/guide/page.md',
      '/guide/markdown.md',
      '/guide/assets.md',
      '/guide/i18n.md',
      '/guide/deployment.md',
      '/guide/theme.md',
      '/guide/plugin.md',
      '/guide/bundler.md',
      '/guide/migration.md',
      '/guide/troubleshooting.md',
    ],
  },
  {
    text: '参考',
    children: [
      {
        text: '核心',
        children: [
          '/reference/cli.md',
          '/reference/config.md',
          '/reference/frontmatter.md',
          '/reference/components.md',
          '/reference/plugin-api.md',
          '/reference/theme-api.md',
          '/reference/client-api.md',
          '/reference/node-api.md',
        ],
      },
      {
        text: '打包工具',
        children: [
          '/reference/bundler/vite.md',
          '/reference/bundler/webpack.md',
        ],
      },
      {
        text: '生态系统',
        children: [
          {
            text: '默认主题',
            link: 'https://ecosystem.vuejs.press/themes/default/',
          },
          {
            text: '插件',
            link: 'https://ecosystem.vuejs.press/plugins/',
          },
        ],
      },
    ],
  },
  {
    text: '了解更多',
    children: [
      {
        text: '深入',
        children: [
          '/advanced/architecture.md',
          '/advanced/plugin.md',
          '/advanced/theme.md',
          {
            text: 'Cookbook',
            link: '/advanced/cookbook/',
          },
        ],
      },
      {
        text: '其他资源',
        children: [
          {
            text: '生态系统',
            link: 'https://ecosystem.vuejs.press/',
          },
          {
            text: '市场',
            link: 'https://marketplace.vuejs.press/',
          },
          {
            text: '贡献指南',
            link: 'https://github.com/vuepress/core/blob/main/CONTRIBUTING_zh.md',
          },
        ],
      },
    ],
  },
  {
    text: `v${VERSION}`,
    children: [
      {
        text: '更新日志',
        link: 'https://github.com/vuepress/core/blob/main/CHANGELOG.md',
      },
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org/',
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org/',
      },
    ],
  },
  // TODO: remove the type assertion
] as NavbarOptions

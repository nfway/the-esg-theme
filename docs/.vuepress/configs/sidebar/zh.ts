import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarZh: SidebarOptions = {
  '/guide/': [
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
  ],
  '/advanced/': [
    {
      text: '深入',
      children: [
        '/advanced/architecture.md',
        '/advanced/plugin.md',
        '/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/advanced/cookbook/README.md',
        '/advanced/cookbook/usage-of-client-config.md',
        '/advanced/cookbook/adding-extra-pages.md',
        '/advanced/cookbook/making-a-theme-extendable.md',
        '/advanced/cookbook/passing-data-to-client-code.md',
        '/advanced/cookbook/markdown-and-vue-sfc.md',
        '/advanced/cookbook/resolving-routes.md',
      ],
    },
  ],
  '/reference/': [
    {
      text: '核心',
      collapsible: true,
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
}

import { createRequire } from 'node:module'
import process from 'node:process'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { searchProPlugin } from "vuepress-plugin-search-pro"
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
import {
  head,
  navbarZh,
  sidebarZh,
} from './configs/index.js'

const __dirname = getDirname(import.meta.url)
const require = createRequire(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  // 设置站点基础路径
  base: '/',

  // `<head>` 中的额外标签
  head,

  // 设置语言为中文
  lang: 'zh-CN',

  title: 'VuePress',
  description: 'Vue 驱动的静态网站生成器',

  // 根据环境变量指定打包工具
  bundler:
    process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

  // 配置默认主题
  theme: defaultTheme({
    hostname: 'https://vuepress.vuejs.org',
    logo: '/images/hero.png',
    repo: 'vuepress/core',
    docsRepo: 'vuepress/docs',
    docsDir: 'docs',

    // 中文配置
    navbar: navbarZh,
    sidebar: sidebarZh,
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',

    // 禁用 "Edit this page on GitHub" 链接
    editLink: false,

    // 启用最后更新时间并自定义格式
    //lastUpdatedText: '上次更新',

    themePlugins: {
      git: isProd, // 启用 git 插件以获取最后更新时间
      prismjs: !isProd,
    },
  }),

  // 配置 Markdown
  markdown: {
    importCode: {
      handleImportPath: (importPath) => {
        if (importPath.startsWith('@vuepress/')) {
          const packageName = importPath.match(/^(@vuepress\/[^/]*)/)![1]
          return importPath
            .replace(
              packageName,
              path.dirname(require.resolve(`${packageName}/package.json`)),
            )
            .replace('/src/', '/lib/')
            .replace(/hotKey\.ts$/, 'hotKey.d.ts')
        }
        return importPath
      },
    },
  },

  // 使用插件
  plugins: [
    searchProPlugin({
      indexContent: true, // 启用全文索引
      autoSuggestions: true, // 启用自动建议功能
      customFields: [
        {
          getter: ({ frontmatter }): string[] => frontmatter["tag"] as string[],
          formatter: `Tag: $content`,
        },
      ],
      hotKeys: [
        { key: '/', ctrl: true }, // Ctrl + / 快捷键触发搜索
        { key: 'k', ctrl: true }, // Ctrl + k 快捷键触发搜索
      ],
      queryHistoryCount: 5, // 搜索历史记录数量限制为5条
      resultHistoryCount: 5, // 搜索结果历史记录数量限制为5条
      searchDelay: 150, // 搜索延迟时间设置为150ms，防止频繁请求
      sortStrategy: "max", // 搜索结果排序策略为最大匹配优先
      locales:{
         "/": {
           placeholder:"搜索", // 中文占位符
         }
       }
    }),
    
    googleAnalyticsPlugin({
      id: process.env.DOCS_GA_ID ?? '', // Google Analytics ID 配置
    }),

    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'), // 注册自定义组件目录
    }),

    ...(isProd ? [shikiPlugin({
          langs: ['bash', 'diff', 'json', 'md', 'ts', 'vue'], 
          theme: 'dark-plus', 
        })] : []),


    
  ],
})

import { defineUserConfig, defaultTheme } from 'vuepress'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { readingTimePlugin } from "vuepress-plugin-reading-time2";
import { getSideBar } from './utils/getSideBar'

export default defineUserConfig({
  lang: 'zh-CN',
  base : '/vuepress-next-blog/',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
    sidebar : getSideBar()
  }),
  plugins: [
    copyCodePlugin({
      // 插件选项
    }),
    readingTimePlugin({
      // your options
    }),
    // smoothScrollPlugin(),
    // smoothScrollPlugin({
    //   delay: 1000
    // }),
    // lightgalleryPlugin({
    //   // your options
    // }),
    // seoPlugin({
    //   hostname: 'www.linyuchen.cloud'
    // }),
  ],
  // debug : true

})
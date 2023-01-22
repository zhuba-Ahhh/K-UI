import DefaultTheme from 'vitepress/theme'

import KIcon from '@k-ui/components/icon'
import '@k-ui/theme-chalk/src/index.scss'

console.log(KIcon)
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(KIcon) // 在vitepress中 注册全局组件
  }
}

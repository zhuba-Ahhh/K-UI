// 整合、导出组件

import _Icon from './src/icon.vue'
import { withInstall } from '@k-ui/utils/with-install'

const Icon = withInstall(_Icon)

export default Icon // app.use 和 import 单独使用

export * from './src/icon'

// 添加的类型 可以在模板中被解析
declare module 'vue' {
  // 自动合并接口
  export interface GlobalComponents {
    KIcon: typeof Icon
  }
}

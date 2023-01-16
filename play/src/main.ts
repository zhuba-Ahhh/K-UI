import { createApp } from 'vue'
import App from './App.vue'

import KIcon from '@k-ui/components/icon'
import '@k-ui/theme-chalk/src/index.scss'

const app = createApp(App)
const plugins = [KIcon]

plugins.forEach(plugin => {
  app.use(plugin)
})

app.mount('#app')

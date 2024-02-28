import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//1. 重置样式的库
import 'normalize.css'

// 2. 自己项目的重置样式和公用样式
import '@/assets/styles/common.less'

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')

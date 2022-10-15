import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 1、引入normalize样式解决浏览器样式统一问题
import 'normalize.css'
// 2、引入初始化base.scss样式文件 1rem = 100px
import './style/base.scss'

createApp(App).use(store).use(router).mount('#app')

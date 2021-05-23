import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/reset.scss'

createApp(App).use(store)
  .use(ElementUI)
  .use(router).mount('#app')

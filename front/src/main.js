import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/reset.scss'
import 'highlight.js/styles/github.css'
import { VueShowdown } from 'vue-showdown'
import 'github-markdown-css/github-markdown.css';

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

//vuex use asynchronize way
//vue3 does not call created() at first (in render)
store.dispatch('getBlogInfo');
createApp(App).use(store)
  .use(ElementUI)
  .use(router)
  .use(VueMarkdownEditor)
  .component('VueShowdown', VueShowdown)
  .mount('#app')

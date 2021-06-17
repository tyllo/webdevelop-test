// styles
import '@/assets/scss/main.scss'

import { CreateElement } from 'vue/types/umd'

import Vue from 'vue'

import { createRouter } from '@/router'

// Plugins
import { initPlugins } from '@/plugins'

import App from './App.vue'

Vue.config.productionTip = false // process.env.NODE_ENV !== 'production'

const router = createRouter({})

const app = {
  name: 'root',
  router,
  render: (h: CreateElement) => h(App),
}

const options: Parameters<typeof initPlugins>[0] = {
  Vue,
  app,
  router,
  App: void 0,
}

initPlugins(options)

options.App = new Vue(app).$mount('#app')

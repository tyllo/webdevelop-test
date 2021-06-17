import Vue from 'vue'
import VueRouter from 'vue-router'
import { Store } from 'vuex'
import { ICreateRoutesOptions } from '@/typings/common'
import { createRoutes } from './routes'


Vue.use(VueRouter)

export const createRouter = (options: { store?: Store<unknown> }) => {
  const router = new VueRouter({
    mode: 'history', // 'hash',
    base: process.env.VUE_APP_BASE_URL,
    routes: [],
  })

  const createRoutesOptions: ICreateRoutesOptions = {
    ...options,
    router,
  }

  const routes = createRoutes(createRoutesOptions)
  routes.forEach((route) => {
    router.addRoute(route)
  })

  return router
}

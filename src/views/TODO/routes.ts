import { RouteConfig } from 'vue-router'
import {
  ROUTE_TODO,
} from '@/helpers/enums/routes'


const createRoutes = (): RouteConfig[] => [
  {
    path: '/todo',
    name: ROUTE_TODO,
    component: () => import(
      /* webpackChunkName: "view.todo.list" */
      './ViewTodoList.vue'
    ),
  },
]

const createModule = () => {
  const routes = createRoutes()
  return routes
}

export default createModule

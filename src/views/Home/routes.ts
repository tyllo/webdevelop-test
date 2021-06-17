import { RouteConfig } from 'vue-router'
import { ICreateRoutesOptions } from '@/typings/common'
import { ROUTE_TODO } from '@/helpers/enums/routes'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createRoutes = (options: ICreateRoutesOptions): RouteConfig[] => [
  {
    path: '/',
    redirect: {
      name: ROUTE_TODO,
    },
  },
]

const createModule = (options: ICreateRoutesOptions) => {
  const routes = createRoutes(options)
  return routes
}

export default createModule

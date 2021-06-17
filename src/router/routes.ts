import { RouteConfig } from 'vue-router'
import { ICreateRoutesOptions } from '@/typings/common'

import TODORoutes from '@/views/TODO/routes'
import HomeRoutes from '@/views/Home/routes'


type RouteConfigFabric =
  | ((o: ICreateRoutesOptions) => RouteConfig[])
  | RouteConfig[]

const createGetRoutes = (options: ICreateRoutesOptions, list: RouteConfigFabric[]): RouteConfig[] => {
  const results = list.reduce((acc: RouteConfig[], current: RouteConfigFabric) => {
    const result = typeof current === 'function' ? current(options) : current
    return acc.concat(result)
  }, [] as RouteConfig[])

  return results.filter(Boolean).flat()
}

export const createRoutes = (options: ICreateRoutesOptions): RouteConfig[] => (
  createGetRoutes(options, [
    HomeRoutes,

    TODORoutes,

    // must be last, because in error - `*` route
    // ErrorsRoutes,
  ])
)

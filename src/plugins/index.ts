import { IInitPlugin } from '@/typings/common'

import { initPlugin as initPluginLogConfig } from './log-config'


export const initPlugins: IInitPlugin = (options) => {
  initPluginLogConfig(options)
}

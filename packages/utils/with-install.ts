// 该文件会导出一个工具方法，用于给组件添加 install 方法

import type { App, Plugin } from 'vue'

// export type SFCWithInstall<T> = T & Plugin & { install(app: App): void }
export type SFCWithInstall<T> = T & Plugin;

export function withInstall<T>(component: T): SFCWithInstall<T> {
  const comp = component as any
  comp.install = (app: App) => {
    app.component(comp.name, comp)
  }
  return comp as SFCWithInstall<T>
}

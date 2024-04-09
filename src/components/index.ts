/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-07 19:20:33
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-09 10:44:25
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/components/index.ts
 * @Description: 注册全局组件
 */
// 批量引用并注册全局组件
import { App, defineAsyncComponent } from 'vue'
export const install = (app: App) => {
  const requireComponent = import.meta.glob('./**/*.vue')
  for (const path in requireComponent) {
    const fileName =
      path.split('/')[2] === 'index.vue'
        ? path.split('/')[1]
        : `${path.split('/')[1]}-${path.split('/')[2]}`

    if (fileName) {
      app.component(fileName, defineAsyncComponent(requireComponent[path]))
    }
  }
}

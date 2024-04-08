/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-01 18:34:21
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-01 18:34:28
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/types/shims-vue.d.ts
 * @Description: 声明.vue 后缀文件，防止ts不识别
 */
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

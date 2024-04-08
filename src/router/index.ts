/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-11 14:39:48
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-08 17:31:15
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/router/index.ts
 * @Description: 工程路由文件
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 通过vite 的import.meta.glob读取src/views下的所有index.vue文件
const viewIndexModules = import.meta.glob('../views/**/index.vue')
const layoutIndexModules = import.meta.glob('../layouts/**/index.vue')
// 子路由
const childrenRoutes: Array<RouteRecordRaw> = []

Object.keys(viewIndexModules).forEach((path: string) => {
  // 判断是不是业务组件，如果是业务组件则不添加到路由中
  if (path.includes('/components')) return
  // 使用正则表达式匹配文件夹名称
  const routePath = path.match(/\.\.\/views\/(.*)\.vue$/)[1]
  const lastIndex = routePath.lastIndexOf('/')
  const routeName = routePath.substring(0, lastIndex)
  childrenRoutes.push({
    name: routeName,
    path: `/${routeName.toLowerCase()}`,
    component: viewIndexModules[path]
  })
})

const rootRoutes = Object.keys(layoutIndexModules).map((path: string) => {
  const fileName = path.match(/\.\.\/layouts\/(.*)\.vue$/)[1].split('/')[0]
  const routePath = path.match(/\.\.\/layouts\/(.*)\.vue$/)[1].split('/')[1]

  if (fileName === 'default') {
    return {
      name: routePath,
      path: `/`,
      redirect: '/dashboard',
      component: layoutIndexModules[path],
      children: childrenRoutes
    }
  } else if (fileName === 'pages') {
    return {
      name: routePath,
      path: `/${routePath.toLowerCase()}`,
      component: layoutIndexModules[path]
    }
  }
})

const routes: Array<RouteRecordRaw> = rootRoutes as Array<RouteRecordRaw>
const router = createRouter({
  history: createWebHistory(),
  routes
})
// 路由守卫

router.beforeEach((_to, _from, next) => {
  next()
})

export default router

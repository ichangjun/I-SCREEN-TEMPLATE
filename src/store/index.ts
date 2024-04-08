/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-11 16:10:38
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-08 15:35:23
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/store/index.ts
 * @Description: 数据持久化
 */
import { createStore } from 'vuex'
import vuexPersistedstate from 'vuex-persistedstate'
import getters from './getters'
import app from './modules/app'

export default createStore({
  modules: {
    app
  },
  getters,
  plugins: [
    // 状态持久化
    vuexPersistedstate({
      key: 'I-SCREEN-TEMPLATE',
      paths: ['']
    })
  ]
})

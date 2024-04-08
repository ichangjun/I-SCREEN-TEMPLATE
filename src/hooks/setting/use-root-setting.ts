/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-15 15:52:28
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-08 15:28:42
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/hooks/setting/use-root-setting.ts
 * @Description: 工程设置hooks
 */
import { useStore } from 'vuex'
import { computed } from 'vue'

export function useRootSetting() {
  const store = useStore()

  const getPageLoading = computed(() => store.getters.loading)
  return {
    store,
    getPageLoading
  }
}

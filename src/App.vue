<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-01 17:40:02
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-10 10:36:22
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/App.vue
 * @Description: 主页
-->
/*
* @Author: changjun anson1992@163.com
* @Date: 2024-01-05 10:36:01
* @LastEditors: changjun anson1992@163.com
* @LastEditTime: 2024-01-12 14:27:31
* @FilePath: /VUE3-VITE-TS-TEMPLATE/src/App.tsx
* @Description: 工程入口文件
*/

<template>
  <div class="app-page-view w-full h-full">
    <config-provider :theme="{
      token: {
        colorPrimary: '#165DFF',
        fontFamily: fontFamily,
        fontWeightStrong: 200,
        fontSize: 13,
        colorTextBase: '#4E5969',
      }
    }">
      <div v-if="loading" class="absolute w-full h-full loading-mask">
        <spin :spinning="loading" tip="加载中"></spin>
      </div>
    </config-provider>
    <router-view />
  </div>
</template>
<script lang='ts' setup>
import { defineOptions, computed } from 'vue'
import { Spin, ConfigProvider } from 'ant-design-vue'
import { useStore } from 'vuex'
defineOptions({
  name: 'App',
})
const store = useStore()
const loading = computed(() => {
  return store.getters.loading
})
const fontFamily = 'Inter,"-apple-system",BlinkMacSystemFont,"PingFang SC","Hiragino Sans GB","noto sans","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif'
</script>

<style lang="less" scoped>
.loading-mask {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;

  .ant-spin {
    position: relative;
    left: 0;
    top: 0;
  }
}
</style>

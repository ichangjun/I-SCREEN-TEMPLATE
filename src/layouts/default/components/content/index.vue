<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-02 17:56:53
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-09 15:59:14
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/layouts/default/components/content/index.vue
 * @Description: 内容框架页面
-->
<template>
  <section class="w-full h-full background-transparent">
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </router-view>
  </section>
</template>
<script setup lang='ts'>
import { defineOptions } from 'vue'
defineOptions({
  name: 'LayoutContent'
})
</script>
<style lang="less" scoped></style>

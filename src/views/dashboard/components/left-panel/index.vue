<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-04-09 16:06:53
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-09 18:16:21
 * @FilePath: /I-SCREEN-TEMPLATE/src/views/dashboard/components/i-left-panel/index.vue
 * @Description: 栏目标题
-->
<template>
  <section class="i-left-panel">
    <div class="panel-title">
      <!-- <div class="label"></div> -->
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </section>
</template>
<script setup>
import { computed, defineProps } from 'vue'
const props = defineProps({
  height: {
    type: Number,
    default: 360,
  },
  title: {
    type: String,
    default: '实时监控',
  },
})
const getPanelHeight = computed(() => {
  return `${props.height}px`
})

const getPanelTitleBg = computed(() => {
  const titleBg = new URL(`../../../../assets/images/gejingquyingjijiankong.svg`, import.meta.url)
    .href
  return `url(${titleBg}) no-repeat`
})
</script>
<style lang="less" scoped>
.i-left-panel {
  width: 100%;
  height: v-bind(getPanelHeight);

  .panel-title {
    background: v-bind(getPanelTitleBg) no-repeat;
    background-size: cover;
    height: 48px;
    width: 452px;
    position: relative;
  }
}
</style>

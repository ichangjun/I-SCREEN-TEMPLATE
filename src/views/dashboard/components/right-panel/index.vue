<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-04-09 16:21:56
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-09 16:36:37
 * @FilePath: /I-SCREEN-TEMPLATE/src/views/dashboard/components/right-panel/index.vue
 * @Description: 栏目标题
-->
<template>
  <div class="i-right-panel">
    <div class="panel-title">
    </div>
    <slot></slot>
  </div>
</template>
<script setup>
import { computed, defineProps } from 'vue'
const props = defineProps({
  height: {
    type: Number,
    default: 380,
  },
  title: {
    type: String,
    default: '投诉监测',
  },
})
const getPanelHeight = computed(() => {
  return `${props.height}px`
})

const getPanelTitleBg = computed(() => {
  const titleBg = new URL(`../../../../assets/images/lvyouyundongzhishu.svg`, import.meta.url)
    .href
  return `url(${titleBg}) no-repeat`
})
</script>
<style lang="less" scoped>
.i-right-panel {
  width: 100%;
  height: v-bind(getPanelHeight);
  display: flex;
  flex-direction: column;
  align-items: end;

  .panel-title {
    background: v-bind(getPanelTitleBg) no-repeat;
    background-size: cover;
    height: 48px;
    width: 452px;
    position: relative;
    float: right;
  }
}
</style>

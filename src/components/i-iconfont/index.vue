<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-04 09:51:14
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-02-04 14:39:38
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/components/i-iconfont/index.vue
 * @Description: 基于iconfont的图标组件
-->
<template>
  <a-space>
    <icon-font :type="symbolId" />
  </a-space>
</template>
<script setup lang='ts'>
import { defineOptions, defineProps, computed } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue'
import { Space as ASpace } from 'ant-design-vue'
defineOptions({
  name: ''
})
const props = defineProps({
  icon: {
    type: String,
    default: ''
  }, // iconfont图标名称
  className: {
    type: String,
    default: ''
  }, // 自定义类名
  size: {
    type: String,
    default: '24px'
  }, // 图标大小
  color: {
    type: String,
    default: '#ffffff'
  } // 图标颜色
})
const IconFont = createFromIconfontCN({
  extraCommonProps: {
    class: `iconfont`,
    style: {
      fontSize: `${props.size.replace('px', '')}px`,
      color: props.color
    }
  },
  scriptUrl: '//at.alicdn.com/t/c/font_4431880_dxnn5wj3y7.js'
})
// 定义iconfont图标名称
const symbolId = computed(() => `icon-${props.icon}`);
</script>
<style lang="less">
.anticon {
  color: #ffffff !important;
}
</style>

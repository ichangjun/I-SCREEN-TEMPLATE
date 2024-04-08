<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-01 17:55:14
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-07 12:56:17
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/components/i-svg-icon/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <svg :class="classList" aria-hidden=true :style="styleObj">
    <use :xlink:href="symbolId"></use>
  </svg>
</template>
<script lang='ts' setup>
import { PropType, defineProps, computed, defineOptions } from 'vue'
interface SvgIconProps {
  className?: string, // 类名
  icon: string, // 名称
  color: string, // 颜色
  size: string, // 尺寸
}
defineOptions({
  name: 'ISvgIcon',
})
const props = defineProps({
  className: {
    type: String,
    default: ''
  } as unknown as PropType<SvgIconProps['className']>, // svg 类名
  icon: {
    type: String,
    required: true
  } as unknown as PropType<SvgIconProps['icon']>, // svg 名称
  color: {
    type: String,
    default: '#333333'
  } as unknown as PropType<SvgIconProps['color']>,
  size: {
    type: String,
    default: '14px'
  } as unknown as PropType<SvgIconProps['size']>, // svg 尺寸
})
// svg 类名
const classList = computed(() => {
  return [`icon-${props.className}`, 'i-svg-icon']
})

// svg 内联样式
const styleObj = computed(() => {
  return {
    width: `${props.size.replace('px', '')}px`,
    height: `${props.size.replace('px', '')}px`,
  }
})
const symbolId = computed(() => `#icon-${props.icon}`);
</script>
<style lang='less' scoped>
.i-svg-icon {
  position: relative;
  width: v-bind('styleObj.width');
  height: v-bind('styleObj.height');
  color: v-bind('props.color');
}
</style>

<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-04-10 14:16:25
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-10 20:25:51
 * @FilePath: /I-SCREEN-TEMPLATE/src/components/i-echarts/line/index.vue
 * @Description: 折线图
-->
<template>
  <div ref="chartLineRef" class='chart-line-view' :style="{ width: props.width, height: props.height }"></div>
</template>
<script setup lang='ts'>
import { defineOptions, defineProps, onMounted, inject, ref, markRaw } from 'vue'
import { listenerChange } from '@/hooks/core/use-echarts-setting'
defineOptions({
  name: 'ChartLine'
})
// 注入 echarts 实例
const echarts = inject('$echarts')
// echarts 实例
const chartLineRef = ref(null)
const chartLineInstance = ref(null)
const props = defineProps({
  // 业务数据，对应echarts的 xAxis 中的 data
  xData: {
    type: Array,
    reqyired: true,
    default: () => []
  },
  // 业务数据，对应echarts的 series 中的 data
  yData: {
    type: Array,
    reqyired: true,
    default: () => []
  },
  // 表示需要特殊定制的配置
  // 同一工程中UI会规定一个统一的设计规范（比如颜色，字体，图例格式，位置等），不排除某个图标会和设计规范不同，需要特殊定制样式，所以开放这个配置，增强灵活性
  extraOptions: {
    type: Object,
    default: () => { }
  },
  // 图表宽度
  width: {
    type: [String, Number],
    default: '480px'
  },
  // 图表高度
  height: {
    type: [String, Number],
    default: '280px'
  }
})

// 图表配置
const chartOption = [
  {
    xAxis: {
      data: props.xData
    }
  },
  {
    yAxis: {
      type: 'value'
    }
  },
  {
    series: [{
      type: 'line',
      data: props.yData,
      itemStyle: {
        color: new (echarts as any).graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#0CD2BB' },
          { offset: 1, color: '#10749F' },
        ]),
      }
    }]
  }
]
onMounted(() => {
  // 图表渲染
  if (chartLineRef.value) {
    chartLineInstance.value = markRaw((echarts as any).init(chartLineRef.value))
  }
})
/**
 *  数据变化 & 窗口大小变化 监听
 * @param props 通信
 * @param chartBarRef 图表容器
 * @param chartBarInstance 图表实例
 * @param chartOption 图表配置
 */
listenerChange(props, chartLineRef, chartLineInstance, chartOption)
</script>

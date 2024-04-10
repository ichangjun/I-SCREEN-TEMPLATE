<template>
  <div ref="chartBarRef" class='chart-bar-view' :style="{ width: props.width, height: props.height }"></div>
</template>
<script setup lang='ts'>
import { defineOptions, defineProps, onMounted, inject, ref, markRaw } from 'vue'
import { listenerChange } from '@/hooks/core/use-echarts-setting'
defineOptions({
  name: 'ChartBar'
})
// 注入 echarts 实例
const echarts = inject('$echarts')
// echarts 实例
const chartBarRef = ref(null)
const chartBarInstance = ref(null)
const props = defineProps({
  // 业务数据，对应echarts的 xAxis 中的 data
  xData: {
    type: Array,
    required: true,
    default: () => []
  },
  // 业务数据，对应echarts的 series 中的 data
  yData: {
    type: Array,
    required: true,
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

const chartOption = [{
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
    type: 'bar',
    data: props.yData,
    itemStyle: {
      color: new (echarts as any).graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#0CD2BB' },
        { offset: 1, color: '#10749F' },
      ]),
    }
  },
  //顶部圆柱帽子
  {
    data: props.yData,
    name: 'a',
    tooltip: {
      show: false
    },
    type: 'pictorialBar',
    symbol: 'rect',
    symbolSize: ['15', '4'],
    symbolPosition: 'end',
    z: 3,
    itemStyle: {
      normal: {
        color: '#FFFFFF',
        shadowBlur: 5,
        shadowOffsetX: 0,
        shadowOffsetY: 2
      }
    },
  }]
}]
onMounted(() => {
  // 图表渲染
  if (chartBarRef.value) {
    chartBarInstance.value = markRaw((echarts as any).init(chartBarRef.value))
  }
})
/**
 *  数据变化 & 窗口大小变化 监听
 * @param props 通信
 * @param chartBarRef 图表容器
 * @param chartBarInstance 图表实例
 * @param chartOption 图表配置
 */
listenerChange(props, chartBarRef, chartBarInstance, chartOption)
</script>

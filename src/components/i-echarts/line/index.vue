<template>
  <div ref="chartLineRef" class='chart-line-view' :style="{ width: props.width, height: props.height }"></div>
</template>
<script setup lang='ts'>
import { defineOptions, defineProps, ref, onMounted, onUnmounted, watch, inject, computed, markRaw } from 'vue'
import { merge } from 'lodash-es'
import { BASEOPTIONS } from '../default-options'
import { LineSeriesOption } from 'echarts/charts'
defineOptions({
  name: 'ChartLine'
})
// 注入 echarts 实例
const echarts = inject('$echarts')
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
    default: '320px'
  }
})
// echarts 实例
const chartLineRef = ref(null)
// 监听窗口大小变化，重新渲染图表
const resizeChart = () => {
  chartLineInstance.value.resize()
}
onMounted(() => {
  updateChartView()
  window.addEventListener('resize', resizeChart)
})
onUnmounted(() => {
  window.removeEventListener('resize', resizeChart)
})
// 监听 props.yData 变化，更新图表
watch(
  () => props.yData,
  (newVal) => {
    if (chartLineRef.value) {
      chartLineInstance.value.setOption({
        series: [{
          data: newVal
        }]
      })
    }
  },
  {
    deep: true
  }
)
// 组装图表配置
const assembleChartOptions = computed(() => {

  return merge({}, BASEOPTIONS,
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
    },
    props.extraOptions
  ) as LineSeriesOption
})
// 图表渲染
const updateChartView = () => {
  if (chartLineRef.value) {
    chartLineInstance.value = markRaw((echarts as any).init(chartLineRef.value))
    chartLineInstance.value.showLoading({
      text: '正在努力加载...',
      color: '#333',
      textColor: '#333',
      maskColor: 'rgba(255,255,255, 0.5)',
      zlevel: 0
    })
    chartLineInstance.value.setOption(assembleChartOptions.value)
    chartLineInstance.value.hideLoading()
  }
}
</script>

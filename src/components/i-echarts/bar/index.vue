<template>
  <div ref="chartBarRef" class='chart-bar-view' :style="{ width: props.width, height: props.height }"></div>
</template>
<script setup lang='ts'>
import { defineOptions, defineProps, ref, onMounted, onUnmounted, watch, inject, computed, markRaw } from 'vue'
import { merge } from 'lodash-es'
import { BASEOPTIONS } from '../default-options'
import { BarSeriesOption } from 'echarts/charts'
defineOptions({
  name: 'ChartBar'
})
// 注入 echarts 实例
const echarts = inject('$echarts')
const chartBarInstance = ref(null)
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
    default: '300px'
  }
})
// echarts 实例
const chartBarRef = ref(null)
// 监听窗口大小变化，重新渲染图表
const resizeChart = () => {
  chartBarInstance.value.resize()
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
    if (chartBarRef.value) {
      chartBarInstance.value.setOption({
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
    },
    props.extraOptions
  ) as BarSeriesOption
})
// 图表渲染
const updateChartView = () => {
  if (chartBarRef.value) {
    chartBarInstance.value = markRaw((echarts as any).init(chartBarRef.value))
    chartBarInstance.value.showLoading({
      text: '正在努力加载...',
      color: '#333',
      textColor: '#333',
      maskColor: 'rgba(255,255,255, 0.5)',
      zlevel: 0
    })
    chartBarInstance.value.setOption(assembleChartOptions.value)
    chartBarInstance.value.hideLoading()
  }
}
</script>

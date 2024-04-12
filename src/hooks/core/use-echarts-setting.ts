/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-04-10 16:43:26
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-12 11:03:05
 * @FilePath: /I-SCREEN-TEMPLATE/src/hooks/common/use-echarts-setting.ts
 * @Description: echarts 图表渲染hooks
 */
import { onMounted, onUnmounted, watch } from 'vue'
import { merge } from 'lodash-es'
import { BASEOPTIONS } from '../../components/i-echarts/default-options'

/**
 *  数据变化 & 窗口大小变化 监听
 * @param props 通信
 * @param chartBarRef 图表容器
 * @param chartBarInstance 图表实例
 * @param chartOption 图表配置
 */
export const listenerChange = (props, chartRef, chartInstance, chartOption) => {
  // 监听 props.yData 变化，更新图表
  watch(
    () => props.yData,
    (newVal) => {
      if (chartRef.value) {
        // 从chartOption取出series数据，更新图表数据
        const _option = chartOption.find((item) => Object.keys(item)[0] === 'series')
        _option.series.forEach((item) => {
          item.data = newVal
        })
        chartInstance.value.setOption({
          series: _option.series
        })
      }
    },
    {
      deep: true
    }
  )
  onMounted(() => {
    chartInstance.value.showLoading({
      text: '正在努力加载...',
      color: '#BCE7FA',
      textColor: '#BCE7FA',
      maskColor: 'rgba(11, 28, 58, 0.7)',
      zlevel: 0
    })
    chartInstance.value.setOption(assembleChartOptions(chartOption, props))
    chartInstance.value.hideLoading()
    window.addEventListener('resize', () => {
      resizeChart(chartInstance)
    })
  })
  onUnmounted(() => {
    window.removeEventListener('resize', () => {
      resizeChart(chartInstance)
    })
  })
}
// 监听窗口大小变化，重新渲染图表
const resizeChart = (chartInstance) => {
  console.log(7777)
  chartInstance.value.resize()
}
/**
 * 组装图表配置
 * @param options 不同类型图表配置
 * @returns
 */
const assembleChartOptions = (options, props) => {
  return merge({}, BASEOPTIONS, ...options, props.extraOptions)
}

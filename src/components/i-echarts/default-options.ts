/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-04-08 19:47:19
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-09 11:48:09
 * @FilePath: /I-SCREEN-TEMPLATE/src/components/i-echarts/line/default-options.ts
 * @Description: line 折线图默认配置
 */
const BASEOPTIONS = {
  grid: {
    containLabel: true,
    bottom: 0,
    left: 25,
    right: 35,
    top: 30
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(13, 64, 71, 0.50)',
    borderColor: 'rgba(143, 225, 252, 0.60)',
    padding: 8,
    textStyle: {
      color: '#FFFFFF'
    },
    valueFormatter: function (value) {
      return value
    }
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      interval: 0,
      show: true,
      fontSize: 12,
      margin: 15,
      color: '#BCE7FA'
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(39, 164, 255, .5)'
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: 'rgba(188, 231, 250, 0.15)'
      }
    }
  },
  series: [
    {
      name: '',
      symbol: 'circle',
      symbolSize: 6,
      barWidth: '8', // 设置柱宽为系列宽度的50%
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      },
      lineStyle: {
        width: 1
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%',
        textStyle: {
          color: '#FFFFFF'
        }
      }
    }
  ]
}

export { BASEOPTIONS }

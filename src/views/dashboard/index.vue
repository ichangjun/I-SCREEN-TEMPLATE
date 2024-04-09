<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-01 18:23:51
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-09 10:45:57
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/views/dashboard/index.vue
 * @Description: 大屏首页
-->
<template>
  <div class="dashboard-view w-full h-full">
    <i-echarts-bar :x-data="xData" :y-data="yData" :extra-options="extraOptions" />
    <i-echarts-line :x-data="xData" :y-data="yData" :extra-options="extraOptions" />
  </div>
</template>
<script setup lang='ts'>
import { defineOptions, inject } from 'vue'
defineOptions({
  name: 'Dashboard',
})
// 注入 echarts 实例
const echarts = inject('$echarts')
const xData = ['牛首山', '汤山', '九龙湖', '猿人洞', '紫清湖', '银杏湖', '方山', '大塘金']
const yData = [22.3, 14.5, 7.2, 17.5, 28.1, 9.2, 21.7, 16.5]
const extraOptions = {
  series: [
    {
      name: '人均/元',
      itemStyle: {
        color: new (echarts as any).graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#0CD2BB' },
          { offset: 1, color: '#10749F' },
        ]),
      }
    }
  ]
}
</script>
<style lang='less' scoped>
.dashboard-view {
  background: rgba(11, 28, 58, .9);
}
</style>

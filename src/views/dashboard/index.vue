<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-01 18:23:51
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-10 20:16:52
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/views/dashboard/index.vue
 * @Description: 大屏首页
-->
<template>
  <div class="left-view_part h-full absolute top-0 left-0 z-[99]">
    <left-panel class="left-top_part">
      <i-echarts-bar :x-data="xData" :y-data="yData" :extra-options="extraOptions" />
    </left-panel>
    <left-panel class="left-center_part">
      <i-echarts-line :x-data="xData" :y-data="yData" :extra-options="extraOptions" />
    </left-panel>
    <left-panel class="left-bottom_part">
      <i-echarts-bar :x-data="xData" :y-data="yData" :extra-options="extraOptions" />
    </left-panel>
  </div>
  <i-map ref="mapRef" @init="listenerMapLoad" :plugins="['AMap.MarkerCluster']"></i-map>
  <div class="right-view_part h-full absolute top-0 right-0 z-[99]">
    <right-panel class="left-top_part">
      <i-echarts-bar :x-data="xData" :y-data="yData" :extra-options="extraOptions" />
    </right-panel>
    <right-panel class="left-center_part">
      <i-echarts-line :x-data="xData" :y-data="yData" :extra-options="extraOptions" />
    </right-panel>
    <right-panel class="left-bottom_part">
      <i-echarts-bar :x-data="xData" :y-data="yData" :extra-options="extraOptions" />
    </right-panel>
  </div>
</template>
<script setup lang='ts'>
import { defineOptions, inject } from 'vue'
import leftPanel from './components/left-panel/index.vue'
import rightPanel from './components/right-panel/index.vue'
defineOptions({
  name: 'Dashboard',
})
// 地图渲染完成
const listenerMapLoad = (isLoad) => {
  if (isLoad) {
    console.log('地图渲染完成');

  }
}
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
.left-view_part {
  background: linear-gradient(90deg, rgba(11, 28, 58, .8) 78%, rgba(11, 28, 58, 0) 100%);
  width: 480px;
}

.right-view_part {
  background: linear-gradient(270deg, rgba(11, 28, 58, .8) 78%, rgba(11, 28, 58, 0) 100%);
  width: 480px;
}
</style>

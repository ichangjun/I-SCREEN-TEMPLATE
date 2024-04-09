<template>
	<div :id="props.id" class="w-full h-full relative"></div>
</template>
<script lang="js" setup>
import { onMounted, onUnmounted, ref, defineExpose, markRaw } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'

const props = defineProps({
	id: {
		type: String,
		default: 'mapContainer'
	},
	/**
	 * 地图中心点
	 */
	center: {
		type: Array,
		default: () => [118.815177, 31.937047]
	},
	/**
	 * 地图缩放级别
	 * 初始化地图层级，值越大放大比例越大
	 */
	zoom: {
		type: Number,
		default: 12
	},
	/**
	 * 主题样式
	 */
	mapStyle: {
		type: String,
		default: 'amap://styles/blue'
	},
	/**
	//  * 是否立即渲染地图
	 */
	isNowLoadMap: {
		type: Boolean,
		default: true
	},
	plugins: {
		type: Array,
	}
})
const emit = defineEmits(['init', 'markerClick'])
const mapInstance = ref(null)
const locaInstance = ref(null)
// 初始化地图
const initMap = () => {
	AMapLoader.load({
		key: '1a32caadefb3b17daab83f6548ebc2f4',
		version: '2.0',
		Loca: {
			version: '2.0'
		},
		plugins: props.plugins //需要使用的的插件列表
	})
		.then((AMap) => {
			mapInstance.value = markRaw(new AMap.Map(props.id, {
				// 初始化地图中心点位置
				center: props.center,
				// 初始化地图级别
				zoom: props.zoom,
				viewMode: '2D',
				pitch: 60,
				resizeEnable: true,
				mapStyle: props.mapStyle,
				features: ['bg', 'road'],
			}))
			// 热力图实例
			// @ts-ignore
			locaInstance.value = new Loca.Container({
				map: mapInstance.value
			})
			emit('init', true)
		})
		.catch((e) => {
			console.error(e)
		})
}


onMounted(() => {
	if (props.isNowLoadMap) {
		initMap()
	}
})

onUnmounted(() => {
	if (mapInstance.value) {
		emit('init', false)
		mapInstance.value.destroy()
		mapInstance.value = null
	}
})
defineExpose({
	initMap,
	mapInstance,
	locaInstance
})
</script>

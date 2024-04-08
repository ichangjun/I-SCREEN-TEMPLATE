/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-07 19:20:16
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-01 19:16:05
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/components/i-echarts/index.tsx
 * @Description: svg 图标组件
 */
import { defineComponent, PropType, computed } from 'vue'
interface SvgIconProps {
  className?: string // 类名
  icon: string // 名称
  color: string // 颜色
  size: string // 尺寸
}
export default defineComponent({
  name: 'ISvgIcon',
  props: {
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
    } as unknown as PropType<SvgIconProps['size']> // svg 尺寸
  },
  setup(props) {
    // svg 类名
    const classList = computed(() => {
      return [`icon-${props.className}`]
    })
    // svg 内联样式
    const styleObj = computed(() => {
      return {
        width: `${props.size.replace('px', '')}px`,
        height: `${props.size.replace('px', '')}px`,
        position: 'relative'
      }
    })
    const symbolId = computed(() => `#icon-${props.icon}`)
    return () => (
      <svg
        class={classList.value}
        aria-hidden={true}
        style={styleObj.value}
      >
        <use xlink:href={symbolId.value}></use>
      </svg>
    )
  }
})

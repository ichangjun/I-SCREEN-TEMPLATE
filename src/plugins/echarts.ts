import * as echarts from 'echarts/core'
// 按需引入图表类型
import { BarChart, LineChart, PictorialBarChart } from 'echarts/charts'
import {
  // 图表标题组件
  TitleComponent,
  // 提示框组件
  TooltipComponent,
  // 直角坐标系组件
  GridComponent,
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  PictorialBarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

export default echarts

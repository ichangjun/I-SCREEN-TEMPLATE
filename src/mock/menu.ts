import { MenuItem } from "@/types/menu";

/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-02-02 18:16:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-03-22 19:08:16
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/src/mock/menu.ts
 * @Description: mock 菜单栏数据
 */
export const menus: MenuItem[] = [
  {
    key: 1,
    title: '工作台',
    label: '工作台',
    disabled: false,
    path: '/dashboard',
    icon: 'yingyong',
  },
  {
    key: 2,
    title: '组件库',
    label: '组件库',
    path: '/library',
    disabled: false,
    icon: 'kuozhan',
    children: [
      {
        key: 23,
        label: '播放器',
        title: '播放器',
        disabled: false,
        path: '/library/video-play',
      },
      {
        key: 24,
        label: '基础组件库',
        title: '基础组件库',
        disabled: false,
        icon: 'guanli',
        path: '/library/base',
        children: [
          {
            key: 241,
            label: '按钮',
            title: '按钮',
            disabled: false,
            path: '/library/base/button',
          },
          {
            key: 242,
            label: '表格',
            title: '表格',
            disabled: false,
            path: '/library/base/table',
          },
        ]
      }
    ],
  },
  {
    key: 3,
    title: '关于',
    label: '关于',
    disabled: false,
    path: '/about',
    icon: 'guanli',
  },
  {
    key: 4,
    title: '文档',
    label: '文档',
    path: '/document',
    disabled: false,
    icon: 'cpu',
  },
  {
    key: 5,
    title: '异常页',
    label: '组件库',
    path: '/error',
    disabled: false,
    icon: 'error',
    children: [
      {
        key: 53,
        label: '403',
        title: '403',
        disabled: false,
        path: '/error/403',
      },
      {
        key: 54,
        label: '404',
        title: '404',
        disabled: false,
        path: '/error/404',
      },
      {
        key: 55,
        label: '500',
        title: '500',
        disabled: false,
        path: '/error/500',
      }
    ],
  },
]

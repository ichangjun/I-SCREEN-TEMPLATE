/*
 * @Author: changjun anson1992@163.com
 * @Date: 2024-01-05 10:36:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2024-04-09 17:59:51
 * @FilePath: /VUE3-VITE-TS-TEMPLATE/vite.config.ts
 * @Description: 工程配置文件
 */
import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { visualizer } from 'rollup-plugin-visualizer'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 加载全局环境配置文件
  const envConfig = loadEnv(mode, './')

  let _plugins = [
    vue(),
    // svg 图标插件
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')]
    }),
    // html 插件
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: envConfig.VITE_APP_TITLE
        }
      }
    })
  ]
  if (mode !== 'development' && envConfig.VITE_BUILD_ANILYZE === 'true') {
    _plugins.push(
      // 打包性能分析插件
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    )
  }
  return {
    plugins: _plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'primary-color': '#0960bd'
          },
          additionalData: `@import "${path.resolve(__dirname, 'src/styles/reset.less')}";`,
          javascriptEnabled: true
        }
      }
    },
    server: {
      port: envConfig.VITE_PORT as unknown as number,
      open: true,
      proxy: {
        '/musicApi': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/musicApi/, '')
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]' // 资源文件像 字体，图片等
        }
      },
      terserOptions: {
        // 禁用不必要的构建选项
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  }
})

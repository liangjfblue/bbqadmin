import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src') // 路径别名
		},
		extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名
	},
	css: {
		// CSS 预处理器
		preprocessorOptions: {
			// 定义全局 SCSS 变量
			scss: {
				javascriptEnabled: true,
				api: 'modern-compiler',
				additionalData: `
			  @use "@/styles/variables.scss" as *;
			`
			}
		}
	}
})

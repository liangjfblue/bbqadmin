import type { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { start, close } from '@/utils/nprogress'

export const publicRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/home/index.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: publicRoutes
})

router.beforeEach((to, from, next) => {
	start()
	next()
})

router.afterEach(() => {
	close()
})

/* 初始化路由表 */
export function resetRouter() {
	router.getRoutes().forEach((route) => {
		const { name } = route
		if (name) {
			router.hasRoute(name) && router.removeRoute(name)
		}
	})
}
/* 导出 setupRouter */
export const setupRouter = (app: App<Element>) => {
	app.use(router)
}

import type { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { start, close } from '@/utils/nprogress'

export const Layout = () => import('@/layout/index.vue')

export const publicRoutes: Array<RouteRecordRaw> = [
	// {
	// 	path: '/redirect',
	// 	component: Layout,
	// 	meta: { hidden: true },
	// 	children: [
	// 		{
	// 			path: '/redirect/:path(.*)',
	// 			component: () => import('@/views/redirect/index.vue')
	// 		}
	// 	]
	// },
	{
		path: '/login',
		component: () => import('@/views/login/index.vue')
	},
	{
		path: '/',
		name: 'homeRoot',
		component: Layout,
		redirect: '/home',
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('@/views/home/index.vue'),
				meta: { isShow: true, title: '首页', icon: 'home' }
			},
			{
				path: '/system',
				name: 'system',
				meta: { isShow: true, title: '系统管理', icon: 'system' },
				children: [
					{
						path: '/user',
						name: 'user',
						component: () => import('@/views/system/user/index.vue'),
						meta: { isShow: true, title: '用户管理', icon: 'user' }
					},
					{
						path: '/role',
						name: 'role',
						component: () => import('@/views/system/role/index.vue'),
						meta: { isShow: true, title: '角色管理', icon: 'role' }
					}
				]
			}
		]
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

export default [
	{
		path: '/test',
		name: 'test',
		component: () => import('@/views/test/index.vue'),
		meta: {
			title: '测试页面'
		}
	}
]

<template>
	<template v-for="item in props.routerList" :key="item.path">
		<!-- 当该菜单项有子菜单时 -->
		<el-sub-menu :index="item.path" v-if="item.children && item.children.length > 0">
			<template #title v-if="item.meta.icon">
				<!-- 菜单项图标，我此处用的是全局封装的 svg组件 -->
				<el-icon><svg-icon :icon-class="item.meta.icon as string" /></el-icon>
				<span>{{ item.meta.title }}</span>
			</template>
			<template #title v-else>{{ item.meta.title }}</template>
			<sidebarItem :routerList="item.children as CustomRouteRecordRaw[]" />
		</el-sub-menu>

		<el-menu-item :index="item.path" v-else>
			<template v-if="item.meta.icon">
				<el-icon><svg-icon :icon-class="item.meta.icon as string" /></el-icon>
				<span>{{ item.meta.title }}</span>
			</template>
			<template v-else>
				{{ item.meta.title }}
			</template>
		</el-menu-item>
	</template>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
import { defineProps } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

type CustomRouteRecordRaw = RouteRecordRaw & {
	meta: {
		isShow?: boolean
	}
}

const props = defineProps({
	routerList: {
		type: Array as () => CustomRouteRecordRaw[],
		required: true
	}
})
</script>

<style scoped>
.is-active {
	color: #409eff;
	font-weight: 700;
}

.el-menu-item {
	&:hover {
		color: #fff;
		font-weight: 700;
	}
}

.el-menu--collapse {
	.el-menu-item {
		justify-content: center;
	}
}
</style>

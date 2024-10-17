<template>
	<div class="sidebar">
		<div class="sidebar-logo flex-center">
			<svg-icon icon-class="logo" />
			<span>bbqAdmin</span>
		</div>

		<el-menu
			active-text-color="#fff"
			background-color="#001529"
			:default-active="$route.path"
			text-color="#999"
			:unique-opened="true"
			router>
			<SidebarItem :routerList="routerList" />
		</el-menu>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()
const routerList = router.getRoutes().filter((item) => item.meta && item.meta.isShow)
</script>

<style scoped>
.sidebar {
	height: 100%;
	.sidebar-logo {
		height: 48px;
		background-color: #002140;
		color: #fff;
		font-weight: 700;
		line-height: 48px;
		text-align: center;
		font-size: 20px;
	}
	.el-menu {
		height: calc(100% - 48px);
		border-right: 0;
		overflow: auto;
	}
}
</style>

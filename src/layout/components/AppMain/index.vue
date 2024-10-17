<template>
	<section class="app-main" :style="{ height: height }">
		<router-view></router-view>
	</section>
</template>

<script setup lang="ts">
import variables from '@/styles/variables.module.scss'
import { computed } from 'vue'

// 缓存页面集合
const height = computed(() => {
	return `calc(100vh - ${variables['navbar-height']})`
})
</script>

<style lang="scss" scoped>
.app-main {
	position: relative;
	overflow-y: auto;
	background-color: var(--el-bg-color-page);
}
</style>

<template>
	<div>
		<Sidebar class="sidebar-container" />

		<div class="main-container">
			<AppMain />
		</div>
	</div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar/index.vue'
</script>

<style scoped>
.sidebar-container {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
	width: 210px;
	background-color: #304156;
	transition: width 0.28s;

	:deep(.el-menu) {
		border: none;
	}
}

.main-container {
	position: relative;
	height: 100%;
	margin-left: 210px;
	overflow-y: auto;
	transition: margin-left 0.28s;

	.fixed-header {
		position: sticky;
		top: 0;
		z-index: 9;
		transition: width 0.28s;
	}
}
</style>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
	<div>
		<h1>App页面</h1>
		<el-row class="mb-4">
			<el-button>Default</el-button>
			<el-button type="primary">Primary</el-button>
			<el-button type="success">Success</el-button>
			<el-button type="info">Info</el-button>
			<el-button type="warning">Warning</el-button>
			<el-button type="danger">Danger</el-button>
		</el-row>
		<HelloWorld msg="hello" />
	</div>
</template>
<style lang="scss" scoped></style>

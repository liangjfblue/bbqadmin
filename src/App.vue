<script lang="ts" setup></script>

<template>
	<div>
		<router-view v-slot="{ Component, route }">
			<transition name="animation" mode="out-in">
				<component :is="Component" :key="route.path" />
			</transition>
		</router-view>
	</div>
</template>
<style lang="scss" scoped>
.animation-enter-from,
.animation-leave-to {
	transform: translateX(20px);
	opacity: 0;
}
.animation-enter-to,
.animation-leave-from {
	opacity: 1;
}
.animation-enter-active {
	transition: all 0.7s ease;
}
.animation-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.6, 0.6, 1);
}
</style>

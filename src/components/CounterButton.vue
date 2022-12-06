<script lang="ts" setup>
	import { storeToRefs } from "pinia";
	import { useCounterStore } from "@/stores/counter";

	const store = useCounterStore();
	const { count, doubleCount } = storeToRefs(store);
	const { increment } = store;
</script>

<template>
	<h3>Counter Button</h3>
	<button @click="increment(1)">increment</button>
	<p>count: {{ count }}</p>
	<p>doubleCount: {{ doubleCount }}</p>
</template>

<style lang="less" scoped></style>

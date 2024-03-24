<script setup>
import VVanta from 'vue-vanta-revamp';
import { getCssVar } from 'quasar';
import { ref } from 'vue';

const hexBgColor = getCssVar('dark');
const hexAccentColor = getCssVar('negative');
const vanta=ref()

const options = {
	color: hexAccentColor,
	backgroundColor: hexBgColor,
	maxDistance: 30.00,
	mouseControls: true,
	touchControls: true,
	gyroControls: true,
	minHeight: 200.00,
	minWidth: 200.00,
}

</script>


<template>
	<div>
		<v-vanta effect="net" ref="vanta"  :options="options"></v-vanta>
	</div>
</template>


<style>
#vanta-bg {
	z-index: -1000;
	position: absolute;
	left: 0;
	top: 0;
	height: 100vh;
	width: 100vw;
}
</style>

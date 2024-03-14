<script setup>
import VVanta from 'vue-vanta-revamp';


const options = {
	color: 0xa4647a,
	backgroundColor: 0x313643,
	maxDistance: 31.00,
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200.00,
	minWidth: 200.00,


}
</script>


<template>
	<div>
		<v-vanta effect="net" :options="options"></v-vanta>
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
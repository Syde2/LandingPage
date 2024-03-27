<script setup>
import VVanta from 'vue-vanta-revamp';
import { getCssVar } from 'quasar';
import { ref, watch, computed } from 'vue';

const props = defineProps({
  maxBirds :{
    type:Boolean,
    default:false
  }
})

const hexBgColor = getCssVar('dark');
const hexNegativeColor = getCssVar('negative');
const hexAccentColor = getCssVar('accent');
const vanta=ref()
const toggle = ref(false)
const options = {
	color1: hexNegativeColor,
  color2: hexAccentColor,
	backgroundColor: hexBgColor,
	mouseControls: true,
	touchControls: true,
	gyroControls: true,
	minHeight: 200.00,
	minWidth: 200.00,
  colorMode: "lerpGradient",
  quantity: 5,
}





</script>


<template>
		<v-vanta v-if="props.maxBirds" effect="birds" ref="vanta"  :options="options"></v-vanta>
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

<script setup>
import VVanta from 'vue-vanta-revamp';
import { getCssVar } from 'quasar';
import { ref, watch, computed } from 'vue';

const props = defineProps({
  maxBirds:{
    type:Boolean,
    default:false
  }
})

const max = computed( ()=>props.maxBirds )

const hexBgColor = getCssVar('dark');
const hexNegativeColor = getCssVar('negative');
const hexAccentColor = getCssVar('accent');
const vanta=ref()
const quantity = ref(0.1)

const options = {
	color1: hexNegativeColor,
  color2: hexAccentColor,
	backgroundColor: hexBgColor,
	mouseControls: true,
	touchControls: true,
	gyroControls: true,
	minHeight: 200.00,
	minWidth: 200.00,
  // colorMode: "lerpGradient",
  quantity: quantity.value,
}

watch(max, maxBirds)

function maxBirds(){
  options.quantity = 5
}

</script>


<template>
	<div>
		<v-vanta effect="birds" ref="vanta"  :options="options"></v-vanta>
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

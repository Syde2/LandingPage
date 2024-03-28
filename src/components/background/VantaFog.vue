<script setup>
import VVanta from 'vue-vanta-revamp';
import { getCssVar } from 'quasar';
import { ref, watch, computed } from 'vue';


const hexBgColor = getCssVar('dark');
const hexNegativeColor = getCssVar('negative');
const hexAccentColor = getCssVar('accent');
const vanta=ref()
const toggle = ref(false)
const options = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: hexAccentColor,
  midtoneColor: hexBgColor,
  lowlightColor: hexBgColor,
  baseColor: hexBgColor,
  blurFactor: 0.90,
  speed: 1.10,
  zoom: 0.20
}





</script>


<template>
  <v-vanta ref="vanta" effect="fog"  class="vanta-bg" :options="options"></v-vanta>
</template>


<style>
.vanta-bg {
	z-index: -1000;
	position: absolute;
	left: 0;
	top: 0;
	height: 100vh;
	width: 100vw;
}
</style>

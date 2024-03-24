<script setup>
import {ref, onMounted } from 'vue';
import {timeline} from 'boot/gsap.js'


onMounted(()=>{
  timeline.to('.title', {x:500})
  timeline.to('.title', {x:0}, )

} )



</script>


<template>
	<div>
    <h1  class="title"> ACDC</h1>
		<p  class="text-grey-5 text-overline subtitle"> Join the Club. Connect the dots ... </p>

	</div>
</template>

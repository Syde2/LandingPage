<script setup>
import {ref} from 'vue'
import AnimatedTitle from 'src/components/header/AnimatedTitle.vue'
import VantaBird from 'src/components/background/VantaBird.vue'

const maxBirds= ref(false)
function handleClickTitle(){
  maxBirds.value = true
}

</script>

<template>
  <q-page class="flex flex-center column">
    <AnimatedTitle @click-title="handleClickTitle" />
    <VantaBird  :max-birds=maxBirds />
  </q-page>
</template>




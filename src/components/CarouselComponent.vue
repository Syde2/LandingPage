<script setup>
import { ref } from 'vue'


const slide = ref('style')
const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem totam architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."

</script>


<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel v-model="slide" transition-prev="flip-left" transition-next="flip-right" swipeable animated infinite autoplay
        control-color="white" navigation padding arrows height="300px"
        class="bg-transparent text-white">
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center ">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>


    </div>
  </div>
</template>

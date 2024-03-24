<script setup>
import { ref, onMounted, computed } from 'vue';
import { gsap, timeline } from 'boot/gsap.js'



const words = ['Hello', 'World', 'Lool' , 'Animation', 'Communauté', 'Developpeur', 'Internet', 'Consortium']
const word = ref(words[0])
const show = ref(true)


function wordToggle(){
  const wordIndex= words.indexOf(word.value)
  if(words.length > 1){
    words.splice(wordIndex,1)
  }
  word.value =  words[gsap.utils.random(0, words.length - 1, 1)]
}

function onBeforeEnter(el) {

}

function onEnter(el, done) {
  console.log('Enter : ', el)
  timeline.to(el, {
    duration: 0.3, rotationX: 90, transformOrigin:
      "50% 50% -50", stagger:  {each:0.02, ease:"power2", from:"start"},
      onComplete: done
  })
}

function onAfterEnter(el) {
  wordToggle()
  console.log('words : ', words)
}




</script>


<template>

  <Transition appear @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter" :css="false">
    <h1  :key=words.length class="title"> {{ word }} </h1>
  </Transition>



</template>

<style>
.gsap-box {
  background: #42b883;
  margin-top: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>

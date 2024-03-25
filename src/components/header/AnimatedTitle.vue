<script setup>
import { ref, onMounted, computed } from 'vue';
import { gsap, timeline } from 'boot/gsap.js'

const c_words = [ 'Communauté', 'Consortium', 'Club', 'Cohorte', 'Caf',  'Communauté', 'Consortium', 'Club', 'Cohorte', 'Caf']
const a_words = [ 'Animation', 'Aeropage', 'Amicale', 'Association', 'Ancetres','Animation', 'Aeropage', 'Amicale', 'Association', 'Ancetres' ]
const d_words =['Developpeur', 'Dilletante', 'Designer', 'Destinataire','Developpeur', 'Dilletante', 'Designer', 'Destinataire','Developpeur', 'Dilletante' ]
const ca_words = [ 'Caf', 'Consortium', 'Club', 'Cohorte', 'Caf',  'Communauté', 'Consortium', 'Club', 'Cohorte', 'Caf']

const c_word = ref(c_words[0])
const a_word = ref(a_words[0])
const d_word = ref(d_words[0])
const ca_word = ref(ca_words[0])
const toggle =ref(false)
let c = c_words.length

const emits = defineEmits(['clickTitle'])


function wordToggle(){
  c_word.value = c_words[c]
  a_word.value = a_words[c]
  d_word.value = d_words[c]

  if(c >0){
    c -=1
  }


}

function onBeforeEnter(el) {
  timeline.timeScale(1)
}

function onEnter(el, done) {
  timeline.from(el, {
    duration:0.1, rotationX: 90, transformOrigin:
      "50% 50% -50", stagger:  {each:0.02, ease:"power2", from:"start"},
      onComplete: done
  })
}

function onAfterEnter(el) {
  wordToggle()
}

function handleClick(){
  toggle.value =true
  emits('clickTitle')
}



</script>


<template>

  <Transition  @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter" :css="false">
    <h1 v-if="toggle"   :key=c_word class="title text-center"> {{ a_word  +' '+  c_word +' '+ d_word +' '+ca_word}} </h1>
    <h1 v-else @click=handleClick class="title text-center" style="cursor: pointer;"> AC DC </h1>

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

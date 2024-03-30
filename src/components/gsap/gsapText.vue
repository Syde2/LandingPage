<script setup>
import { gsap, timeline } from 'boot/gsap'
import {ref} from 'vue'


function onBeforeEnter(el) {
  timeline.delay(0.5)

}




function typeWriter() {
  let words = gsap.utils.toArray(".title"),
    timePerCharacter = 0.2;

  words.forEach(el => {
    timeline.from(el, { text: "", duration: el.innerHTML.length * timePerCharacter, ease: "none" });
  });
}

function onEnter(el, done) {
  // timeline.to(el, {
  //   duration: 2,
  //   text: {
  //     delimiter: "",
  //     value: "This is the new text"
  //   },
  //   onComplete: done,


  // })

}

</script>


<template>
  <Transition appear @before-enter="onBeforeEnter" @enter="onEnter" :css="false">
    <div id="demo" ref="demo"></div>
    <!-- <h1 class="title">Custom Title</h1> -->
  </Transition>
</template>

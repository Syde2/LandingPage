<script setup>
const codelineA = "console.log([Quasar] Running SPA);  console.log([vite] connected.)"
const codeLineB = "<div :class=[isActive ? activeClass : '', errorClass]></div> <div :class=[isActive ? activeClass : '', errorClass]></div>  "
const codeLineC = "[plugin:vite:vue] [vue/compiler-sfc] Unexpected token (6:0)  [plugin:vite:vue] [vue/compiler-sfc] Unexpected token (6:0) "
const codeLineD = "class IndexController extends AbstractController { #[Route('/', name: 'index')]"

</script>


<template>
  <!-- <div role="img" class=" overflow-hidden " style="width: 100vw;">
    <div class="accelerate" style="opacity: 1; will-change: opacity;">
      <div
        class="cursor-pointer select-none text-[max(1.5rem,min(3rem,3vw))] leading-[1] bg-opacity-0 py-3 lg:py-4 xl:py-5 whitespace-nowrap relative min-w-full transform-gpu text-neon-primary font-monaspace-neon selection:bg-neon-dark self-start text-left left"
        style="--font-weight: 496.3471283783784;">
        <div class="transform-gpu" style="transform: translateX(-4.34372px);">
          <div :data-text= codelineA class="glowtext accelerate">{{ codelineA }} </div>
        </div>
      </div>
    </div>
    <div class="accelerate" style="opacity: 1; will-change: opacity;">
      <div
        class="cursor-pointer select-none text-[max(1.5rem,min(3rem,3vw))] leading-[1] bg-opacity-0 py-3 lg:py-4 xl:py-5 whitespace-nowrap relative min-w-full transform-gpu text-argon-primary font-monaspace-argon selection:bg-argon-dark self-end text-right right-0"
        style="--font-weight: 215.81711065573774;">
        <div class="transform-gpu" style="transform: translateX(4.34372px);">
          <div
            :data-text=codeLineB
            class="glowtext accelerate"> {{ codeLineB }}
          </div>
        </div>
      </div>
    </div>
    <div class="accelerate" style="opacity: 1; will-change: opacity;">
      <div
        class="cursor-pointer select-none text-[max(1.5rem,min(3rem,3vw))] leading-[1] bg-opacity-0 py-3 lg:py-4 xl:py-5 whitespace-nowrap relative min-w-full transform-gpu text-xenon-primary font-monaspace-xenon selection:bg-xenon-dark self-start text-left left"
        style="--font-weight: 200;">
        <div class="transform-gpu" style="transform: translateX(-4.34372px);">
          <div :data-text="codeLineC" class="glowtext accelerate">{{codeLineC}} </div>
        </div>
      </div>
    </div>
    <div class="accelerate" style="opacity: 1; will-change: opacity;">
      <div
        class="cursor-pointer select-none text-[max(1.5rem,min(3rem,3vw))] leading-[1] bg-opacity-0 py-3 lg:py-4 xl:py-5 whitespace-nowrap relative min-w-full transform-gpu text-radon-primary font-monaspace-radon selection:bg-radon-dark self-end text-right right-0"
        style="--font-weight: 200;">
        <div class="transform-gpu" style="transform: translateX(4.34372px);">
          <div :data-text="codeLineD" class="glowtext accelerate">{{ codeLineD }}</div>
        </div>
      </div>
    </div>
    <div class="accelerate" style="opacity: 1; will-change: opacity;">
      <div
        class="cursor-pointer select-none text-[max(1.5rem,min(3rem,3vw))] leading-[1] bg-opacity-0 py-3 lg:py-4 xl:py-5 whitespace-nowrap relative min-w-full transform-gpu text-krypton-primary font-monaspace-krypton selection:bg-krypton-dark self-start text-left left"
        style="--font-weight: 200;">
        <div class="transform-gpu" style="transform: translateX(-4.34372px);">
          <div
            data-text="let sumSensorReadings: u32 = (1..=10).filter(|x| x % 2 == 0).sum();,) let sumSensorReadings: u32 = (1..=10).filter(|x| x % 2 == 0).sum();,)"
            class="glowtext accelerate">let sumSensorReadings: u32 = (1..=10).filter(|x| x % 2 == 0).sum();,) let
            sumSensorReadings: u32 = (1..=10).filter(|x| x % 2 == 0).sum();,)</div>
        </div>
      </div>
    </div>
  </div> -->


  <div class="bg">
    <q-img src="/code.jpg" width="100vw"></q-img>
  </div>

</template>

<style>
.bg{
  z-index: -1000;
  opacity: 0.6;
}
</style>

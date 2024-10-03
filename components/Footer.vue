<script setup>
import twitter from "../components/assets/icons/twitter.vue"
import linkedin from "../components/assets/icons/linkedin.vue"
import internet from "../components/assets/icons/internet.vue"
const props=defineProps({
  currentComponent:{
    type:String
  }
})
</script>
<template>
  <div  :class="{
    'bg-[#20202a]': currentComponent === 'sun',
    'bg-[#e5e5e5]': currentComponent === 'window' || currentComponent === 'moon'
  }"  class=" w-full  md:h-[30rem]  flex flex-col items-center justify-center  pt-24 md:pb-5 gap-4 md:gap-6">
    <!-- <div class="h-0.5   bg- xl:mx-[292px] mx-[30px]">
 </div>    -->
    <div class="flex flex-row md:gap-14 gap-4 items-center justify-center text-lg md:text-2xl text-slate-400">
      <a class="hover:text-gray-700" href="#about">About</a>
      <a class="hover:text-gray-700" href="#services">Service</a>
      <a class="hover:text-gray-700" href="#projects">Projects</a>
      <a class="hover:text-gray-700" href="#partners">Partners</a>
    </div>
    
    <div class="flex flex-row gap-4 md:gap-6 mb-4">
      <twitter class="w-6 h-6 md:w-8 md:h-8 cursor-pointer"/>
      <linkedin class="w-6 h-6 md:w-8 md:h-8 cursor-pointer"/>
      <internet class="w-6 h-6 md:w-8 md:h-8 cursor-pointer"/>
    </div>
    
    <p class="text-sm md:text-xl text-slate-400 text-center">© 2022 Minab IT Solutions. All rights reserved.</p>
  </div>
</template>
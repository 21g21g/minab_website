<script setup>
import window from "../components/assets/icons/window.vue"
import minablogo from "../components/assets/images/minablogo.webp"
import {useRouter} from "vue-router"
const router=useRouter()

const gotoHome=()=>{
    router.push("/")

}
</script>
<style scoped>
.router-link-exact-active {
  color: blueviolet !important;
}
</style>

<template>
    <nav class="w-full bg-slate-200 py-7 fixed top-0">
    <div class="w-full flex flex-row">
        <div class="ml-4 w-1/2 items-center">
         <img :src="minablogo" alt="there is no image exist" class="w-24 h-10 ml-4 cursor-pointer" @click="gotoHome">
        </div>
      <div class="flex flex-row w-1/2 gap-8 pr-4 items-center text-violet-500">
   
        <NuxtLink to="/">Home</NuxtLink>
    
        <NuxtLink to="/about">
            About
        </NuxtLink>
        <NuxtLink to="/services">
            Services
        </NuxtLink>
        <NuxtLink to="/teams">Teams</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/partners">Partners</NuxtLink>
        <Nuxtlink to="/contacts">Contact</Nuxtlink>
    <window/>
  </div>
    </div>

   </nav>
</template>
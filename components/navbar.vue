<script setup>
import window from "../components/assets/icons/window.vue";
import minablogo from "../components/assets/images/minablogo.webp";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const smallScreen=ref(false)
const gotoHome = () => {
  router.push("/"); // Navigate to home
};
const showToggle=()=>{
    console.log("toggle clicked")
    smallScreen.value=!smallScreen.value
}
</script>

<style scoped>
.router-link-exact-active {
  color: blueviolet !important;
}
</style>

<template>
  <nav class="w-full bg-slate-200 py-7 items-center fixed top-0 border-b-2 border-gray-400 z-50">
    <div class="container mx-auto flex flex-row justify-between items-center px-2 md:px-12">
      <div class="flex-shrink-0 cursor-pointer" @click="gotoHome">
        <img :src="minablogo" alt="Logo" class="w-24 h-8 object-fill">
      </div>

      <div class="hidden md:flex flex-row gap-10 text-lg items-center text-violet-500">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#teams">Teams</a>
        <a href="#partners">Partners</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
        <window />
      </div>

      <div class="md:hidden flex items-center">
        <button id="mobile-menu-button" class="focus:outline-none" @click="showToggle">
          <!-- Hamburger icon or custom SVG icon -->
          <svg class="w-8 h-8 text-violet-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>

      <div class="flex md:hidden flex-row gap-10 text-lg items-center text-violet-500">
       <window class="ml-72 self-center absolute top-9 pt-0" />
      <div v-if="smallScreen" class="flex flex-col text-lg text-violet-500  pt-4">

           <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#teams">Teams</a>
        <a href="#partners">Partners</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </div>
    </div>
  </nav>
</template>
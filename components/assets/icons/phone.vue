<script setup>
const props=defineProps({
    currentComponent:{
        type:String
    }
})
</script>
<template>
    <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path :class="{
              'fill-slate-700':currentComponent==='window'||currentComponent==='moon',
              'fill-white':currentComponent==='sun',
             
              }" d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z" fill="#000000"/>
</svg>
</template>
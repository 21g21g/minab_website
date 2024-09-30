<script setup>
import minab2 from "../components/assets/images/minab2.webp"
definePageMeta({
   'layouts':"default"
 })
</script>
<template>
     <div class="mt-28 flex flex-row w-full">
        <div class="flex flex-col w-1/2">
            <h1 class="font-bold text-3xl">About</h1>
              <p>Founded in 2014 by three college friends in Addis Ababa. Minab IT Solutions Plc is a technology solutions provider with teams in Addis Ababa, Hawassa, Mekelle, Adama, Diredawa, Debre Birhan, Bahir Dar, Bulbula, Bure, Yirgalem and Kombolcha. Minab is a technology consulting and cloud platforms development firm that has worked on several governments and international development organization projects in Ethiopia, Nigeria, Mali, Morocco, Ghana, etc. Among others, our implementation sector includes jobs matching services, data analysis, and reporting tools, enterprise process automation, and property management solutions affording us an excellent reputation with our clients in delivering outstanding results as evidenced in their testimonies. We have a testified willingness to take ownership of issue analysis and resolution efforts and commitment to resolving technical issues regardless of effort or time scoped of any engagement.</p>
        </div>
        <div class="flex w-1/2">

           <img :src="minab2" alt="there is no minab logo in this name" class="h-28 w-20">
        </div>
</div>
</template>
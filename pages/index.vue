<script setup>

import minablogos from "../components/assets/images/minablogo.webp"
import minab2 from "../components/assets/images/minab2.webp";
import service1 from "../components/assets/images/servi1.png";
import service2 from "../components/assets/images/service2.png";
import service3 from "../components/assets/images/service3.png";
import { ref, onMounted, onUnmounted } from 'vue';
import hahu from "../components/assets/images/hahu.webp";
import minab3 from "../components/assets/images/minab3.webp";
import minab4 from "../components/assets/images/minab4.webp";
 import {Loader} from "@googlemaps/js-api-loader"
 import email from "../components/assets/icons/email.vue"
 import phone from "../components/assets/icons/phone.vue"
 import map from "../components/assets/icons/map.vue"
 import Footer from "../components/Footer.vue"
  import yesra from "../components/assets/images/world_bank.png"
  import giz from "../components/assets/images/giz.png"
  import mercy  from "../components/assets/images/mastercard.png"
  import icas  from "../components/assets/images/DFID.png"
  import world  from "../components/assets/images/DAI.png"
  import dbc  from "../components/assets/images/HPR.png"
  import oxford  from "../components/assets/images/HPR.png"
  import eic  from "../components/assets/images/DAI.png"
import dain  from "../components/assets/images/abc.png"
import master from "../components/assets/images/USAID.png"
import snv  from "../components/assets/images/world_bank.png"
import savechi  from "../components/assets/images/mc-logo.png"
import first from "../components/assets/images/siratim.png"
import usi  from "../components/assets/images/snv.png"
import dfid  from "../components/assets/images/UKAID.png"
import feder  from "../components/assets/images/HPR.png"
import hpr  from "../components/assets/images/savechild.png"
import ukai from "../components/assets/images/consult.png"
import sida  from "../components/assets/images/sida.png"
 import twitter from "../components/assets/icons/twitter.vue";
 import linkedin from "../components/assets/icons/linkedin.vue";
 import internet from "../components/assets/icons/internet.vue";
 import kal from "../components/assets/images/kal.webp";
 import mike from "../components/assets/images/mik.webp";
 import berek from "../components/assets/images/bere.webp";
 import derj from "../components/assets/images/dere.webp";
 import nat from "../components/assets/images/nati.webp";
 import muse from "../components/assets/images/musse.webp";
import window from "../components/assets/icons/window.vue"
import maps from "../components/maps.vue"
import moon from "../components/assets/icons/moon.vue"
import sun from "../components/assets/icons/sun.vue"
import cancel from "../components/assets/icons/cancel.vue"
import threearow from "../components/assets/icons/threearow.vue"
import { useRouter } from 'vue-router';
const smallscreens = ref(false);
const currentComponent=ref('window')
const router=useRouter()
const mousehover = ref(null);
const handleMousehover = (id) => {
  mousehover.value = id;
};
const showToggle=()=>{
  smallscreens.value=!smallscreens.value      
}
const handleMouseleave = () => {
  mousehover.value = null;
};

const activeLink = ref('home'); 
const links = ['home', 'about', 'services', 'teams', 'projects', 'partners', 'contacts'];

const setActiveLink = (link) => {
  activeLink.value = link;
  smallscreens.value=false

};

const clickWindow=()=>{
  currentComponent.value='moon'
}
const moonClicked=()=>{
  currentComponent.value='sun'
  
}
const sunClicked=()=>{
  currentComponent.value='window'
}
const navbarColor=computed(()=>{
   switch(currentComponent.value){
    case 'window':
      return "bg-gray-400"
      case "sun":
        return "bg-black"
        default:
          return "bg-slate-200"
   }

})
const gotoHome=()=>{
router.push("#home")
}
  </script>
            <style >
#map {
  height: 100%;
  width: 100%;
}

.giz{
  filter: brightness(0.9) saturate(0) contrast(1.2) sepia(0.3);

}
/* #6b7280 */

html {
    scroll-behavior: smooth;
}</style>
            <template>
             <div class="flex flex-col w-full mt-0 overflow-x-hidden min-h-screen"> 
          <header>
        <nav   :class="[ navbarColor, 'w-full py-7 items-center fixed top-0 border-b-2 border-gray-400 z-50']">
        <div class="container mx-auto flex flex-row justify-between items-center px-2 ">
      
       <div class="flex-shrink-0 cursor-pointer" @click="gotoHome">
        <img :src="minablogos" alt="Logo" class="w-24 h-8 object-fill">
       </div>

       <div  class="hidden md:flex flex-row gap-10 text-lg items-center text-violet-500">
         <a 
            v-for="link in links" 
            :key="link" 
            :href="`#${link}`" 
            @click="setActiveLink(link)" 
            :class="{'text-indigo-700 font-bold': activeLink === link}" 
            class="hover:text-gray-700"
          >
            {{ link.charAt(0).toUpperCase() + link.slice(1) }} 
          </a>
        <window v-if="currentComponent === 'window'" @click="clickWindow" class="cursor-pointer" />
       <moon v-if="currentComponent === 'moon'" @click="moonClicked" class="cursor-pointer" />
       <sun v-if="currentComponent === 'sun'" @click="sunClicked" class="cursor-pointer" />
      
      </div>

      <div class="md:hidden gap-x-2 flex flex-row items-center">
       <window v-if="currentComponent === 'window'" @click="clickWindow" class="cursor-pointer" />
       <moon v-if="currentComponent === 'moon'" @click="moonClicked" class="cursor-pointer" />
       <sun v-if="currentComponent === 'sun'" @click="sunClicked" class="cursor-pointer" />       
        <button id="mobile-menu-button" class="focus:outline-none bg-violet-950 p-2 rounded-lg" @click="showToggle">
           <threearow v-if="!smallscreens"/>
           <cancel v-if="smallscreens"/>
        </button>
        
      </div>
    </div>

    <div v-if="smallscreens" :class="[navbarColor,'md:hidden  absolute top-full w-full left-0 flex flex-col gap-4 py-4 px-8 text-lg text-violet-500 border-t border-gray-400']">
       <a 
          v-for="link in links" 
          :key="link" 
          :href="`#${link}`" 
          @click="setActiveLink(link)" 
          :class="{'text-indigo-700 font-bold': activeLink === link}" 
          class="hover:text-gray-700"
        >
          {{ link.charAt(0).toUpperCase() + link.slice(1) }}
        </a>
       
    
    </div>
  </nav>
</header>
                  <main class="flex-grow"> 
                    <section id="home" class="bg-[url('https://res.cloudinary.com/dtlezwrzm/image/upload/v1661000843/minab_back_weuxkp.png')]  flex flex-col  w-full bg-gray-400  h-[60rem] gap-4 md:gap-8 object-contain bg-cover relative pt-10">
                         <div class="flex sm:justify-start md:justify-center w-full   md:items-center mt-44">
                        <img :src="minablogos" alt="there is no logos in this feild" class="w-[40-rem] object-cover">
                        </div>
                        <div class="flex flex-col text-white  justify-center items-center gap-3 mt-9">
                          <h1 class="font-bold text-2xl md:text-6xl w-[20rem] md:w-[50rem]">From the cloud to clients,</h1>
                         <h2 class="font-bold text-2xl md:text-6xl w-[20rem] md:w-[50rem] ml-10 md:ml-20">We have all the <span class="bg-white text-violet-500 p-2">answers.</span></h2>
                           </div>
                           <div class="text-center mt-10">
                            <button class="text-center bg-purple-700 text-white px-2 py-3 items-center w-44 rounded-lg">Let's discuss</button>
                          </div>
                 
                 </section>

                 <!-- about -->
       <section id="about" class="mt-0 min-h-screen flex flex-col md:flex-row w-full h-auto md:h-[50rem] justify-between bg-[#e5e5e5] md:pt-32 pt-20">
    <div class="flex flex-col gap-6 md:gap-11 px-6 md:px-28 text-center">
      <h1 class="font-semibold text-3xl md:text-4xl text-start">About</h1>
      <p class="text-base md:text-xl w-full md:w-[45rem] text-start text-slate-500">
        Founded in 2014 by three college friends in Addis Ababa, Minab IT Solutions Plc is a technology solutions provider with teams in Addis Ababa, Hawassa, Mekelle, Adama, Diredawa, Debre Birhan, Bahir Dar, Bulbula, Bure, Yirgalem, and Kombolcha. Minab is a technology consulting and cloud platforms development firm that has worked on several governments and international development organization projects in Ethiopia, Nigeria, Mali, Morocco, Ghana, etc. Our implementation sector includes job matching services, data analysis and reporting tools, enterprise process automation, and property management solutions. We have earned an excellent reputation with our clients by delivering outstanding results as evidenced in their testimonies. We have a testified willingness to take ownership of issue analysis and resolution efforts and commitment to resolving technical issues regardless of effort or time scoped of any engagement..
      </p>
      <div class="self-center md:self-start">
        <button class="text-violet-900">Read more</button>
      </div>
    </div>

    <div class="flex justify-center md:pr-56 mt-10   md:mt-0">
      <img
        :src="minab2"
        alt="Minab logo"
        class="h-64 w-64 md:h-[30rem] md:block hidden   md:w-[35rem] rounded-full object-cover"
      />
    </div>
  </section>
                  <!-- services -->
     <section id="services" class="mt-0 flex flex-col bg-[#e5e5e5] w-full md:pt-20 pt-20">
    <h1 class="text-4xl md:text-7xl font-medium text-center">Services</h1>
    <div class="flex flex-col md:flex-row items-center mx-4 md:mx-48 pt-10 md:pt-32 justify-between gap-10">
      <div class="flex flex-col w-full md:w-1/3 gap-7 items-center">
        <img :src="service1" alt="Technology Consultancy" class="bg-[#481d5c] h-24 w-24 p-7  object-cover rounded-lg">
        <h1 class="text-[#481d5c]  text-xl text-center">Technology Consultancy</h1>
        <p class="text-base md:text-xl text-center justify-center px-12">
          Minab offers technical consultancy services to both local and international organizations in three primary areas, data collection and analysis, process automation, and standard operation procedure designs.
        </p>
        <button class="text-violet-900">Explore more</button>
      </div>

      <div class="flex flex-col w-full md:w-1/3 gap-7 items-center">
        <img :src="service2" alt="Software Development" class="bg-[#481d5c] h-24 w-24 p-7 object-cover rounded-lg">
        <h1 class="text-[#481d5c] text-xl text-center px-12">Software Development</h1>
        <p class="text-base md:text-xl text-center px-12 justify-center">
          Minab is a reputable firm in delivering various types of software development services based on both linear as well as dynamic specifications from our clients following all the industry standards and procedures.
        </p>
        <button class="text-violet-900">Explore more</button>
      </div>

      <div class="flex flex-col w-full md:w-1/3 gap-7 items-center">
        <img :src="service3" alt="Outsourcing" class="bg-[#481d5c] h-24 w-24 p-7 object-cover rounded-lg">
        <h1 class="text-[#481d5c] text-xl text-center">Outsourcing</h1>
        <p class="text-base md:text-xl text-center px-12">
          Minab offers developer hours, offshore dedicated developer capacity, and organization IT department outsourcing services to all corporations through our well-experienced team in the sector of operation.
        </p>
        <button class="text-violet-900">Explore more</button>
      </div>
       </div>
       </section>

                   <!-- teams -->
       <section id="teams" class="mt-0 bg-[#e5e5e5] md:pt-36 pt-28 px-4 md:px-20  w-full flex flex-col md:flex-row gap-8">
     <div class="flex flex-col gap-10 w-full ml-10 md:w-2/3">
      <h1 class="text-4xl md:text-5xl w-full font-bold text-center md:text-left">Meet the Team</h1>
      <p class="text-lg md:text-xl text-center mt-5 md:text-left text-slate-600">
        Introducing one of the best software development and technical operation teams in the Ethiopian technology service market. Our team constitutes a diverse set of talent and expertise to tackle our client's challenges and solution needs.
      </p>
    </div>

    <div  class="hidden md:flex  flex-col gap-8 w-full md:w-full">
      <div class="flex flex-wrap w-full gap-4">
        <div class="bg-[#dad2de] w-full md:w-[30%]  h-72 rounded-xl flex flex-col items-center gap-4 px-10 py-4">
          <img :src="kal" alt="Kaleab Mezgebu" class="rounded-full w-20 h-20 mt-3">
          <h1 class="font-bold text-[#481d5c]">KALEAB MEZGEBU</h1>
          <h2 class="text-sm text-[#481d5c]">Co-Founder and COO</h2>
          <div class="flex flex-row gap-3 mt-3">
            <twitter class=" cursor-pointer" />
            <linkedin class="cursor-pointer"/>
            <internet class="cursor-pointer"/>
          </div>
        </div>

        <div class="bg-[#dad2de] w-full md:w-[30%]   h-72 rounded-xl flex flex-col items-center gap-4 px-10 py-4">
          <img :src="mike" alt="Michael Sahlu" class="rounded-full w-20 h-20 mt-3">
          <h1 class="font-bold text-[#481d5c]">Michael Sahlu</h1>
          <h2 class="text-sm text-[#481d5c]">Co-Founder and CEO</h2>
          <div class="flex flex-row gap-3 mt-3">
          <twitter class=" cursor-pointer" />
            <linkedin class="cursor-pointer"/>
            <internet class="cursor-pointer"/>
          </div>
        </div>

        <div class="bg-[#dad2de] w-full md:w-[30%]  h-72 rounded-xl flex flex-col items-center gap-4 px-10 py-4">
          <img :src="berek" alt="Bereket Abebe" class="rounded-full w-20 h-20 mt-3">
          <h1 class="font-bold text-[#481d5c]">Bereket Abebe</h1>
          <h2 class="text-sm text-[#481d5c]">Co-Founder and former CTO</h2>
          <div class="flex flex-row gap-3 mt-3">
            <twitter class=" cursor-pointer" />
            <linkedin class="cursor-pointer"/>
            <internet class="cursor-pointer"/>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap w-full   gap-4 mt-4 mr-10">
        <div class="bg-[#dad2de] w-full md:w-[30%]  h-72 rounded-xl flex flex-col items-center gap-4 px-10 py-4">
          <img :src="nat" alt="Natnael Yared" class="rounded-full w-20 h-20 mt-3">
          <h1 class="font-bold text-[#481d5c]">Natnael Yared</h1>
          <h2 class="text-sm text-[#481d5c]">Communication and Marketing Manager</h2>
          <div class="flex flex-row gap-3 mt-3">
           <twitter class=" cursor-pointer" />
            <linkedin class="cursor-pointer"/>
            <internet class="cursor-pointer"/>
          </div>
        </div>


        <div class="bg-[#dad2de] w-full md:w-[30%]  h-72 rounded-xl flex flex-col items-center gap-4 px-10 py-4">
          <img :src="derj" alt="Dereje Abishu" class="rounded-full w-20 h-20 mt-3">
          <h1 class="font-bold text-[#481d5c]">Dereje Abishu</h1>
          <h2 class="text-sm text-[#481d5c]">CFO</h2>
          <div class="flex flex-row gap-3 mt-3">
           <twitter class=" cursor-pointer" />
            <linkedin class="cursor-pointer"/>
            <internet class="cursor-pointer"/>
          </div>
        </div>

        <div class="bg-[#dad2de] w-full md:w-[30%]  h-72 rounded-xl flex flex-col items-center gap-4 px-10 py-4 ">
          <img :src="muse" alt="Mussie Teshome" class="rounded-full w-20 h-20 mt-3">
          <h1 class="font-bold text-[#481d5c]">Mussie Teshome</h1>
          <h2 class="text-sm text-[#481d5c]">Full Stack Developer</h2>
          <div class="flex flex-row gap-3 mt-5">
            <linkedin class="cursor-pointer"/>
            <internet class="cursor-pointer"/>
          </div>
        </div>
      </div>




      <div class="text-start mt-8 py-6">
        <button class="text-indigo-700 hover:underline">More team members</button>
      </div>


      



    </div>
    <div class="flex flex-col md:hidden">
        <div class="flex flex-row w-full gap-4">
         
         <div class="bg-gray-400 w-full md:w-[45%] lg:w-[30%] h-64 rounded-xl flex flex-col items-center gap-1 px-10 py-4">
          <img :src="kal" alt="Kaleab Mezgebu" class="rounded-full w-20 h-20 mt-3">
          <h1 class="font-bold">KALEAB MEZGEBU</h1>
          <h2 class="text-sm">Co-Founder and COO</h2>
          <div class="flex flex-row gap-4">
             <twitter class=" cursor-pointer" />
            <linkedin class="cursor-pointer"/>
            <internet class="cursor-pointer"/>
          </div>
        </div>
<div class="bg-gray-400 w-full md:w-[45%] lg:w-[30%] h-64 rounded-xl flex flex-col items-center gap-1 px-10 py-4">
          <img :src="mike" alt="Michael Sahlu" class="rounded-full w-20 h-20 mt-3">
          <h1 class="font-bold">Michael Sahlu</h1>
          <h2 class="text-sm">Co-Founder and CEO</h2>
          <div class="flex flex-row gap-2">
             <twitter class=" cursor-pointer" />
            <linkedin class="cursor-pointer"/>
            <internet class="cursor-pointer"/>
            <internet />
          </div>
        </div>
      
        
      </div>
       <div class="flex flex-row w-full mt-5 gap-4">

            <div class="bg-gray-400 w-full md:w-[45%] lg:w-[30%] h-64 rounded-xl flex flex-col items-center gap-1 px-10 py-4">
          <img :src="berek" alt="Bereket Abebe" class="rounded-full w-20 h-20 mt-3">
          <h1 class="font-bold">Bereket Abebe</h1>
          <h2 class="text-sm">Co-Founder and former CTO</h2>
          <div class="flex flex-row gap-2">
             <twitter class=" cursor-pointer" />
            <linkedin class="cursor-pointer"/>
            <internet class="cursor-pointer"/>
          </div>
        </div>
        <div class="bg-gray-400 w-full md:w-[45%] lg:w-[30%] h-64 rounded-xl flex flex-col items-center gap-1 px-10 py-4">
          <img :src="nat" alt="Natnael Yared" class="rounded-full w-20 h-20 mt-3">
          <h1 class="font-bold">Natnael Yared</h1>
          <h2 class="text-sm">Communication and Marketing Manager</h2>
          <div class="flex flex-row gap-4">
             <twitter class=" cursor-pointer" />
            <linkedin class="cursor-pointer"/>
            <internet class="cursor-pointer"/>
          </div>
        </div>

       </div>
       <div class="flex flex-row w-full mt-5 gap-4">
         <div class="bg-gray-400 w-full md:w-[45%] lg:w-[30%] h-64 rounded-xl flex flex-col items-center gap-1 px-10 py-4">
          <img :src="derj" alt="Dereje Abishu" class="rounded-full w-20 h-20 mt-3">
          <h1 class="font-bold">Dereje Abishu</h1>
          <h2 class="text-sm">CFO</h2>
          <div class="flex flex-row gap-2">
            <twitter class=" cursor-pointer" />
            <linkedin class="cursor-pointer"/>
            <internet class="cursor-pointer"/>
          </div>
        </div>
           <div class="bg-gray-400 w-full md:w-[45%] lg:w-[30%] h-64 rounded-xl flex flex-col items-center gap-1 px-10 py-4">
          <img :src="muse" alt="Mussie Teshome" class="rounded-full w-20 h-20 mt-3">
          <h1 class="font-bold">Mussie Teshome</h1>
          <h2 class="text-sm">Full Stack Developer</h2>
          <div class="flex flex-row gap-2">
             <linkedin class="cursor-pointer"/>
            <internet class="cursor-pointer"/>
          </div>
        </div>

        </div>
    </div>

  </section>  
                    <!-- projects -->
<section id="projects" class="px-4 md:px-20 w-full md:pt-40 pt-32 bg-[#ffffff]">
    <div class="mb-12 justify-start">
      <h1 class="font-bold text-3xl md:text-6xl">Projects</h1>
      <p class=" md:text-lg text-slate-600 mt-4 p-4 rounded-md">
        Below are some of our notable products and projects. We have successfully developed and delivered multiple projects. Among others, below are some of our large-scale engagements and products currently serving our clients and users.
      </p>
    </div>

    <div class="flex flex-col gap-10">
      <div class="flex flex-col mt-20 md:flex-row bg-[#dad2de]  p-14 mr-10 md:p-6 rounded-lg shadow-md hover:shadow-lg"   @mouseover="handleMousehover(1)" 
        @mouseleave="handleMouseleave">
        <img :src="hahu" alt="Hahu Jobs Image" class="w-full md:w-1/3 h-52 md:h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-6">
        <div class="flex flex-col justify-between w-full">
          <div class="w-full">
            <h2 class="text-xl md:text-3xl font-bold text-indigo-700">Hahu Jobs</h2>
            <p class="text-slate-600 mt-4 text-sm md:text-lg w-full">
                  HaHuJobs a cloud services operating to capture structured data of the Ethiopian skilled and non-skilled labor market through digitally connecting thousands of job seekers in major Ethiopian cities as well as industrial parks. The platform in a collection of micro services groped to compose web application modules that offer a set of functionalities. HaHuJobs is an electronic product sold as service to a category of clients as per their specific needs in the labor market of Ethiopia. It features various service categories which revolves around data driven job matching of the right candidate with the right             </p>
          </div>
          <div class="flex justify-end mt-4">
             <button v-if="mousehover === 1" class="text-violet-700 py-2 px-4 rounded-lg transition duration-300">
              Explore more
            </button>
          </div>
        </div>
      </div>

      <div @mouseover="handleMousehover(2)" 
        @mouseleave="handleMouseleave" class="flex flex-col mt-20 md:flex-row bg-[#dad2de]  p-14 mr-10 md:p-6 rounded-lg shadow-md hover:shadow-lg ">
        <img :src="minab3" alt="Minab BMS Image" class="w-full md:w-1/3 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-6">
        <div class="flex flex-col justify-between w-full">
          <div class="w-full">
            <h2 class="text-xl md:text-3xl font-bold text-indigo-700">Minab BMS</h2>
            <p class="text-slate-600 mt-4 text-sm md:text-base">
              Minab BMS is a rental management system designed to simplify building and property management activities. It supports multiple buildings, offering cloud, desktop, and mobile versions, and includes SMS notifications.
            </p>
          </div>
          <div class="flex justify-end mt-4">
             <button v-if="mousehover === 2" class="text-violet-700 py-2 px-4 rounded-lg transition duration-300">
              Explore more
            </button>
          </div>
        </div>
      </div>

      <div @mouseover="handleMousehover(3)" 
        @mouseleave="handleMouseleave" class="flex flex-col mt-20 md:flex-row bg-[#dad2de]  p-14 mr-10 md:p-6 rounded-lg shadow-md hover:shadow-lg">
        <img :src="minab4" alt="Minab MEAL Image" class="w-full md:w-1/3 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-6">
        <div class="flex flex-col justify-between w-full">
          <div class="w-full">
            <h2 class="text-xl md:text-3xl font-bold text-indigo-700">Minab Digital Data Management Tool</h2>
            <p class="text-slate-600 mt-4 text-sm md:text-base">
              Minab MEAL is a digital solution that automates project Monitoring, Evaluation, Accountability, and Learning (MEAL) processes, providing configurable forms and reporting tools for insightful data analysis.
            </p>
          </div>
          <div class="flex justify-end mt-4">
             <button v-if="mousehover === 3" class="text-violet-700 py-2 px-4 rounded-lg transition duration-300">
              Explore more
            </button>
          </div>
        </div>
      </div>

      <div class="text-center mt-6">
        <button class="text-violet-700 font-bold">More projects</button>
      </div>
    </div>

    <hr class=" w-screen bg-violet-700 h-2 p-0 ml-0 mr-0 mt-8">
  </section>

                     <!-- partners -->
   <section id="partners" class="mt-0 w-full pt-24 bg-[#e5e5e5]">
 <h1 class="font-bold text-center text-4xl md:text-7xl self-center">Partners & Clients</h1>

  <div  class="hidden md:flex flex-col">
    <div class="flex flex-wrap  gap-14 items-start px-6 mt-16">
      <img :src="yesra" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="giz" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="mercy" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="icas" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="world" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="dbc" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="first" alt="no image" class="w-24 h-12 object-contain giz">

    </div>

    <div class="flex flex-wrap  gap-14 mt-16 items-center giz">
      <img :src="oxford" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="eic" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="savechi" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="dain" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="master" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="snv" alt="no image" class="w-24 h-12 object-contain">
    </div>

    <div class="flex flex-wrap  items-center mt-16 gap-14 giz">
            <img :src="ukai" alt="no image" class="w-24 h-12 object-contain giz">

      <img :src="usi" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="dfid" alt="no image" class="w-24 h-12object-contain giz">
      <img :src="feder" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="hpr" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="ukai" alt="no image" class="w-24 h-12 object-contain giz">
      <img :src="sida" alt="no image" class="w-24 h-12 object-contain giz">
    </div>
  </div>

  <div class="md:hidden grid grid-cols-3 gap-x-6 gap-y-8 px-4 mt-5">
    <img :src="yesra" alt="no image" class="w-24 h-12 object-contain giz">
    <img :src="giz" alt="no image" class="w-24 h-12 object-contain giz">
    <img :src="mercy" alt="no image" class="w-24 h-12 object-contain giz">

    <img :src="icas" alt="no image" class="w-24 h-12object-contain giz">
    <img :src="world" alt="no image" class="w-24 h-12 object-contain giz">
    <img :src="dbc" alt="no image" class="w-24 h-12 object-contain giz">

    <img :src="ukai" alt="no image" class="w-24 h-12 object-contain giz">
    <img :src="oxford" alt="no image" class="w-24 h-12 object-contain giz">
    <img :src="eic" alt="no image" class="w-24 h-12 object-contain giz">

    <img :src="dain" alt="no image" class="w-24 h-12 object-contain giz">
    <img :src="master" alt="no image" class="w-24 h-12 object-contain giz">
    <img :src="snv" alt="no image" class="w-24 h-12object-contain giz">

    <img :src="first" alt="no image" class="w-24 h-12 object-contain giz">
    <img :src="usi" alt="no image" class="w-24 h-12 object-contain giz">
    <img :src="dfid" alt="no image" class="w-24 h-12 object-contain giz">

    <img :src="hpr" alt="no image" class="w-24 h-12 object-contain giz">
    <img :src="ukai" alt="no image" class="w-24 h-12 object-contain giz">
    <img :src="sida" alt="no image" class="w-24 h-12 object-contain giz">

    <img :src="sida" alt="no image" class="w-24 h-12 object-contain giz">
    <div></div>
    <div></div>
  </div>
   
</section>          
                       <!-- contacts -->

       <section id="contacts" class="mt-0 bg-[#e5e5e5] flex flex-col md:flex-row w-full min-h-screen[60rem] items-center pt-20">    
     <div class="ml-0 md:ml-20 p-10 h-[45rem] w-full md:w-1/2">
      <h1 class="flex text-5xl">Get</h1>
      <h1 class="flex text-5xl mt-7">in touch.</h1>
      <div class="flex flex-col gap-6">
         <div class="flex flex-row gap-3">
            <phone/>
            <p>+251118221001</p>
         </div>
           <div class="flex flex-row gap-3">
             <phone/>
            <p>+251118221002</p>
         </div>
           <div class="flex flex-row gap-3">
             <email/>
             <p>info@minabtech.com</p>
         </div>
           <div class="flex flex-col md:flex-row gap-3 ">
            <map/>
            <p>Addis Ababa, Ethiopia</p>
            <p>Bole, Behind DH-geda Tower, Afomi Building 3rd floor, Addis Ababa</p>

         </div>
          <div>
            <maps/>
          </div>
      </div>
     </div>
      <div class="md:mr-20 mr-1 bg-white shadow-lg rounded-lg md:h-[50rem] w-full md:w-[35rem] p-8 pr-16 mt-14 md:mt-16">
         <form class="flex flex-col space-y-6">
            <h1 class="text-center text-4xl lg:text-6xl text-indigo-900 font-semibold mb-4">Contact Us</h1>
            
            <div class="flex flex-col">
               <label for="name" class="text-gray-700 font-medium mb-2">Name</label>
               <input type="text" id="name" class="bg-gray-100 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full h-12 px-4" placeholder="Enter your name">
            </div>
            
            <div class="flex flex-col">
               <label for="phone" class="text-gray-700 font-medium mb-2">Phone Number</label>
               <input type="text" id="phone" class="bg-gray-100 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full h-12 px-4" placeholder="Enter your phone number">
            </div>

            <div class="flex flex-col">
               <label for="email" class="text-gray-700 font-medium mb-2">Email</label>
               <input type="email" id="email" class="bg-gray-100 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full h-12 px-4" placeholder="Enter your email">
            </div>

            <div class="flex flex-col">
               <label for="message" class="text-gray-700 font-medium mb-2">Message</label>
               <textarea id="message" rows="4" class="bg-gray-100 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full h-28 px-4 py-2" placeholder="Write your message"></textarea>
            </div>

            <div class="flex justify-end mt-4">
               <button type="submit" class="bg-indigo-900 text-white rounded-lg p-3 w-32 hover:bg-indigo-800 transition-all duration-300 shadow-md">Submit</button>
            </div>
         </form>
      </div>
    
</section>           
</main>     
  <Footer/>              
  
             
             
              
              
               
           </div>
           
           </template>
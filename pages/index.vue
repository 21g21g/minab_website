<script setup>
// import about from "../pages/about.vue"
// import contacts from "../pages/contacts.vue"
// import partners from "../pages/partners.vue"
// import projects from "../pages/projects.vue"
// import services from "../pages/services.vue"
// import teams from "../pages/teams.vue"
import minablogos from "../components/assets/images/minablogo.webp"
   definePageMeta({
   'layouts':"default"
 })
            </script>
            <template>
               <!-- <div class="flex flex-col w-full max-h-screen mt-0">  -->
                      <div class="flex flex-col mt-24 w-full bg-gray-400  h-96 gap-8">
                         <div class="flex justify-center w-full  items-center mt-10">
                        <img :src="minablogos" alt="there is no logos in this feild" class="w-72  object-cover">
                        </div>
                        <div class="flex flex-col w-full text-white justify-center items-center gap-2">
                          <h1 class="font-bold text-4xl">From the cloud to clients,</h1>
                         <h2 class="font-bold text-4xl">We have all the <span class="bg-white text-violet-700">answers.</span></h2>
                           </div>
                           <div class="text-center">
                            <button class="text-center bg-purple-700 text-white px-2 py-2 items-center w-36 rounded-lg">Let's discuss</button>
                          </div>
                 
                 </div>
               <!-- <about/>
               <services/>
               <teams/>
               <projects/>
               <partners/>
               <contacts/> -->
               
           <!-- </div> -->
           
           </template>
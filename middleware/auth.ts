export default defineNuxtRouteMiddleware((to,from)=>{

    const isAuthenticate=true;
    if(isAuthenticate){
        return navigateTo("/")
    }
})
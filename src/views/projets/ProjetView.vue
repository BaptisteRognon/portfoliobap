<template>
    <section class="md:h-screen h-fit bg-[#252C35]">
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">
         <div class="grid grid-cols-2 gap-4">
          <div class="col-span-2 md:text-[190px] text-6xl font-bebasneue text-white uppercase">Selected</div>
          <div class="col-span-2 md:text-[190px] text-6xl font-bebasneue text-white uppercase">
            <p>2020 - 2023</p>
          <div class="col-span-2 md:text-[190px] text-6xl font-bebasneue text-white uppercase">Works</div>
        </div>

          <div class="grid grid-rows-3 grid-flow-col">
  </div>
        </div>
        </div>

      </section>
      <section class="md:h-screen h-fit bg-[#6091DB]">
         <div class="grid grid-cols-3">
          <p class="text-white font-bebasneue uppercase">Selected</p>
          <p class="text-white font-bebasneue uppercase">01 - 05</p>
          <p class="text-white font-bebasneue uppercase">Works</p>
         </div>
         <div class="grid grid-cols-2">
          <div>
            <p class="text-center text-white">BRANDING / UX / UI DESIGN / DEVELOPMENT </p>
          <p class="text-center text-white md:text-9xl font-bebasneue text-xl uppercase">Ask Me</p>
         </div>
         <div>
          <RouterLink to="/askme">
          <img src="/public/images/AskMe.png" class="w-2/3">
          </RouterLink>         
        </div>
        </div> 
     </section>
      <section class="md:h-screen h-fit bg-[#262627] font-bebasneue">
         <div class="grid grid-cols-3 ">
          <p class="text-white uppercase">Selected</p>
          <p class="text-white uppercase">02 - 05</p>
          <p class="text-white uppercase">Works</p>
         </div>
         <div class="grid grid-cols-2">
          <div>
            <p class="text-center text-white">BRANDING / UX / UI DESIGN / DEVELOPMENT </p>
          <p class="text-center text-white md:text-9xl text-xl uppercase">BikeWork</p>
         </div>
         <div>
          <RouterLink to="/bikework">
          <img src="/public/images/BikeWork.png" class="w-2/3">
          </RouterLink>         
        </div>
        </div> 
     </section>
      <section class="md:h-screen h-fit bg-[#CEB146] font-bebasneue">
         <div class="grid grid-cols-3">
          <p class="text-white uppercase">Selected</p>
          <p class="text-white uppercase">03 - 05</p>
          <p class="text-white uppercase">Works</p>
         </div>
         <div class="grid grid-cols-2">
          <div>
            <p class="text-center text-white">BRANDING / UX / UI DESIGN / DEVELOPMENT </p>
          <p class="text-center text-white md:text-9xl text-xl uppercase">LYS</p>
         </div>
         <div>
          <RouterLink to="/lys">
          <img src="/public/images/Lys.png" class="w-2/3">         
        </RouterLink>
        </div>
        </div> 
     </section>
      <section class="md:h-screen h-fit bg-[#9640DA] font-bebasneue">
         <div class="grid grid-cols-3">
          <p class="text-white uppercase">Selected</p>
          <p class="text-white uppercase">04 - 05</p>
          <p class="text-white uppercase">Works</p>
         </div>
         <div class="grid grid-cols-2">
          <div>
            <p class="text-center text-white">BRANDING / UX / UI DESIGN / DEVELOPMENT </p>
          <p class="text-center text-white md:text-9xl text-xl uppercase ">Unified Champions</p>
         </div>
         <div>
          <RouterLink to="/unified_champions">
          <img src="/public/images/UnifiedChampions.png" class="w-2/3">         
        </RouterLink>
        </div>
        </div> 
     </section>
      <section class="md:h-screen h-fit bg-[#DB4929] font-bebasneue">
         <div class="flex gap-20">
          <p class="text-white uppercase">Selected</p>
          <p class="text-white uppercase">05 - 05</p>
          <p class="text-white uppercase">Works</p>
         </div>
         <div class="grid grid-cols-2">
          <div>
            <p class="text-center text-white">BRANDING / UX / UI DESIGN / DEVELOPMENT </p>
          <p class="text-center text-white md:text-9xl text-xl uppercase">Tik Tak</p>
         </div>
         <div>
          <RouterLink to="/tiktak">
          <img src="/public/images/TikTak.png" class="w-2/3">         
        </RouterLink>
        </div>
        </div> 
     </section>
  </template>
  
  <script>
import { RouterLink } from 'vue-router';

  
  export default {

    name: "App",
    components: { RouterLink },
  };
  </script>
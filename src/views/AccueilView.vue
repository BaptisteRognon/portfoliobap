<script>
import { RouterLink } from "vue-router"

import Footer from "../components/Footer.vue"


export default {
    name:"App",
    components: { RouterLink, Footer },
  data() {
    return {
      menuOuvert: false,
    }
  },
}
</script>

<template>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">

<div>
      <section class="md:h-fit h-fit bg-white">
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">
         <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="col-span-2 md:text-[300px] font-bebasneue text-6xl text-[#252C35] uppercase">ROGNON</div>
          <div class="col-span-2 md:text-[300px] font-bebasneue text-6xl text-[#252C35] uppercase">BAPTISTE</div>
          <div class="grid grid-rows-3 grid-flow-col text-3xl md:text-3xl  font-bebasneue">
    <div>ÉTUDIANT EN LICENCE BUT
MMI. JE SUIS SPÉCIALISÉ DANS  
LE DIGITAL DESIGN ET LE 
RÉFERENCEMENT. </div>
    <div>AVEC DES COMPÉTENCES EN 
CRÉATION D’INTERFACES 
UTILISATEUR UTILES.  </div>
    <div>FAITES DÉFILER POUR EXPLORER </div>
  </div>
  <div>
    
  </div>
        </div>
        </div>
        <div class="flex justify-center">
        <img src="/public/images/Bap.png" alt="" class="w-40 md:w-80">
      </div>
        <div class="flex justify-center gap-6 pt-7 pb-7 font-bebasneue">
<button class=" uppercase text-white pt-8 pb-8 pl-8 pr-8 border bg-bleu"> Mes projets</button>
<button class=" uppercase text-white pt-8 pb-8 pl-8 pr-8 border bg-bleu"> Mon CV</button>
</div>    
      </section>
   
      <section class=" h-fit bg-[#252C35]">
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">
         <div class="grid ">
          <div class="col-span-2 md:text-[190px] text-6xl font-bebasneue text-white uppercase">Outils</div>
          <div class="grid grid-cols-6">
          <img src="/public/images/outil/PremierePro.png" alt="">
          <img src="/public/images/resaux/indesign.png" alt="">
          <img src="/public/images/outil/photoshop.png" alt="">
          <img src="/public/images/outil/Illustrator.png" alt="">
          <img src="/public/images/outil/Audition.png" alt="">
          <img src="/public/images/outil/XD.png" alt="">
          <img src="/public/images/outil/Figma1.png" alt="">
          <img src="/public/images/outil/Canva.png" alt="">
          <img src="/public/images/outil/Analytics.png" alt="">
          <img src="/public/images/outil/Acrobat.png" alt="">
          <img src="/public/images/outil/Wordpress.png" alt="">
          <img src="/public/images/outil/VsCode.png" alt="">
</div></div>
        </div>

      </section>

     <section id="contact" class="md:h-screen h-fit bg-[#304866]">
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">
         <div class="grid grid-cols-3 gap-4 ">
          <div class="col-span-2 md:text-[190px] font-bebasneue text-6xl text-white uppercase">Contact</div>
          <div class="col-span-2 md:text-[190px] font-bebasneue text-6xl text-white uppercase">Me
            <div class="flex justify-center gap-6">
              <a href="https://www.facebook.com/baptiste.rognon.1">
            <img src="/public/images/resaux/Facebook.png" alt="">
          </a>
              <a href="https://instagram.com/baptiste.rognon?igshid=YmMyMTA2M2Y=">
            <img src="/public/images/resaux/instagram.png" alt="">
          </a>
              <a href="https://www.behance.net/baptisterognon">
            <img src="/public/images/resaux/behance.png" alt="">
          </a>
              <a href="https://www.linkedin.com/in/baptiste-rognon/ ">
            <img src="/public/images/resaux/linkedin.png" alt="">
          </a>
          </div>
          </div>
</div>
        </div>

      </section>
      <Footer />
</div>
</div>
<footer1 />
</template>
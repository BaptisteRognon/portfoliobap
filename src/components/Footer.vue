<script>

export default {
    components:{  },
}
</script>


<template>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css">


<footer class="bg-[#252C35] pt-10 sm:mt-10">
    <div>
        <RouterLink to="/">
        <Logo class=" w-24 h-24 ml-6" /></RouterLink>
    </div>
        <div class="max-w-6xl m-auto text-white flex flex-wrap justify-left">

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

                <div class="text-xs uppercase text-white font-bold mb-6">
                   Sitemap
                </div>
                 <RouterLink to="/" class="my-3 block text-white hover:text-gray-100 text-sm  font-light">
                    Home
                </RouterLink>
                 <RouterLink to="/" class="my-3 block text-white hover:text-gray-100 text-sm  font-light">
                    Logiciel
                 </RouterLink>
                 <RouterLink to="/" class="my-3 block text-white hover:text-gray-100 text-sm  font-normal ">
                    Contact
                 </RouterLink>
            </div>


            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

                <div class="text-xs uppercase text-white font-bold mb-6">
                   Socials
                </div>
                 <a href="lien" class="my-3 block text-white hover:text-gray-100 text-sm  font-light">
                    Instagram
                 </a>
                 <a href="lien" class="my-3 block text-white hover:text-gray-100 text-sm  font-light">
                    Facebook
                 </a>
                 <a href="lien" class="my-3 block text-white hover:text-gray-100 text-sm  font-light">
                    Linkedin
                 </a>
                 <a href="lien" class="my-3 block text-white hover:text-gray-100 text-sm  font-light">
                    Behance
                 </a>
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                <div class="text-xs uppercase text-white font-bold mb-6">
                   Projets
                </div>
                 <RouterLink to="/askme" class="my-3 block text-white hover:text-gray-100 text-sm  font-light">
                    Projet 1 - Askme
                </RouterLink>
                <RouterLink to="/askme" class="my-3 block text-white hover:text-gray-100 text-sm  font-light">
                    Projet 2 - Bikework
                </RouterLink>
                <RouterLink to="/askme" class="my-3 block text-white hover:text-gray-100 text-sm  font-light">
                    Projet 3 - Lys
                </RouterLink>
                <RouterLink to="/askme" class="my-3 block text-white hover:text-gray-100 text-sm  font-light">
                    Projet 4 - Unified Champion
                </RouterLink>
                <RouterLink to="/askme" class="my-3 block text-white hover:text-gray-100 text-sm  font-light">
                    Projet 5 - Tik Tak
                </RouterLink>
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              <RouterLink to="/mentions"><div class="text-xs uppercase text-white font-bold mb-6">
                    Legal Notice
                </div></RouterLink>
            </div>
  
        </div>


    <div class="pt-2">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="col-span-2 md:text-[300px] font-bebasneue text-6xl text-white uppercase">ROGNON</div>
          <div class="col-span-2 md:text-[300px] font-bebasneue text-6xl text-white uppercase">BAPTISTE</div>
          </div>
    </div>
</footer>
</template>

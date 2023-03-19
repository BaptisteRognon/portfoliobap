import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue';
import ProjetView from '../views/projets/ProjetView.vue';

import AskmeView from '../views/projets/AskmeView.vue';
import BikeworkView from '../views/projets/BikeworkView.vue';
import LysView from '../views/projets/LysView.vue';
import UnifiedChampionsView from '../views/projets/UnifiedChampionsView.vue';
import TiktakView from '../views/projets/TikTakView.vue';




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/mentions', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/projets', name: 'ProjetView', component: ProjetView },


    { path: '/askme', name: 'AskmeView', component: AskmeView },
    { path: '/bikework', name: 'BikeworkView', component: BikeworkView },
    { path: '/lys', name: 'LysView', component: LysView },
    { path: '/unified_champions', name: 'UnifiedChampionsView', component: UnifiedChampionsView },
    { path: '/tiktak', name: 'TiktakView', component: TiktakView },


 ]
})


export default router

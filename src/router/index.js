import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Buscador from '@/views/Buscador.vue'
import Luchadores from '@/views/Luchadores.vue'
import PeleadorId from '@/views/PeleadorId.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Buscador',
    name: Buscador,
    component: Buscador
  },
  {
    path: '/Luchadores',
    name: Luchadores,
    component: Luchadores
  },
  {
    path: '/Luchadores/:id',
    name: PeleadorId,
    component: PeleadorId
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

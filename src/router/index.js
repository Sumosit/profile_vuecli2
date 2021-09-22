import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AstroTitle2 from '../components/AstroTitle2/AstroTitle2'
import Animations from "../components/Animations/Animations";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/animations',
    name: 'Animations',
    component: Animations,
  },
  {
    path: '/astrotitle2',
    name: 'AstroTitle2',
    component: AstroTitle2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

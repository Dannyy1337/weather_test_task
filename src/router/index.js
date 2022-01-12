import Vue from 'vue'
import VueRouter from 'vue-router'
import CityPageCard from '../components/CityPageCard.vue'
import WeatherPage from '../components/WeatherPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WeatherPage',
    component: WeatherPage
  },
  {
    path: ':id',
    name: 'CityPageCard',
    component: CityPageCard
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

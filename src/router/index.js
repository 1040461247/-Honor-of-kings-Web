import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// router-lazy-load
const Main = () => import('../views/Main.vue')
const Home = () => import('../views/Home.vue')
const Strategy = () => import('../views/Strategy.vue')
const Competition = () => import('../views/Competition.vue')

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      { path: '/', name: 'Home', component: Home },
      { path: '/strategy', name: 'Strategy', component: Strategy },
      { path: '/competition', name: 'Competition', component: Competition }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

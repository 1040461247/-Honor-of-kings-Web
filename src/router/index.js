import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store/index'
Vue.use(VueRouter)

// router-lazy-load
const Main = () => import('../views/Main.vue')
const Home = () => import('../views/home/Home.vue')
const Strategy = () => import('../views/Strategy.vue')
const Competition = () => import('../views/Competition.vue')
const Article = () => import('../views/home/children/Article.vue')
const HeroesDetail = () => import('../views/home/children/HeroesDetail.vue')

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/', name: 'Home', component: Home },
      { path: '/strategy', name: 'Strategy', component: Strategy },
      { path: '/competition', name: 'Competition', component: Competition },
      { path: '/articles/:id', name: 'articles', component: Article, props: true },
      { path: '/hero/:id', name: 'hero', component: HeroesDetail, props: true }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导航守卫：跳转到"/hero"开头的路由时隐藏bar组件
router.beforeEach((to, from, next) => {
  const reg = /^\/hero\//
  if (reg.test(to.path)) {
    store.state.showBar = false
  } else {
    store.state.showBar = true
  }
  return next()
})

export default router

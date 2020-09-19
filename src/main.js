import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './http'
// 全局css样式
import 'assets/css/global.scss'

Vue.config.productionTip = false
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

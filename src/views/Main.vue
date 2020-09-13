<template>
  <div class="home">
    <topbar/>
    <navbar height="46px" fontSize='16px' :navList='navList'/>
    <router-view/>
  </div>
</template>

<script>
import Topbar from 'components/Topbar.vue'
import Navbar from 'components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Topbar,
    Navbar
  },
  data() {
    return {
      // navbar数据源
      navList: [
        { to: '/', text: '首页' },
        { to: '/strategy', text: '攻略中心' },
        { to: '/competition', text: '赛事中心' }
      ]
    }
  }
}
</script>

<style scoped>

</style>

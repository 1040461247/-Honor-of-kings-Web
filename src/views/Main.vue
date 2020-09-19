<template>
  <div class="home">
    <topbar class="topbar" v-if="showBar"/>
    <navbar class="navbar" v-if="showBar" height="46px" fontSize='16px' :navList='navList' fontColor="#ededed"/>
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
  },
  computed: {
    // 是否展示bar组件
    showBar() {
      return this.$store.state.showBar
    }
  }
}
</script>

<style scoped>
.topbar {
  position: sticky;
  top: 0;
  z-index: 9;
}
</style>

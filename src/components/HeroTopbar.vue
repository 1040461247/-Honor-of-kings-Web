<template>
  <div class="topbar bg-tobbar">
    <img class="logoImg" src="~assets/img/honor/logo.png">
    <div class="text-white title">王者荣耀</div>
    <div class="text-white title">攻略站</div>
    <router-link to="/" class="text-white more">更多英雄 ></router-link>
    <!-- <div class="text-white more">更多英雄 ></div> -->
  </div>
</template>

<script>
export default {
  name: 'HeroTopbar'
}
</script>

<style scoped>
  .logoImg {
    width: 35px;
    height: 35px;
    margin-left: 15px;
  }
  .topbar {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    line-height: 50px;
  }
  .topbar > .title:nth-child(3){
    flex: 1;
  }
  .title {
    font-size: 16px;
    margin-left: 15px;
  }
  .more {
    margin-right: 15px;
    height: 100%;
  }
</style>

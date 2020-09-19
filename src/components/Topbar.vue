<template>
  <div class="topbar bg-tobbar py-4 px-3 d-flex ai-center">
    <img class="logoImg" src="~assets/img/honor/logo.png">
    <div class="px-3 flex-1">
      <div class="text-white">王者荣耀</div>
      <div class="text-dark-1 fs-xs">团队成就更多</div>
    </div>
    <button class="btn bg-primary" type="button">立即下载</button>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style scoped>
  .logoImg {
    width: 35px;
    height: 35px;
  }
  .topbar {
    position: sticky;
    height: 55px;
  }
  .navbar {
    height: 46px;
    line-height: 46px;
  }
</style>

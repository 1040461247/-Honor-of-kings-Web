<template>
  <div class="navbar bg-primary" :style="getStyle">
    <div class="nav text-white">
      <div class="nav-item active">
        <div v-for="(item, index) in navList" :key="item.to" class="item" @click="activeIndex = index">
          <router-link :class="{activeItem: activeIndex === index}" :to="item.to">{{ item.text }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      activeIndex: 0
    }
  },
  props: {
    height: String, // navbar高度
    fontSize: String, // navbar元素字体大小
    navList: Array // navbar数据源，形式：[{to:xxx, text: xxx}]
  },
  computed: {
    getStyle() {
      return `height: ${this.height}; line-height: ${this.height}; font-size:${this.fontSize}`
    }
  }
}
</script>

<style scoped>
.nav-item {
  display: flex;
  justify-content: space-around;
}
.activeItem {
  padding-bottom: 3px;
  border-bottom: 2px solid #fff;
  height: 40px;
}
.item {
  flex: 1;
  text-align: center;
}
</style>

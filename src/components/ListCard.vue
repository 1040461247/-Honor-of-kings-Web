<template>
  <div class="list-card">
    <div class="card">
      <div class="card-header">
        <slot name="icon" class="header-icon"/>
        <span slot="title" class="header-title">{{ title }}</span>
        <slot name='more' class="header-more"/>
      </div>
      <div class="card-content">
        <div class="nav active">
          <div v-for="(item, index) in navList" :key="index" class="nav-item" @click="activeIndex = index; $refs.swiper.$swiper.slideTo(index)">
            <span :class="{activeItem: activeIndex === index}" to="/">{{ item.name }}</span>
          </div>
        </div>
        <div class="content">
          <swiper ref="swiper" @slide-change='handleSlide' :options="{autoHeight: true}">
            <swiper-slide v-for="(item1, index1) in navList" :key="index1">
              <slot name="items" :category="item1"></slot>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import Swiper2, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
Swiper2.use([Navigation, Pagination])

export default {
  name: 'ListCard',
  components: {
    Swiper,
    SwiperSlide,
    directive,
    Swiper2,
    Navigation,
    Pagination
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    handleSlide() {
      this.activeIndex = this.$refs.swiper.$swiper.realIndex
    }
  },
  props: {
    navList: Array, // navbar数据源
    title: String // 标题
  }
}
</script>

<style scoped>
  .card {
    background: #fff;
    margin-top: 18px;
    width: 100%;
  }
  .card-header {
    display: flex;
    height: 55px;
    align-items: center;
    font-size: 18px;
    border-bottom: 1px solid #d4d9de;
    margin: 0 16px;
  }
  .content {
    margin: 0 16px;
  }
  .header-icon {
    margin-right: 8px;
  }
  .header-title {
    flex: 1;
  }
  .card-content {
    color: #000 !important;
  }
  .news {
   background-color: #fff;
   margin-top: 14px;
 }
 .nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
}
.activeItem {
  padding-bottom: 3px;
  border-bottom: 2px solid #db9e3f;
  height: 40px;
  color: #db9e3f !important;
  /* line-height: 40px; */
}
.item {
  flex: 1;
  text-align: center;
}
</style>

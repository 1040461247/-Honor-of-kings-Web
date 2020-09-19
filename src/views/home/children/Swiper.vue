<template>
  <div class="home-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="~assets/img/honor/homeSwiper/1.jpg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="~assets/img/honor/homeSwiper/2.jpg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="~assets/img/honor/homeSwiper/3.png">
      </swiper-slide>
      <div class="swiper-pagination text-right" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// swiper
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import Swiper2, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
Swiper2.use([Navigation, Pagination])

export default {
  name: 'HomeSwiper',
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
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style scoped lang='less'>
  .swiper-container/deep/.swiper-pagination-bullet{
    background:#fff;
    height:10px;
    width:10px;
    opacity:1;
  }
  .swiper-container/deep/.swiper-pagination-bullet-active{
    background-color:#4b67af;
  }
  .text-right {
    text-align: right;
    padding-right: 10px;
  }
</style>

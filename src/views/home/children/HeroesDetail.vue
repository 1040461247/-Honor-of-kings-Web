<template>
  <div class="heroes-detail" v-if="model">
    <topbar/>
    <div class="top" :style="{'background-image': `url(${model.banner})`}">
      <div class="clarity">
          <div class="info text-white">
          <div>{{ model.title }}</div>
          <div class="heroName">{{ model.name }}</div>
          <div>{{ getCategries }}</div>
          <div class="scores">
            <span>难度</span>
            <span class="badge bg-primary">{{ model.scores.defficult }}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{ model.scores.skills }}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{ model.scores.attack }}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{ model.scores.survive }}</span>
          </div>
        </div>
        <div class="skin">皮肤：2 ></div>
      </div>
    </div>
    <!-- end of top -->
    <div class="hero-mdoel1">
      <div class="nav active">
        <div v-for="(item, index) in navList" :key="index" class="nav-item" @click="activeIndex = index; $refs.swiper.$swiper.slideTo(index)">
          <span :class="{activeItem: activeIndex === index}">{{ item }}</span>
        </div>
      </div>
      <div class="content">
        <swiper ref="swiper" @slide-change='handleSlide' :options="{autoHeight: true}">
          <swiper-slide>
            <div class="page1-topBtn">
              <div class="btn1">
                <i class="btn1-icon"/>
                <span>英雄介绍视频</span>
              </div>
              <div class="btn2">
                <i class="btn2-icon"/>
                <span>一图识英雄</span>
              </div>
            </div>
            <div class="skills">
              <div class="skills-icon">
                <img :class="{activeStyle: index === activeSkill}" :src="item.icon" v-for="(item, index) in model.skills" :key="item._id" @click="activeSkill = index">
              </div>
              <div class="skills-info">
                <div class="skills-title">
                  <span class="title-left">{{ getSkill.name }}</span>
                  <span class="title-right">(冷却值：{{getSkill.delay}} 消耗：{{ getSkill.cost }})</span>
                </div>
                <div class="skills-content">
                  {{ getSkill.description }}
                </div>
              </div>
              <div class="skills-tips">
                <p>小提示：{{ getSkill.tips }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="hero-model2">
      <card class="menu1">
        <i slot="icon" class="title-icon"/>
        <div slot="title" class="title">出装推荐</div>
        <div slot="content">
          <div class="item1">
            <div class="item1-title">顺风出装</div>
            <div class="item-wrapper">
              <div class="item1-item" v-for="item in model.items1" :key="item.name">
                <img :src="item.icon">
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
          <div class="item2">
            <div class="item2-title">逆风出装</div>
            <div class="item-wrapper">
              <div class="item1-item" v-for="item in model.items2" :key="item.name">
                <img :src="item.icon">
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </card>
    </div>
    <card class="menu2">
      <i slot="icon" class="title-icon"/>
      <div slot="title" class="title">使用技巧</div>
      <div slot="content">{{ model.usageTips }}</div>
    </card>
    <card class="menu2">
      <i slot="icon" class="title-icon"/>
      <div slot="title" class="title">对抗技巧</div>
      <div slot="content">{{ model.battleTips }}</div>
    </card>
    <card class="menu2">
      <i slot="icon" class="title-icon"/>
      <div slot="title" class="title">团战思路</div>
      <div slot="content">{{ model.teamTips }}</div>
    </card>
    <card class="menu2">
      <i slot="icon" class="title-icon"/>
      <div slot="title" class="title">英雄关系</div>
      <div slot="content">
        <div class="zjdd">
          <div class="item2-title">最佳搭档</div>
          <div class="zjdd-item d-flex" v-for="item in model.partners" :key="item.name">
            <img style="margin-right: 10px;" :src="item.hero.icon" height="53">
            <div class="flex-1">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Topbar from 'components/HeroTopbar'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import Swiper2, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import Card from 'components/Card'
Swiper2.use([Navigation, Pagination])

export default {
  name: 'deroes-detail',
  components: {
    Topbar,
    Swiper,
    SwiperSlide,
    directive,
    Swiper2,
    Navigation,
    Pagination,
    Card
  },
  data() {
    return {
      model: null,
      navList: ['英雄初识', '进阶攻略'],
      activeIndex: 0,
      activeSkill: 0
    }
  },
  props: {
    id: null
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/hero/${this.id}`)
      console.log(res.data)
      this.model = res.data
    },
    handleSlide() {
      this.activeIndex = this.$refs.swiper.$swiper.realIndex
    }
  },
  computed: {
    getCategries() {
      return this.model.categories.filter(item => {
        return item !== '热门'
      }).join('/')
    },
    // 根据当前选中技能，得到当前技能信息
    getSkill() {
      return this.model.skills[this.activeSkill]
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style scoped>
  .top {
    height: 45vw;
    background: #fff no-repeat top center;
    background-size: 100% auto;
    position: relative;
  }
  .badge {
    display: inline-block;
    width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    border-radius: 50%;
    border: 1px #fff solid;
    font-size: 8px;
    margin: 0 4px;
  }
  .bg-primary {
    background-color: #805300;
  }
  .bg-blue-1 {
    background-color: #1e3594;
  }
  .bg-danger {
    background-color: #781915;
  }
  .bg-dark {
    background-color: #35352e;
  }
  .info {
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 14px;
  }
  .heroName {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }
  .skin {
    position: absolute;
    right: 20px;
    color: #fff;
    bottom: 20px;
  }
  .clarity {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
  }
   .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    font-size: 16px;
    cursor: pointer;
    border-bottom: 1px solid #e9ecee;
    margin: 0 14px;
  }
  .activeItem {
    padding-bottom: 3px;
    border-bottom: 2px solid #db9e3f;
    height: 40px;
    color: #db9e3f !important;
    /* line-height: 40px; */
  }
  .hero-mdoel1 {
    background: #fff;
  }
  .page1-topBtn {
    display: flex;
    justify-content: space-evenly;
  }
  .btn1, .btn2 {
    background: #fcfcfc;
    border: 1px  #e9ecee solid;
    height: 42px;
    flex: 1;
    border-radius: .5rem;
    line-height: 42px;
    text-align: center;
    cursor: pointer;
  }
  .btn1 {
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn1-icon {
    display: inline-block;
    background: url('~assets/img/honor/play.png') no-repeat -1px -1px;
    background-size: 24px 24px;
    width: 22px;
    height: 22px;
    margin-right: 6px;
  }
  .btn2-icon {
    display: inline-block;
    background: url('~assets/img/honor/icon-img.png') no-repeat -5px -5px;
    background-size: 34px 34px;
    width: 24px;
    height: 24px;
    margin-right: 6px;
  }
  .content {
    margin: 10px 14px;
  }
  .skills-icon {
    margin: 20px 0;
    display: flex;
    justify-content: space-evenly;
  }
  .skills-icon img {
    width: 70px;
  }
  .activeStyle {
    border: 3px solid #d59b40;
    padding: 1px;
    border-radius: 50%;
  }
  .title-left {
    font-size: 18px;
    font-weight: 600;
  }
  .title-right {
    color: #7a7a80;
    margin-left: 30px;
  }
  .skills-title {
    margin-bottom: 20px;
  }
  .skills-content {
    font-size: 16px;
    line-height: 26px;
    padding-bottom: 10px;
  }
  .title-icon {
    background: url('~assets/img/honor/icon_11.png') no-repeat 0 0;
    background-size: 13px 13px;
    width: 13px;
    height: 13px;
    margin-right: 5px;
  }
  .title {
    font-weight: 600;
    font-size: 20px;
  }
  .skills-info {
    border-bottom: 1px solid #dfe2e6;
  }
  .skills-tips {
    color: #78797a;
  }
  .menu2 {
    margin-top: 10px;
    font-size: 16px;
    line-height: 26px;
  }
  .item1 img, .item2 img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
  .item1-item {
    width: 60px;
    height: 100%;
    font-size: 12px;
    text-align: center;
  }
  .item-wrapper {
    display: flex;
    justify-content: space-evenly;
  }
  .item1 {
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #dfe2e6;
  }
  .item1-title, .item2-title {
    color: #343440;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .zjdd-item {
    height: auto;
    margin-bottom: 20px;
    line-height: 22px;
  }
  .zjdd {
    border-bottom: 1px solid #dfe2e6;
  }
</style>

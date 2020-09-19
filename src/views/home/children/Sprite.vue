<template>
  <div class="home-sprite">
    <div class="nav-icons" :class="{packUp: isPackUp}">
      <div class="nav-item" v-for="item in navList" :key="item.class" @click="handleClike(item.href)">
        <i :class="[ item.class, 'sprite' ]"></i>
        <div>{{ item.title }}</div>
      </div>
    </div>
    <div :class="{'pack-up': !isPackUp, 'spread': isPackUp}" @click="handlePackUp">
      <i :class="{'pack-up-icon': !isPackUp, 'spread-icon': isPackUp}"/>
      <span>{{ isPackUp ? '展开' : '收起' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sprite',
  data() {
    return {
      navList: [
        { class: 'nav1', title: '爆料站' },
        { class: 'nav2', title: '故事站' },
        { class: 'nav3', title: '周边商城' },
        { class: 'nav4', title: '体验服' },
        { class: 'nav5', title: '新人专区' },
        { class: 'nav6', title: '荣耀·传承' },
        { class: 'nav7', title: '王者营地' },
        { class: 'nav8', title: '公众号' },
        { class: 'nav9', title: '版本介绍' },
        { class: 'nav10', title: '对局环境' },
        { class: 'nav11', title: '王者无限团' },
        { class: 'nav12', title: '创意互动营' }
      ],
      isPackUp: false
    }
  },
  methods: {
    // 执行点击操作
    handleClike(href) {
      console.log(href)
    },
    // 收起nav
    handlePackUp() {
      this.isPackUp = !this.isPackUp
    }
  }
}
</script>

<style lang='scss' scoped>
  .packUp {
    height: 70px;
    overflow: hidden;
  }
  .nav-icons {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    margin-top: 12px;
    text-align: center;
    .nav-item {
      width: 25%;
      margin: 15px 0;
      border-right: #d4d9de solid 1px;
    }
  }
  .sprite {
    display: inline-block;
  }
  .nav1 {
    background: url('~assets/img/honor/index.png') no-repeat 63.546% 15.517%;
    background-size: 375px 455px;
    width: 23px;
    height: 24px;
  }
  .nav2 {
    background: url('~assets/img/honor/index.png') no-repeat 90.483% 15.614%;
    background-size: 375px 455px;
    width: 23px;
    height: 24px;
  }
  .nav3 {
    background: url('~assets/img/honor/index.png') no-repeat 36.746% 0.924%;
    background-size: 375px 455px;
    width: 23px;
    height: 24px;
  }
  .nav4 {
    background: url('~assets/img/honor/index.png') no-repeat 10.408% 15.517%;
    background-size: 375px 455px;
    width: 23px;
    height: 24px;
  }
  .nav5 {
    background: url('~assets/img/honor/index.png') no-repeat 89.733% 1.266%;
    background-size: 375px 455px;
    width: 20px;
    height: 24px;
  }
  .nav6 {
    background: url('~assets/img/honor/index.png') no-repeat 36.467% 15.287%;
    background-size: 375px 455px;
    width: 24px;
    height: 24px;
  }
  .nav7 {
    background: url('~assets/img/honor/index.png') no-repeat 63.3% 0.927%;
    background-size: 375px 455px;
    width: 24px;
    height: 24px;
  }
  .nav8 {
    background: url('~assets/img/honor/index.png') no-repeat 0 96.207%;
    background-size: 375px 455px;
    width: 24px;
    height: 24px;
  }
  .nav9 {
    background: url('~assets/img/honor/version-icon.png') no-repeat 33.333% 33.333%;
    background-size: 25px 25px;
    width: 24px;
    height: 24px;
  }
  .nav10 {
    background: url('~assets/img/honor/djhj.png') no-repeat 0 0;
    background-size: 34px 21px;
    width: 34px;
    height: 24px;
  }
  .nav11 {
    background: url('~assets/img/honor/wxwzt.png') no-repeat 0 0;
    background-size: 64px 17px;
    width: 64px;
    height: 24px;
  }
  .nav12 {
    background: url('~assets/img/honor/cyhdy.png') no-repeat 50% 50%;
    background-size: 30px 30px;
    width: 42px;
    height: 24px;
  }
  .pack-up {
    background-color: #f9f9f9;
    padding: 10px 0;
    text-align: center;
  }
  .pack-up-icon {
    display: inline-block;
    background: url('~assets/img/honor/index.png') no-repeat 38.577% 52.076%;
    background-size: 375px 455px;
    width: 10px;
    height: 10px;
    margin-right: 4px;
  }
  .spread {
    background-color: #f9f9f9;
    padding: 10px 0;
    text-align: center;
  }
  .spread-icon {
    display: inline-block;
    background: url('~assets/img/honor/index.png') no-repeat 38.577% 52.076%;
    background-size: 375px 455px;
    width: 10px;
    height: 10px;
    margin-right: 4px;
    transform: rotate(180deg);
  }
</style>

<template>
  <div class="article" v-if="articleInfo">
    <div class="title">
      <div class="backbg-wrapper" @click="$router.back()">
        <i class="backBg"/>
      </div>
      <span style="color: #4394e4; font-size: 16px; flex: 1; font-weight: 700;" class="text-ellipsis">{{ articleInfo.title }}</span>
      <span style="color: #9fa0a0; margin-right: 12px;">{{ articleInfo.date | date }}</span>
    </div>
    <div class="content" v-html="articleInfo.content"/>
    <div class="resemble">
      <div class="resemble-title">
        <i class="title-icon"/>
        <span>相关资讯</span>
      </div>
      <div class="resemble-content">
        <div class="content-item" v-for="item in resemble" :key="item._id" @click="handleItem(item)">
          <span class="text-ellipsis item-title">{{ item.title }}</span>
          <span class="item-date">{{ item.date | date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'Article',
  data() {
    return {
      articleInfo: null,
      resemble: null
    }
  },
  props: {
    id: null
  },
  methods: {
    async getArticlesInfo() {
      const res = await this.$http.get(`/articles/${this.id}`)
      this.articleInfo = res.data
    },
    async getResemble() {
      const res = await this.$http.get(`/articles/resemble/${this.id}`)
      console.log(this.resemble)
      this.resemble = res.data
    },
    handleItem(itemInfo) {
      this.$router.replace(`/articles/${itemInfo._id}`)
    }
  },
  watch: {
    id: 'getArticlesInfo'
  },
  filters: {
    date(val) {
      return dayjs(val).format('YYYY-MM-DD')
    }
  },
  created() {
    this.getArticlesInfo()
    this.getResemble()
  }
}
</script>

<style scoped>
.title {
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d3d3d4;
}
.backBg {
  background: url('~assets/img/honor/backBg.png') no-repeat 0 0;
  background-size: 8px 14px;
  width: 8px;
  height: 14px;
  margin: 0 12px;
  float: inline-end;
}
.backbg-wrapper {
  height: 100%;
  padding-top: 3%;
}
.content >>> img {
  max-width: 100%;
}
.content {
  margin: 0 20px;
}
.resemble {
  margin: 20px;
}
.title-icon {
  background: url('~assets/img/honor/lin.png') no-repeat 0 0;
  width: 24px;
  height: 24px;
  float: inline-start;
  margin-right: 10px;
}
.resemble-title {
  display: flex;
  align-items: center;
  color: #4394e4;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 20px;
}
.content-item {
  display: flex;
  justify-content:space-between;
}
.item-title {
  flex: 1;
  margin-right: 10px;
  font-size: 16px;
  margin-bottom: 10px;
}
.item-date {
  color: #9fa0a0;
  font-size: 12px;
}
</style>

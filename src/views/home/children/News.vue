<template>
  <div class="news">
    <list-card title='新闻资讯' :navList='navList'>
      <i slot="icon" class="header-icon"/>
      <i slot="more" class="header-more"/>
      <template #items='{category}'>
        <div v-for="(listItem, i) in category.children" :key="i" class="py-2 fs-lg d-flex lineInfo" @click="handleClick(listItem)">
          <span class="text-info">[{{ category.name }}]</span>
          <span class="px-2 text-info">|</span>
          <span class="flex-1 text-dark text-ellipsis pr-2">{{ listItem.title }}</span>
          <span class="date">{{ listItem.date | date }}</span>
        </div>
      </template>
    </list-card>
  </div>
</template>

<script>
import ListCard from 'components/ListCard.vue'
import dayjs from 'dayjs'

export default {
  name: 'news',
  components: {
    ListCard
  },
  data() {
    return {
      navList: []
    }
  },
  methods: {
    async getNavList() {
      const res = await this.$http.get('/home/news')
      this.navList = res.data
    },
    handleClick(itemInfo) {
      this.$router.push(`/articles/${itemInfo._id}`, itemInfo)
    }
  },
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  created() {
    this.getNavList()
  }
}
</script>

<style scoped>
  .header-icon {
    background: url('~assets/img/honor/index.png') no-repeat 0.138% 50.452%;
    background-size: 375px 455px;
    width: 13px;
    height: 13px;
  }
  .header-more {
    background: url('~assets/img/honor/index.png') no-repeat 47.619% 56.305%;
    background-size: 375px 455px;
    width: 18px;
    height: 3px;
  }
  .lineInfo {
    font-size: 16px;
    margin-bottom: 18px;
  }
  .date {
    color: #777788;
    font-size: 14px;
  }
</style>

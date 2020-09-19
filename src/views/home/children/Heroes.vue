<template>
  <div class="home-heroes">
    <list-card title='英雄列表' :navList='navList'>
      <i slot="icon" class="header-icon"/>
      <i slot="more" class="header-more"/>
      <template #items='{category}'>
        <div class="d-flex flex-wrap wrapper">
          <div v-for="(listItem, i) in category.children" :key="i" class="heroesItem" @click="handleItem(listItem)">
            <img :src="listItem.icon" class="heroIcon">
            <div>{{ listItem.name }}</div>
          </div>
        </div>
      </template>
    </list-card>
  </div>
</template>

<script>
import ListCard from 'components/ListCard.vue'

export default {
  name: 'home-heroes',
  components: {
    ListCard
  },
  data() {
    return {
      navList: []
    }
  },
  methods: {
    async getList() {
      const res = await this.$http.get('/home/heroes')
      this.navList = res.data
    },
    handleItem(itemInfo) {
      this.$router.push(`/hero/${itemInfo._id}`)
    }
  },
  created() {
    this.getList()
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
  .heroIcon {
    width: 100%;
  }
  .heroesItem {
    padding: 0 10px 10px 0;
    text-align: center;
    width: 20%;
  }
  .wrapper {
    flex-wrap: wrap;
  }
</style>

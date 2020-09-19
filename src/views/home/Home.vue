<template>
  <div class="home">
    <swiper/>
    <sprite/>
    <news/>
    <heroes/>
  </div>
</template>

<script>
import Swiper from './children/Swiper'
import Sprite from './children/Sprite'
import News from './children/News'
import Heroes from './children/Heroes'

export default {
  name: 'Home',
  components: {
    Swiper,
    Sprite,
    News,
    Heroes
  }
}
</script>

<style scoped lang="scss">

</style>

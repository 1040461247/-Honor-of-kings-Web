<template>
  <div class="card">
    <div class="card-header">
      <slot name="icon" class="header-icon"/>
      <slot name='title' class="header-title"/>
      <slot name='more' class="header-more"/>
    </div>
    <div class="card-content">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card'
}
</script>

<style>
  .card {
    background: #fff;
    padding: 0 18px 16px 18px;
  }
  .card-header {
    display: flex;
    height: 55px;
    align-items: center;
    font-size: 18px;
  }
  .header-icon {
    margin-right: 18px;
  }
  .header-title {
    flex: 1;
  }
  .card-content {
    color: #000 !important;
  }
</style>

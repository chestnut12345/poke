<template>
  <div class="left-container">
    <info-view></info-view>
  </div>
</template>

<script>
import InfoView from '../components/InfoView.vue'
export default {
  name: 'LeftView',
  components: {
    InfoView
  }
}
</script>

<style lang="less" scoped>
.left-container{
  padding: 10px;
}
</style>

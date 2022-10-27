<template>
  <div class="app-container">
    <!-- 左侧宝可梦列表 -->
    <div class="left">
      <left-view></left-view>
    </div>
    <!-- 右侧展示详细信息 -->
    <div class="right">
      <!-- 占位符 -->
      <router-view>
      <template>
          <right-view></right-view>
      </template>
    </router-view>
    </div>
  </div>
</template>

<script>
import LeftView from './views/LeftView.vue'
import RightView from './views/RightView.vue'
export default {
  name: 'App',
  components: {
    LeftView, RightView
  }
}
</script>

<style lang="less" scoped>
.app-container{
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items:baseline;
  border-top: 4px solid orangered;
  .left{
    height: 685px;
    overflow-y: auto;
    flex: 1;
  }
  .left::-webkit-scrollbar{
    display: none;
  }
  .right{
    flex: 1;
    img{
      width: 50%;
      position: absolute;
      right: 0;
    }
  }
}
</style>

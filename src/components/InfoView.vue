<template>
  <div class="info-container table-responsive">
    <!-- input -->
    <input type="text" class="form-control" placeholder="Search for ID" v-model.number.lazy="mount" @change="mount=Math.trunc(mount)">

  <!-- Table -->
  <table class="table table-hover">
    <thead>
      <th>ID</th>
      <th>Name</th>
      <th>Type</th>
    </thead>
    <tbody>
      <tr
v-for="items in lists" :key="items.id"
      @click="Send(items.id)">
          <td>{{items.id}}</td>
          <td>{{items.name}}</td>
          <td v-if="items.types.length===1">{{items.types[0].type.name}}</td>
          <td v-if="items.types.length===2">
          {{items.types[0].type.name}}
          <span>/</span>
          {{items.types[1].type.name}}
          </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
import request from '../utils/request'
import bus from '../eventbus'

export default {
  name: 'InfoView',
  created () {
    this.initPoke()
  },
  data () {
    return {
      lists: [],
      mount: ''
    }
  },
  methods: {
    // 请求宝可梦列表
    async PokeList (id) {
      const { data } = await request.get(`pokemon/${id}`)
      this.lists.push(data)
    },
    // 遍历宝可梦id数,初始化
    initPoke () {
      for (let i = 1; i <= 200; i++) {
        this.PokeList(i)
      }
    },
    // 点击事件，将宝可梦详细信息发送给RightView
    // 同时在右侧展示对应的宝可梦信息
    Send (id) {
      // 根据id发送单条宝可梦信息
      // 由于数组索引从0开始，id排序从1开始，所以数组索引需要id-1
      bus.$emit('pokeinfo', this.lists[id - 1])
      // 同时修改hash地址
      this.$router.push('/info/' + id)
    }
  },
  watch: {
    // 监视输入的值，按ID查找宝可梦
    mount (val) {
      if (val) {
        if (val < 1 || val > 200) { this.mount = 1 } else {
          this.lists = []
          this.PokeList(val)
        }
      } else {
        this.mount = ''
        this.initPoke()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.info-container{
  width: 100%;
  position: relative;
  input{
    width: 50%;
    position: fixed;
    top: 5px;
    z-index: 99;
  }
  .table{
    margin-top: 40px;
  }
}
</style>

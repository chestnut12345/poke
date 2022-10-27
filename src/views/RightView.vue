<template>
  <div class="right-container">
    <div class="main">
      <description-view
      :id="this.mid"
      :name="this.pokelists.name"
      :types="this.pokelists.types"
      :height="this.pokelists.height"
      :weight="this.pokelists.weight"
      :sprites="this.pokelists.sprites"
      :stats="this.pokelists.stats"
      :base_experience="this.pokelists.base_experience"></description-view>
      <ability-view :abilities="this.pokelists.abilities"></ability-view>
    </div>
  </div>
</template>

<script>
import bus from '../eventbus'
import DescriptionView from '../components/BaseinfoView.vue'
import AbilityView from '../components/AbilityView.vue'
export default {
  name: 'RightView',
  created () {
    bus.$on('pokeinfo', (val) => {
      this.pokelists = val
      console.log(this.pokelists)
    })
  },
  props: ['mid'],
  data () {
    return {
      pokelists: []
    }
  },
  components: {
    DescriptionView,
    AbilityView
  }
}
</script>

<style lang="less" scoped>
.right-container{
  width: 100%;
  margin: 10px;
}
</style>

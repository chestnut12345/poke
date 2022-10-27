<template>
  <div class="ability-container">
    <h4>Abilities</h4>
      <div v-if="abilities.length">
        <span class="label">{{abilities[0].ability.name}}</span>
        <span class="label">{{abilities[1].ability.name}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AbilityView',
  props: {
    // 能力
    abilities: {
      type: Array,
      default: function () { return [] }
    }
  }
}
</script>

<style lang="less" scoped>
.ability-container{
  span{
    background-color: rgb(243, 241, 166);
    color: rgb(47, 109, 56);
    margin: 2px;
    font-size: 13px;
  }
}
</style>

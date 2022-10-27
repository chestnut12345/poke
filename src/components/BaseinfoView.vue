<template>
  <div class="descrption-container">
    <div class="header">
      <div class="left">
        <span>ID:{{id}}</span>
        <h3>{{name}}</h3>
        <div class="type" style="font-size:18px;">
        <span class="label" :id="types[0].type.name"
        v-if="types.length===1">{{types[0].type.name}}</span>
        <div class="types" v-if="types.length===2">
          <span class="label" :id=" types[0].type.name">{{types[0].type.name}}</span>
          <span class="label" :id=" types[1].type.name">{{types[1].type.name}}</span>
        </div>
      </div>
      </div>
      <div class="right">
        <img src="../../public/pokeapi.png" alt="">
      </div>
    </div>
    <div class="middle">
      <img :src="sprites.front_default" alt=""/>
      <p>The base experience gained for defeating this Pokémon is {{base_experience}}</p>
    </div>
    <hr>
    <table class="table" v-if="stats.length">
      <tr>
        <td>
          <strong>Height</strong><br>{{height}}
        </td>
        <td>
          <strong>Weight</strong><br>{{weight}}
        </td>
        <td>
          <strong>Speed</strong><br>{{stats[5].base_stat}}
        </td>
      </tr>
      <tr>
        <td>
          <strong>Attack</strong><br>{{stats[1].base_stat}}
        </td>
        <td>
          <strong>Defense</strong><br>{{stats[2].base_stat}}
        </td>
        <td>
          <strong>HP</strong><br>{{stats[0].base_stat}}
        </td>
      </tr>
    </table>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'DescriptionView',
  props: {
    // ID值
    id: {
      type: [Number, String],
      required: true
    },
    // 名称
    name: {
      type: String,
      default: '',
      required: true
    },
    // 身高
    height: {
      type: Number,
      default: 0
    },
    // 体重
    weight: {
      type: Number,
      default: 0
    },
    // 属性
    types: {
      type: Array,
      default: function () { return [] }
    },
    // 基本信息
    stats: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 基本经验
    base_experience: {
      type: Number,
      default: 0
    },
    // 可视化表示
    sprites: {
      type: Object,
      default: function () { return {} }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../shared/color.css';
.descrption-container{
  .header{
    display: flex;
    justify-content:center;
    align-items: baseline;
    .left{
      flex: 4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .right{
      flex: 1;
      img{width: 60%;}
    }
  }
  .middle{
    width: 180px;
    height: 270px;
    padding: 8px;
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius: 10px;
    box-shadow:-2px -2px 4px gray inset;
    background-color: rgb(249, 211, 161);
    img{
      margin: 10px;
      width: 110px;
      background-color: rgb(251, 227, 195);
      border-radius: 50%;
      border: 1px solid rgb(245, 245, 123);
    }
    p{
      padding: 5px;
      font-size: 14px;
    }
  }
}
</style>

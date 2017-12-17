<template>
  <header class="header">
    <div class="head-left" @click="toCity">
      <span>{{cityName}}</span>
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="head-form">
      <div class="input-wrap">
        <i class="fa fa-search" @click="getVal(shopname)"></i>
        <input type="text" v-model="shopname" placeholder="输入商家/品类/商圈">
      </div>
    </div>
    <div class="head-right" @click="toUser">
      <i v-bind:class="user"></i>
      <span>我的</span>
    </div>
  </header>
</template>

<script>
import axios from 'axios'
import bus from '../../bus'
import {mapState} from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      user: 'fa fa-user',
      shopname: '',
      title: ''
    }
  },
  computed: mapState({
    cityName: state => state.cityName
  }),
  methods: {
    getVal (shopname) {
      this.title = this.shopname
      axios.get('/newList', {
        params: {
          title: shopname
        }
      }).then((res) => {
        bus.$emit('getval', res)
        // this.$store.dispatch('updatashop', res.data)
      })
    },
    toCity () {
      this.$store.dispatch('cityshow')
    },
    toUser () {
      this.$router.push('user')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import 'header.css';
</style>
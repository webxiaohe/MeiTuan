<template>
  <div class="list-wrap">
    <p class="title">猜你喜欢</p>
    <div class="foot-list">
      <dl v-for="(v, k) in list" :key="k">
        <dt>
          <router-link :to="{name: 'Infor', params: { src:v.src, id: v.id, val: v}}">
            <img v-bind:src="v.src" alt="">
          </router-link>
        </dt>
        <dd>
          <div class="top">{{title}} {{v.title}}</div>
          <div class="center text-block">{{v.infor}}</div>
          <div class="price">
            <span class="strong">{{v.price}}</span>
            <span class="strong-color">元</span>
            <del>门市价:{{v.menprice}}元</del>
            <span class="line-right">已售{{v.bought}}</span>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import bus from '../../bus'
import {mapState} from 'vuex'
export default {
  name: 'List',
  data () {
    return {
      list: []
    }
  },
  computed: mapState({
    title: state => state.cityName
    // list: state => state.viewlist
  }),
  methods: {
    getList () {
      axios.get(`${Vue.config.baseUrl}/getList`, {
        params: {
          key: this.title
        }
      }).then((res) => {
        this.list = res.data
      })
    }
  },
  mounted () {
    let that = this
    this.getList()
    bus.$on('getval', function (newlist) {
      that.list = newlist.data
    })
  },
  watch: {
    'title' (newVal, oldVal) {
      this.getList()
    }
  }
}
</script>

<style scoped>
  @import 'style/list.css';
</style>
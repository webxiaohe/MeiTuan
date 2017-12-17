<template>
  <div class="city">
    <h2>获取城市列表</h2>
    <div v-for="(v, k) in citylist" :key="k">
      <p>{{v.province}}</p>
      <div class="country">
        <span v-for="(val, key) in v.citylist" :key="key" @click="back(val.city)">{{val.city}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import bus from '../../bus'
import {mapGetters} from 'vuex'
export default {
  name: 'city',
  data () {
    return {
      citylist: []
    }
  },
  methods: {
    back (cityname) {
      this.$store.dispatch('cityshow')
      this.$store.dispatch('updatacity', cityname)
    }
  },
  computed: {
    ...mapGetters(['cityFilter'])
  },
  mounted () {
    axios.get('/getCitylist').then((res) => {
      this.citylist = res.data
    })
    console.log(this.cityFilter)
  }
}
</script>

<style scoped>
.city{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  color: #fff;
  overflow-y: scroll;
  padding: .1rem;
}
.city h2{
  line-height: .3rem;
  margin-bottom: .1rem;
}
.city p{
  line-height: .3rem;
  font-size: .16rem;
  background: blueviolet;
  border-bottom: 1px solid #ccc;
}
.country{
  padding-top: .1rem;
  padding-bottom: .1rem;
}
.country span{
  display: block;
  line-height: .3rem;
  background: steelblue;
  margin-bottom: .05rem;
}
</style>
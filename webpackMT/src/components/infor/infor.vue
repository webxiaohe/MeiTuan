<template>
  <div id='infor-wrap' class="infor-wrap">
    <div class="img">
      <img v-bind:src="$route.params.src" alt="">
    </div>
    <div class="infor">
      <p>景点为：{{$route.params.val.title}}</p>
      <p>地址：{{$route.params.val.name}}</p>
      <p>地址id为: {{$route.params.id}} </p>
      <p>信息为：{{$route.params.val.infor}}</p>
      <p>人数为：{{getinfor.nums}}</p>
    </div>  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'infor',
  data () {
    return {
      getinfor: ''
    }
  },
  methods: {
    getId () {
      axios.get('/getInfor', {
        params: {
          id: this.$route.params.id,
          val: this.$route.params.val
        }
      }).then((res) => {
        this.getinfor = res.data[0]
      })
    }
  },
  mounted () {
    this.getId()
  },
  beforeRouteUpdata () {
    this.getId()
  }
}
</script>

<style scoped>
 @import './infor.css';
</style>
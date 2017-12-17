<template>
  <div class="my">
    <button @click="changeName">changeName</button>
    <div>
      <p>{{obj.name}}</p>
      手机号：{{tel}}
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'my',
  computed: mapState({
    tel: state => state.tel,
    pwd: state => state.pwd
  }),
  mounted () {
    console.log(this.$store)
  },
  data () {
    return {
      obj: {
        name: 'zhangsan'
      }
    }
  },
  methods: {
    changeName () {
      this.obj.name = 'lisi'
    }
  }
}
</script>

<style scoped>
.my{
    width: 100%;
    height: 100%;
    background: #06c1ae;
    font-size: .3rem;
    color: #fff;
}
</style>
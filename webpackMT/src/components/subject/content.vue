<template>
  <div class="contents" id="contents">
    <Banner/>
    <Slide/>
    <Menus/>
    <Lists/>
    <Cityinfor v-if="isShow"/>
  </div>
</template>

<script>
import Banner from './Banner'
import Menus from './Menu'
import Lists from './List'
import Slide from './Slide'
import Cityinfor from './Cityinfor'
import bus from '../../bus'
import {mapState} from 'vuex'
export default {
  name: 'content',
  computed: mapState({
    isShow: state => state.isShow
  }),
  // data () {
  //   return {
  //     isShow: false
  //   }
  // },
  components: {
    Banner,
    Menus,
    Lists,
    Slide,
    Cityinfor
  },
  mounted () {
    let that = this
    bus.$on('getCityview', function (bool) {
      that.isShow = bool
    })
    // bus.$on('getCity', function (val) {
    //   that.isShow = false
    // })
  }
}
</script>

<style scoped>
  @import './style/content.css';
</style>
<template>
  <div class="slide-wrap">
    <swiper :option="swiperOption" class="swiper-cont">
      <swiper-slide v-for="(v, k) in array" :key="k">
        <ul class="list">
          <li v-for="(val, key) in v.slide" :key="key">
            <i :class="val.font" :style="val.bg"></i>
            <span>{{val.title}}</span>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import Vue from 'vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
// import Mockadapter from 'axios-mock-adapter'
// const mock = new Mockadapter(axios)
// let slideArr = [1, 2, 3]
// mock.onGet('/slideList').reply((config) => {
//   console.log(config.params) // 获取客户端传来的一些数据
//   if (config.params.id === 1) {
//     // 数据的重构
//     slideArr = 1
//   }
//   return new Promise((resolve, reject) => {
//     resolve([200, slideArr])
//   })
// })
export default {
  name: 'Slide',
  data () {
    return {
      array: null,
      swiperOption: {
        notNextTick: true,
        grabCursor: true,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        mousewheelControl: true,
        observeParents: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted () {
    axios.get(`${Vue.config.baseUrl}/slideList`).then((res) => {
      this.array = res.data.array
    })
  }
}
</script>

<style scoped>
  @import 'style/slide.css';
</style>
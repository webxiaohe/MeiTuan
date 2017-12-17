// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import mock from './mockjs/index.js' // mock数据开发环境才需要
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'  // swiper
import App from './App'
import store from './Store/index'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.config.baseUrl = 'http://www.baidu.com'
if (process.env.NODE_ENV === 'development') { // 生产环境
  Vue.config.baseUrl = ''
  mock.bootStrap()
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})

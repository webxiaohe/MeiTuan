import Vue from 'vue'
import VueRouter from 'vue-router'
import Infor from '../components/infor/infor'
import Renderbody from '../components/Renderbody/Rander'
import Userview from '../components/common/user/User'
import My from '../components/common/user/my'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Renderbody
    }, {
      name: 'Infor',
      path: '/infor',
      component: Infor
    }, {
      name: 'user',
      path: '/user',
      component: Userview
    }, {
      name: 'my',
      path: '/my',
      component: My
    }
  ]
})

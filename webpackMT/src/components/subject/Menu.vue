<template>
  <div class="menu-wrap">
    <dl v-for="(v,k) in list" :style="v.border" :key="k">
      <dd><h3 :style="v.color">{{v.title}}</h3><p>{{v.infor}}</p></dd>
      <dt><img v-bind:src="v.src" alt=""></dt>
    </dl>
  </div>
</template>

<script>
  export default {
    name: 'Menus',
    data () {
      return {
        list: [
          {
            src: 'src/assets/images/imgs/imgs_02.png',
            title: '我们约吧',
            infor: '恋人家人朋友',
            color: 'color: #55a40f;'
          }, {
            src: 'src/assets/images/imgs/imgs_03.jpg',
            title: '低价超值',
            infor: '十元惠生活',
            color: 'color:#ff3f0d;',
            border: 'border-left: 1px solid #ddd8ce;border-right: 1px solid #ddd8ce;'
          }, {
            src: 'src/assets/images/imgs/imgs_05.png',
            title: '聚餐宴请',
            infor: '朋友家人聚餐',
            color: 'color:#f742a0'
          }
        ]
      }
    }
  }
</script>

<style scope>
  @import 'style/menu.css';
</style>

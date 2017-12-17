<template>
  <div class="banner-wrap">
    <img v-bind:src="src">
  </div>
</template>
<script>
export default {
  name: 'Banner',
  data () {
    return {
      src: './src/assets/images/imgs/banner.jpg'
    }
  }
}
</script>
<style scoped>
  @import './style/banner.css';
</style>
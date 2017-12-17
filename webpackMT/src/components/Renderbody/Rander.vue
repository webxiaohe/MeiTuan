<template>
  <div class="subject" id="subject">
    <Headers/>
    <Contents/>
  </div>
</template>

<script>
import '../../assets/css/font-awesome.min.css'
import '../../assets/css/swiper.min.css'
import Headers from '../common/Header'
import Contents from '../subject/content'
export default {
  name: 'app',
  components: {
    Headers,
    Contents
  }
}
</script>

<style scoped>

</style>


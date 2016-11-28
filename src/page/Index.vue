<template>
  <div class="indexPage">
    <HeaderCompoent></HeaderCompoent>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<style lang="sass">
  .indexPage

</style>
<script>
  import HeaderCompoent from '../components/HeaderCompoent.vue'
  import Footer from '../components/Footer.vue'

  export default{
    name: 'index',
    data () {
      return {title: ''}
    },
    methods: {
    },
    watch: {
    },
    components: {
      HeaderCompoent,
      Footer
    },
    mounted () {
    }
  }
</script>

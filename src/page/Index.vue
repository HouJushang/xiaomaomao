<template>
  <div class="indexPage">
    <HeaderCompoent></HeaderCompoent>
    <router-view></router-view>
    <Indexfooter></Indexfooter>
  </div>
</template>
<style lang="sass">
  .indexPage
    background-color: #e1e1e1
</style>
<script>
  import HeaderCompoent from '../components/HeaderCompoent.vue'
  import Indexfooter from '../components/Footer.vue'

  export default{
    data () {
      return {}
    },
    methods: {
    },
    watch: {
    },
    components: {
      HeaderCompoent,
      Indexfooter
    },
    mounted () {
    }
  }
</script>

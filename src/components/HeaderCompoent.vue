<template>
  <header class="header">
    <div class="left">
      个人中心
    </div>
    笑毛毛
    <div class="right">
      分享
    </div>
  </header>
</template>
<style lang='sass' scoped>
  header
    text-align: center
    height: 35px
    line-height: 36px
    background-color: #f79100
    color: #fff
    font-size: 14px
    position: relative
    .left,.right
      position: absolute
      top: 0
    .left
      left: 0
    .right
      right: 0
</style>
<script>
  import {router} from '../router.js'
  export default{
    name: 'header',
    props: ['title'],
    data () {
      return {
        'msg': 'sssss'
      }
    },
    methods: {
      backEvent () {
        router.go(-1)
      }
    }
  }

</script>

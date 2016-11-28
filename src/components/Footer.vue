<template>
  <footer class="footer">
    <router-link to="duanzi" class="active">
      段子
    </router-link>
    <router-link to="gif">
      动图
    </router-link>
    <router-link to="heighlights">
      亮点
    </router-link>
  </footer>
</template>
<style lang='sass' scoped>
  footer
    position: absolute
    display: flex
    display: -webkit-flex
    bottom: 0
    left: 0
    right: 0
    text-align: center
    height: 30px
    background-color: aquamarine
    line-height: 31px
    background-color: #f79100
    a
      flex-grow: 1
      color: #764000
      &.active
        background-color: #764000
        color: #ffef3c
</style>
<script>
  import {router} from '../router.js'
  export default{
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

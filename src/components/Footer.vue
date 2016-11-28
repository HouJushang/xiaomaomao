<template>
  <footer class="footer">
    <div v-bind:class="{ active: 'duanzi' == type }" @click="toIndextype('duanzi')">
      段子
    </div>
    <div v-bind:class="{ active: 'gif' == type }"  @click="toIndextype('gif')">
      动图
    </div>
    <div v-bind:class="{ active: 'heighlights' == type }" @click="toIndextype('heighlights')">
      亮点
    </div>
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
    div
      flex-grow: 1
      color: #764000
      &.active
        background-color: #764000
        color: #ffef3c
</style>
<script>
  import {router} from '../router.js'
  import {footerData} from '../data.js'
  export default{
    data () {
      return footerData
    },
    methods: {
      toIndextype (e) {
        this.type = e
        router.push(e)
      }
    }
  }
</script>

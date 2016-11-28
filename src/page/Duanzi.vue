<template>
  <div class="duanziPage">
    <div class="item">
      <User></User>
      <DuanziContent></DuanziContent>
    </div>
    <div class="item">
      <User></User>
      <DuanziContent></DuanziContent>
      <div class="itemInfo">
        <p>顶 111</p>
        <p>弱 11</p>
        <p></p>
        <p>评论111</p>
      </div>
    </div>
  </div>
</template>
<style lang='sass' scoped>
  .duanziPage
    .item
      margin: 6px
      background-color: #fff
      padding: 8px 8px 0 8px
      .itemInfo
        display: flex
        display: -webkit-flex
        border-top: 1px solid #e7e7e7
        margin-top: 5px
        height: 30px
        line-height: 31px
        font-size: 13px
        p
          flex-grow: 1
          -webkit-flex-grow: 1
          width: 1%
</style>
<script>
  import User from '../components/User.vue'
  import DuanziContent from '../components/DuanziContent.vue'
  export default{
    data () {
      return {
        'msg': 'sssss'
      }
    },
    methods: {
    },
    components: {
      User,
      DuanziContent
    }
  }
</script>

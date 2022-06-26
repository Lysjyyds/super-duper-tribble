<template>
  <div>
    <MyHeader background="purple" title="我的购物车"></MyHeader>
    <div class="main"><MyGoods></MyGoods></div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import axios from 'axios'
import MyHeader from './components/MyHeader'
import MyGoods from './components/MyGoods'
import MyFooter from './components/MyFooter'
export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  data () {
    return {
      goodsList: []
    }
  },
  created () {
    this.getGoods()
  },
  methods: {
    async getGoods () {
      const res = await axios({ url: '/api/cart' })
      this.goodsList = res.data.list
    }
  }
}
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>

<template>
  <div>
    <MyHeader background="purple" title="我的购物车"></MyHeader>
    <div class="main"><MyGoods></MyGoods></div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyGoods from './components/MyGoods'
import MyFooter from './components/MyFooter'
export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  }
}
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>

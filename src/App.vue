<template>
  <div>
    <MyHeader></MyHeader>
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
.mian {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>

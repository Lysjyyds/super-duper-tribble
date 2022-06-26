import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css' // 引入第三方包
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')

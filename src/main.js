import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css' // 引入第三方包
Vue.config.productionTip = false

axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net'
Vue.prototype.$axios = axios
new Vue({
  render: (h) => h(App)
}).$mount('#app')

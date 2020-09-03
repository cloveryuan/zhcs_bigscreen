import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import 'echarts-liquidfill'
import 'echarts-gl'
import Element from 'element-ui'
import './assets/style/index.scss'
import 'element-ui/lib/theme-chalk/index.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper /* { default options with global component } */)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(Element)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

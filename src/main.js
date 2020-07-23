import Vue from 'vue'
import App from './App.vue'
import store from './store' // import the store folder
import router from './router'

Vue.config.productionTip = false

new Vue({
  // add the store to the vue instance so we ca use it
  store,

  router,
  render: h => h(App)
}).$mount('#app')

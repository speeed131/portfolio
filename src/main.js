import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueTyperPlugin from 'vue-typer'





Vue.config.productionTip = true

Vue.use(VueTyperPlugin)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueTyperPlugin from 'vue-typer'
import VueParticles from 'vue-particles'





Vue.config.productionTip = true

Vue.use(VueTyperPlugin)
Vue.use(VueParticles)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueTyperPlugin from 'vue-typer'
import VueParticles from 'vue-particles'

//以下 font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faBlog,faBirthdayCake,faImage } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//fontawesome用
library.add(faUser,faBlog,faBirthdayCake,faImage,faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = true


//useするもの
Vue.use(VueTyperPlugin)
Vue.use(VueParticles)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import 'semantic-ui-css/semantic.min.css'
import Routes from './components/routes'
import SuiVue from 'semantic-ui-vue'
import App from './App.vue'

Vue.use(SuiVue)
Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes,
  mode : 'history'
})
new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')

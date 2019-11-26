import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppPosts from'./components/AppPosts'

Vue.use (VueRouter)

Vue.config.productionTip = false

const routes = [
  {name: 'posts', path:'/posts', component: AppPosts}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import LoginComponent from './pages/Login/LoginComponent.vue';
import HomeComponent from './pages/Home/HomeComponent.vue';

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent
  },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

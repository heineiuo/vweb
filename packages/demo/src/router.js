import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './Homepage'
import Profile from './Profile'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/profile', component: Profile },
    { path: '/home/:page(\\d+)?', component: Homepage },
    { path: '/', redirect: '/home' }
  ]
})

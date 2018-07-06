import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'
import ThemeContext from './ThemeContext'
import Background from './Background'

sync(store, router)

const vm = new Vue({
  el: '#app',
  store,
  router,
  render () {
    return (
      <ThemeContext>
        <Background>
          <router-view />
        </Background>
      </ThemeContext>
    )
  }
})

export default vm

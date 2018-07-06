import Vue from 'vue'
// import Background from './Background'

const Homepage = Vue.extend({
  data () {
    return {
      count: 1
    }
  },
  render () {
    return (
      <div >
        <div>{this.$data.count}</div>
        <router-link to='/profile'>profile</router-link>
      </div>
    )
  }
})

export default Homepage

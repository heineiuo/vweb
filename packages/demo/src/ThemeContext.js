import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      isLight: true
    }
  },
  // computed: {
  //   isLight: {
  //     get () {
  //       return this.isLight
  //     },
  //     set (val) {
  //       this.isLight = val
  //     }
  //   }
  // },
  provide () {
    const theme = {
      toggleLight: this.toggleLight
    }
    Object.defineProperties(theme, {
      isLight: {
        enumerable: true,
        get: () => this.isLight
      }
    })
    return { theme }
  },
  methods: {
    toggleLight () {
      console.log('toggle light', this.$data.isLight)
      this.$data.isLight = !this.$data.isLight
    }
  },
  render () {
    return (
      <div>{this.$slots.default}</div>
    )
  }
})

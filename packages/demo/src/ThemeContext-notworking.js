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
    return {
      theme: {
        toggleLight: this.toggleLight,
        isLight: this.$data.isLight
      }
    }
  },
  methods: {
    toggleLight () {
      console.log('toggle light', this.$data.isLight)
      this.$data.isLight = !this.$data.isLight
    }
  },
  render () {
    return (
      <div>
        {this.$slots.default}
      </div>
    )
  }
})

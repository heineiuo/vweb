import Vue from 'vue'

const Background = Vue.extend({
  props: {
    color: { type: String, required: false }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick (e) {
      console.log(this.$props)
    }
  },
  inject: ['theme'],
  render () {
    return (
      <div
        onClick={this.handleClick}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: this.theme.isLight ? '#fff' : '#000'
        }}
      >
        {this.$slots.default}
      </div>
    )
  }
})

export default Background

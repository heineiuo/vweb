import Vue from 'vue'

export default Vue.extend({
  directives: {
    focus: {
      // When the bound element is inserted into the DOM...
      inserted: function (el) {
        // Focus the element
        el.focus()
      }
    }
  },
  inject: [ 'theme' ],
  render () {
    return (
      <div>
        <div>profile</div>
        <div onClick={this.theme.toggleLight}>{this.theme.isLight ? '白天模式' : '晚上模式'}</div>
        <input type='text' v-focus />
      </div>
    )
  }
})

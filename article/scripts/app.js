//app javascript
var vm = new Vue({
  el: '#copy',
  data: {
    isActive: false
  },
  methods: {
    change: function(){
      this.isActive = !this.isActive;
    }
  }
});

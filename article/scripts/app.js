//app javascript
var vm = new Vue({
  el: '#copy',
  data: {
    answer: {story: "", question: "", decision: "", why: ""},

    isActive: false,

    answers: [
      {story: "1", question: "1", decision: "agree", why: "because I like it"},
      {story: "1", question: "2", decision: "agree", why: "because I love it"},

      {story: "1", question: "3", decision: "disagree", why: "because I hate it"}
    ]

  },
  methods: {
    change: function(){
      this.isActive = !this.isActive;
    },

    addAnswer: function () {
      this.answers.push(this.answer);
      this.answer = {story: "", question: "", decision: "", why: ""};

    }
  }
});

//app javascript






var vm = new Vue({
  el: '#copy',
  data: {
    answer: {question: "", decision: "", why: ""},

    isActive: [false, false],

    answers: [
      {question: "1", decision: "agree", why: "because I like it"},
      {question: "2", decision: "agree", why: "because I love it"},
      {question: "3", decision: "disagree", why: "because I hate it"}
    ]

  },
  methods: {
    changeit: function(index){
      this.isActive[index] = !this.isActive[index];
    },
    addAnswer: function (input) {
      this.answer.question = input;
      this.answers.push(this.answer);
      this.answer = {question: "", decision: "", why: ""};

    }
  }
});

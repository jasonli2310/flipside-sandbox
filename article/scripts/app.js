//app javascript

var vm = new Vue({
  el: '#copy',
  data: {
    answer: {question: "", decision: "", why: ""},

    decided: false,
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

    },
    postDecision: function(){
      this.decided = true;
    }
  }
});


var results = new Vue ({
  el: '#opresult',
  data: {
    groupkey: {group: '', opinion1: '', opinion2: '', opinion3: ''},

    showing: 'B',

    group: [
      {name: "A", opinion1: 'I like puppies', opinion2: 'I like dogs', opinion3: 'i like cats'},
      {name: "B", opinion1: 'I like SIDD', opinion2: 'I like FORREST', opinion3: 'i like JASON'},
      {name: "C", opinion1: 'I like STOP', opinion2: 'I like LOOKING', opinion3: 'i like AT'},
      {name: "D", opinion1: 'I like ME', opinion2: 'I like WHAT', opinion3: 'i like YOO'}
    ],

  },

  methods: {
    select: function(event) {
      targetId = event.currentTarget.id;
      this.showing = targetId;
    }
  }

});

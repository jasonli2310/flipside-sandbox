//app javascript

$(window).on('resize', function() {
  var win = $(this);
  if (win.width() > 767) {

    $('#scatter').addClass('chart-fixed');

  } else {
    $('#scatter').removeClass('chart-fixed');
  }
});



var vm = new Vue({
  el: '#copy',
  data: {
    answer: {question: "", decision: ""},
    why:{question: "", response:""},
    agreeForm:{question1: false, question2: false},
    whyForm:{question1: false, question2: false},
    answers: [
      {question: "1", decision: "agree"},
      {question: "2", decision: "agree"},
      {question: "3", decision: "disagree"}
    ],
    whys: [],
  },
  methods: {
    changeit: function(index){
      this.isActive[index] = !this.isActive[index];
    },
    addAnswer: function (event) {
      currentid = event.currentTarget.id;
      this.answer.question = currentid;
      this.answers.push(this.answer);
      this.answer = {question: "", decision: ""};
    },
    addWhy: function (event) {
      currentid = event.currentTarget.id;
      this.why.question = currentid;
      this.whys.push(this.why);
      this.why = {question: "", response: ""};
    }
  }
});


var results = new Vue ({
  el: '#opresult',
  data: {
    groupkey: {group: '', opinion1: '', opinion2: '', opinion3: ''},
    showing: '',

    colors: {A: '#DB6061', B: '#587A95', C: '#52AEFB', D: '#85E785', E: '#d098f0', F: '#f67dd3'},

    //HARD CODED FOR NOW
    group: [
      {name: "A", opinion1: "Finally, a basic universal income only hedges against future unemployment rather than creating opportunities in the present to anticipate economic changes.", opinion2: "First, public schools and innovative STEM charter schools need the resources to teach STEM subjects and trade skills.", opinion3: "Let the robots do the work, and let society enjoy the benefits of their unceasing productivity."},

      {name: "B", opinion1: "A basic income in this case would simply act like a social safety net, not unlike those that exist today, but supercharged.", opinion2: "While it is of vital public policy interest to support technology-displaced workers, the premise of a tax on the use of robots raises several thorny issues. One is the difficulty of specifying which kinds of robotic automation should be taxed, and more generally, what counts as a robot.", opinion3: "A robot tax, as Gates proposed, may end up being a tax on innovation and would force Congress and the IRS to make the perhaps impossible distinction between labor-saving machines and labor-enhancing ones."},

      {name: "C", opinion1: "The solution to the problem of mass unemployment, I suspect, will involve 'service jobs of love.'", opinion2: "A basic income in this case would simply act like a social safety net, not unlike those that exist today, but supercharged.", opinion3: "First, public schools and innovative STEM charter schools need the resources to teach STEM subjects and trade skills."},

      {name: "D", opinion1: "A robot tax, as Gates proposed, may end up being a tax on innovation and would force Congress and the IRS to make the perhaps impossible distinction between labor-saving machines and labor-enhancing ones.", opinion2: "Let the robots do the work, and let society enjoy the benefits of their unceasing productivity.", opinion3: "First, public schools and innovative STEM charter schools need the resources to teach STEM subjects and trade skills."}],
  },
  methods: {
    select: function(event) {
      targetId = event.currentTarget.id;
      this.showing = targetId;
    }
  }
});

var colors = ['#DB6061', '#587A95', '#52AEFB', '#85E785', '#d098f0', '#f67dd3'];

var labels = ['A', 'B', 'C', 'D', 'E', 'F'];

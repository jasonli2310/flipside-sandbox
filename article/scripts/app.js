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
      this.why = {question: "", decision: ""};
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


var ctx = document.getElementById("scatterPlot").getContext('2d');

var userdata = [{"x": 0.3489973308078653, "y": 2.8484390551697265, "r": 9}]

var dataset = [{"x": 1.4201333112919208, "y": 4.637461654822657, "r": 5}, {"x": 1.2893377801973964, "y": 3.449691588146665, "r": 5}, {"x": 1.7373078036934886, "y": 4.425462343941218, "r": 5}, {"x": 1.0220285958479411, "y": 4.116603477422556, "r": 5}, {"x": 1.8407062774060008, "y": 3.561622307041948, "r": 5}, {"x": -1.5767197372875836, "y": 4.957405922888751, "r": 5}, {"x": 2.4703491517041014, "y": 4.098629063682589, "r": 5}, {"x": 0.8730512267529372, "y": 4.714385829386762, "r": 5}, {"x": 3.2460247025341027, "y": 2.8494216528496255, "r": 5}, {"x": 1.1203136497073731, "y": 5.758060834411365, "r": 5}];

var dataset2 = [{"x": 1.5456153396812244, "y": 0.45958935832675046, "r": 5}, {"x": 3.5880467357913357, "y": 2.367022429838222, "r": 5}, {"x": 1.1674817738027652, "y": -1.0831328082859901, "r": 5}, {"x": 1.6679407040249257, "y": 0.5953609093626013, "r": 5}, {"x": 0.8024721613829517, "y": 1.6751540157698468, "r": 5}, {"x": 3.2855582021605985, "y": 2.100043508722348, "r": 5}, {"x": 1.0067145563657853, "y": -0.5223542772410383, "r": 5}, {"x": 1.7073553721067254, "y": 1.054012629041917, "r": 5}, {"x": 2.2102149471297943, "y": 1.2758261795401105, "r": 5}];

var dataset3 = [{"x": -2.3400502952663595, "y": 1.191599659001446, "r": 5}, {"x": -3.140801860779857, "y": 2.705141981119154, "r": 5}, {"x": -1.5550862415605602, "y": 3.3462141318635403, "r": 5}, {"x": -2.1993644609978564, "y": 2.5583290997925814, "r": 5}, {"x": -1.3494778709681525, "y": 2.5161013251248607, "r": 5}, {"x": -2.161226106902869, "y": 2.5551410953459848, "r": 5}, {"x": -2.422370574415581, "y": 3.3047847591923847, "r": 5}, {"x": -3.1571023601879498, "y": 3.380664516858897, "r": 5}, {"x": -1.4603867908387376, "y": 3.220354159072904, "r": 5}, {"x": -2.0377091507907785, "y": 1.7372500772107107, "r": 5}];

var dataset4 = [{"x": -0.5191652125686134, "y": 7.964442926399005, "r": 5}, {"x": -0.8459141335686012, "y": 7.1506499247012805, "r": 5}, {"x": -2.4134056155295065, "y": 8.736286502595782, "r": 5}, {"x": -2.119052923928032, "y": 7.256610350877178, "r": 5}, {"x": -0.7825933350156904, "y": 6.29921632936437, "r": 5}, {"x": -0.10885509020284956, "y": 6.600634195287942, "r": 5}, {"x": 0.23999641904944946, "y": 9.731349191672177, "r": 5}, {"x": -2.1555541391293924, "y": 7.887405411437733, "r": 5}, {"x": -1.559808306873523, "y": 7.891625357871339, "r": 5}, {"x": -0.06947620358649953, "y": 7.6555351798292435, "r": 5}];


var inputs = [userdata, dataset, dataset2, dataset3];

var colors = ['#DB6061', '#587A95', '#52AEFB', '#85E785', '#d098f0', '#f67dd3'];

var labels = ['A', 'B', 'C', 'D', 'E', 'F'];

/*
class Rectangle {
  constructor(input, colors, labels) {
    this.inputs = inputs;
    this.colors = colors;
    this.labels = labels;
  }
  var chartdataset = ;
  var dict = { label: '', backgroundColor: '', data: ''};

  produceChartData() {

    for (var i = 1; i < this.inputs.length; i++) {
      this.dict["label"] = this.labels[i];
      this.dict.["backgroundColor"] = this.colors[i];
      this.dict.["data"] = this.inputs[i];

      this.chartdataset.push(this.dict);
    }
  }
}
*/

var scatterChart = new Chart(ctx, {
  type: 'bubble',
  fill: false,
  data: {
    fill: false,

    datasets: [
      {
        label: 'Scatter Dataset',
        backgroundColor: 'purple',
        data: userdata
      },
      {
        label: 'Scatter Dataset',
        backgroundColor: '#DB6061',
        data: dataset
      },

      {
        label: 'Scatter Dataset',
        backgroundColor: '#587A95',
        data: dataset2
      },
      {
        label: 'Scatter Dataset',
        backgroundColor: '#52aefb',
        data: dataset3
      },

      {
        label: 'Scatter Dataset',
        backgroundColor: '#85E785',
        data: dataset4
      }
    ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes:[{
          gridLines: {
            display:false
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function() {
              return '';
            }
          }
        }],
        xAxes: [
          {gridLines: {
            display:false
          },
          display: true,
          type: 'linear',
          ticks: {
            // Include a dollar sign in the ticks
            callback: function() {
              return '';
            }
          }
        }]
      }
    }
  });

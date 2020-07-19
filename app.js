const vuejs = new Vue({
  el: "#root",
  data: {
    person: ['David','tim', 'ayo', 'bala'],
    hideMe: false,
    learn: "<p>I am learning VueJs</p>",
    img: {src: 'asset/image/thedavyloper-logo.jpg', alt: 'thedavyloper logo', href: '#'},
    input: '',
    a: 0,
    b: 0,
    active: true,
    border: true,
    color:  "#29fafa",
    myValue: "100px",
    value: 4,
    check: true,
    gender: '',
    selection: ''
  },
  methods: {
    sayHi: function(){
      return `Hi ${this.person[0]}`
    },
    sayHello: function() {
      console.log(`Hello ${this.person[0]}`)
    },
    showKey: function() {
      console.log(`you pressed ${this.input}`)
    }
  },
  computed: {
    compA: function() {
      return this.a;
    },
    compB: function() {
      return this.b;
    }
  }
});

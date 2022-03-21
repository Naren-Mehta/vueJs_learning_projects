const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmName: ''
    };
  },
  methods: {
    increaseCounter(num) {
      this.counter = this.counter + num;
    },
    decreaseCounter(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName){
      this.name = event.target.value + ' '+ lastName;
    },
    submitForm(event){
      alert('Submitted');
      event.preventDefault();
    },
    submitForm2(event){
      alert('Submitted');
    },
    confirmInput (){
      this.confirmName = this.name;
    }
  }
});

app.mount('#events');
const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vuw and build amazing apps',
            // courseGoalB: '<h2>Master Vuw and build amazing apps</h2>',
            vueLink: 'https://vuejs.org/guide/introduction.html'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');
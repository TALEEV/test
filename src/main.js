import Vue from 'vue'
import App from './App.vue'
import Vuelidate from "vuelidate";
import "./assets/styles/app.scss";


Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

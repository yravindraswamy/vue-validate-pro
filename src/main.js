import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';

// import Vue from 'vue';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

// Vue.component(VueTelInput);
const app =createApp(App);
app.use(VueTelInput);
app.mount('#app');


import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'

// bootstrap-vue
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './registerServiceWorker'
//import './registerServiceWorker'
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyB7tWYo5zLFoqAgVeKBZbpWoeYFs6Ulsek",
    authDomain: "vue-app-d4acd.firebaseapp.com",
    projectId: "vue-app-d4acd",
    storageBucket: "vue-app-d4acd.appspot.com",
    messagingSenderId: "564229448395",
    appId: "1:564229448395:web:08e21fdb0950a9d893714e"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')





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

/// no use el firebaseDB.js , puse la configuracion en main.js y exporté db 
/// tambien cambié la regla del cloud Store , cambié false --> a true

const firebaseConfig = {  
    apiKey: "AIzaSyBuVmplh7X-s_tuZVgeCAMLF1tfyeJTSFk",
    authDomain: "ventas-559c7.firebaseapp.com",
    projectId: "ventas-559c7",
    storageBucket: "ventas-559c7.appspot.com",
    messagingSenderId: "191501678270",
    appId: "1:191501678270:web:515d08f09667a4fba590ef"
  };
    // Initialize Firebase
 
export const db = firebase.initializeApp(firebaseConfig).firestore();
 
  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')





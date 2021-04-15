import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '../router/index.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
   
  },
  // getters: {
  //   enviandoUser(state){
  //     return state.user;
  //   }, 
  // },
  mutations: {
    
  },
  actions: {
    logout() {
      firebase.auth().signOut().then(() => {       
         router.push('/home')
        
      })
    }
  }
})


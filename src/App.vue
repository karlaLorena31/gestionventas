<template>
  <div id="app">
    <div v-if="user" >
      <NavBarV/>
    </div>
    <div v-else>
      <NavBar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NavBarV from '@/components/NavBarV.vue'
import firebase from 'firebase'

export default {
  name: 'App',
  data(){
    return{
      user:null
    }
  },
  components: {
    NavBar,
    NavBarV
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
}
</script>





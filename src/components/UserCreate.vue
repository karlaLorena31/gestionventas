
<template>

<div class="container mt-5">

<div  class="row justify-content-center">
  <div class="col-md-6">
    <h3 class="text-left"> Agregar usuarios</h3>

    <form @submit.prevent="onFormSubmit">

      
  <div class="form-group">
    <label for="n1" >Nombre</label>
    <input type="text" class="form-control" id="n1" v-model="user.name" required/>  
  </div>

  <div class="form-group">
    <label for="n" >Email address</label>
    <input type="email" class="form-control" id="n" v-model="user.email" >
    
  </div>

  <div class="form-group">
    <label for="n2" >Contacto</label>
    <input type="number" class="form-control" id="n2" v-model="user.contacto">
  </div>


   <div class="form-group">
    <button class="btn btn-primary">Agregar</button>
  </div>
   
</form>
    
  </div>
</div>
</div>
</template>

<script>



//import firebase from 'firebase'
import {db} from '../main.js'

export default {
  name:'Add',
  data(){
    return{
      user:{}
    }
  },

  methods:{

    onFormSubmit(event){
      event.preventDefault()
      db.collection('users').add(this.user).then(()=>{
        alert("Usuario creado exitosamente")
        this.user.name= '' 
        this.user.email= ''
        this.user.contacto= ''
      }).catch(err => console.log(err));
    }
  }


}
</script>


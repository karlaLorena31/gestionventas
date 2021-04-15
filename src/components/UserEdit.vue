<template>

<div  class="row justify-content-center">
  <div class="col-md-6">
    <h3 class="text-left"> Editar usuarios</h3>

    <form @submit.prevent="onUpdateForm">

  <div class="form-group">
    <label for="n1" >Nombre</label>
    <input type="text" class="form-control" id="n1" v-model="user.name" />  
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
  
</template>

<script>

import {db} from '../main.js' //funciona de las dos formas

export default {

    data(){
        return{
            user:{}
        }
    },

    created(){

        let dbRef=db.collection('users').doc(this.$router.params.id);
        dbRef.get().then((doc)=>{
            this.user=doc.data();
        }).catch((error)=> console.log(error))
    },


    methods:{

        onUpdateForm(event){

            event.preventDefault()
            db.collection('users').doc(this.$route.params.id).update(this.user).then(
                ()=>{
                    alert('Se actualizó correctamente!!')
                    this.$route.push('/list')
                }
            ).catch((error)=> console.log(error))
        }

    },

}
</script>







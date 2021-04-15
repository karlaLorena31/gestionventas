<template>
  <div class="container mt-4">
  <div class="row">
      <div class="col-md-12">
          <table class="table table-striped">
              <thead>
                   <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Celular</th>
                  <th>Opciones</th>
              </tr>
              </thead>
              <tbody>
                  <tr v-for="user in Users" :key="user.key">
                      <td>{{user.name}}</td>
                      <td>{{user.email}}</td>
                      <td>{{user.contacto}}</td>
                      <td>                        
                              <router-link :to="{name:'Edit',params:{id:user.key}}" class="btn btn-primary">Editar</router-link>
                              <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Eliminar</button>                        
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
  </div>
</template>

<script>

import { db } from '../main.js'  

export default {
    name:'List',
    data(){
        return{
            Users:[],                    
        }
    },

    created(){
        db.collection('users').onSnapshot((snapshotChange)=> {
            this.Users= []
            snapshotChange.forEach((doc) => {
                this.Users.push({
                    key:doc.id,
                    name:doc.data().name,
                    email:doc.data().email,
                    contacto:doc.data().contacto
                })
                
            });
        })
    },

    methods:{
        deleteUser(id){
            if(window.confirm('Esta seguro eliminar?')){
                db.collection('users').doc(id).delete().then(()=>{
                    console.log("Usuario eliminado!!!!")
                })
                .catch((err)=> console.error(err))
            }
        }
    },

}
</script>


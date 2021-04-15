<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Gestion de Ventas</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       
        <a>
          <router-link class="nav-link" to="/vendedores" >Vendedores</router-link>
        </a>
        <a>
          <router-link class="nav-link" to="/pedidos">Pedidos</router-link>
        </a>

        <a>
          <router-link class="nav-link" to="/profile">Profile</router-link>
        </a>

         <button type="submit" class="btn btn-primary" @click="logout">Cerrar Sesión</button>
      </div>       
    </div>
  </nav>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "NavBarV",

  methods:{

    ...mapActions(['logout'])
  }

 
};
</script>

<style lang="scss" scoped></style>

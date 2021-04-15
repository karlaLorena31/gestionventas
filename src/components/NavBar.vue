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
       
        <div>
          <button class="btn btn-primary">
            <router-link class="text-white" to="/login"
              >Ingresar Adm</router-link          >
          </button>
        </div>
         
 
      
      </div>       
    </div>
  </nav>
</template>

<script>

export default {
  name: "NavBar",
 
};
</script>

<style lang="scss" scoped></style>

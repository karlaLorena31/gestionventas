<template>
  <div class="home">
    <div  class="header m-auto">
     
      <div class="d-flex flex-row justify-content-between"  >
         <h4>Dashboard</h4>
        <h4 class="mr-3 ">
          Bienvenido al sistema de gestión de ventas :<b> {{ user.displayName }} </b>
        </h4>
      <!--  <button type="submit" class="btn btn-primary" @click="logout">Cerrar Sesión</button>-->
      </div>
    </div>

    <div class="header card">
      <!-- <img src="http://via.placeholder.com/1500x500" alt="slider">-->
      <img
        class="img-fluid"
        src="../assets/img/ejemplo-gestión-recursos-humanos.jpg"
        alt=""
      />

      <h1>Bienvenido</h1>
      <h4>Bienvenidos al Sistema de Gestión de Ventas de WordParts</h4>
    </div>
    <hr />
    <div class="login">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2">
        <!-- venta mensual -->
        <div class="col mb-4">
          <div class="card">
            <h5 class="text-center pt-2">Ventas Mensual</h5>
            <div class="row no-gutters">
              <div class="col-md-4 text-center">
                <img src="../assets/img/graficorojo.jpeg" alt="" />
                <label>ver detalles</label>
              </div>

              <div class="col-md-4 text-center">
                <div class="card-body">
                  <h1 class="card-title">
                    {{ ventas[0].venta_mensual.valor }}
                  </h1>
                  <h6 class="card-title">Ventas del Mes</h6>
                </div>
              </div>

              <div class="col-md-4 text-center">
                <div class="card-body">
                  <h1 class="card-title">{{ ventas[0].venta_mensual.meta }}</h1>
                  <h6 class="card-title">Meta de Ventas al mes</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- venta anual -->
        <div class="col mb-4">
          <div class="card">
            <h5 class="text-center pt-2">Ventas Anual</h5>

            <div class="row no-gutters">
              <div class="col-md-4 text-center">
                <img src="../assets/img/garficoverde.jpeg" alt="" />
                <label>ver detalles</label>
              </div>

              <div class="col-md-4 text-center">
                <div class="card-body">
                  <h1 class="card-title">{{ ventas[1].venta_anual.valor }}</h1>
                  <h6 class="card-title">Ventas del año</h6>
                </div>
              </div>

              <div class="col-md-4 text-center">
                <div class="card-body">
                  <h1 class="card-title">{{ ventas[1].venta_anual.meta }}</h1>
                  <h6 class="card-title">Meta de Ventas al año</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Ranking de Vendedores -->
        <div class="col mb-4">
          <h4 class="text-center mb-3">Ranking de Vendedores</h4>
          <table class="table text-center">
            <thead>
              <tr class="sizetext">
                <th>ID Vendedor</th>
                <th>Vendedor</th>
                <th>Monto</th>
                <th>Unidades</th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(vendedor, index) in rankingVendedores" :key="index">
                <td>{{ vendedor.id_vendedor }}</td>
                <td>{{ vendedor.nombre }}</td>
                <td>{{ vendedor.monto }}</td>
                <td>{{ vendedor.unidades }}</td>
                <td>
                  <button class="form-control btn-primary">detalles</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Ranking de Productos -->
        <div class="col mb-4">
          <h4 class="text-center mb-3">Ranking de Productos</h4>
          <table class="table text-center">
            <thead>
              <tr class="sizetext">
                <th scope="col">Cod Producto</th>
                <th scope="col">Producto</th>
                <th scope="col">Unidades</th>
                <th scope="col">Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(producto, index) in rankingProductos" :key="index">
                <td>{{ producto.cod_producto }}</td>
                <td>{{ producto.poducto }}</td>
                <td>{{ producto.unidades }}</td>
                <td>
                  <button class="form-control btn-primary">detalles</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
import {mapActions} from 'vuex'

export default {
  name: "Dashboard",
  data() {
    return {
      rankingVendedores: {},
      rankingProductos: {},
      ventas: {},
      user: null,
    };
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
 methods: {
    ...mapActions(['logout']),
  },

  mounted() {
    // ranking vendores
    axios
      .get("./datos/dashboard.json")
      .then((response) => {
        this.rankingVendedores = response.data.ranking_vendedores;
        console.log(this.rankingVendedores);
      })
      .catch((error) => {
        console.log(error);
      });

    // ranking Productos
    axios
      .get("./datos/dashboard.json")
      .then((response) => {
        this.rankingProductos = response.data.ranking_productos;
        console.log(this.rankingProductos);
      })
      .catch((error) => {
        console.log(error);
      });

    // ventas
    axios
      .get("./datos/dashboard.json")
      .then((response) => {
        this.ventas = response.data.kpis;
        console.log(this.ventas);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  

};
</script>

<style lang="scss">
.header,
.login {
  padding: 1rem;
}
.header {
  img {
    width: 100%;
  }
}
.sizetext {
  font-size: 15px;
}
</style>

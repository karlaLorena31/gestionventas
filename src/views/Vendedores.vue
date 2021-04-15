<template>
  <div class="p-3">
    <h6 class="header">Home >> Monitor de Vendedores</h6>
    <!-- buscador -->
    
    <h1>Monitor de Vendedores</h1>

    <div class="vendedores card p-4">
      <div class="form-row fecha">
        <div class="form-group col-12 col-md-3 col-lg-3">
          <label>Oficina</label>
          <select class="form-control">
            <option>Seleccione...</option>
            <option v-for="(oficina, index) in oficina" :key="index">{{
              oficina.name
            }}</option>
          </select>
        </div>
        <div class="form-group col-12 col-md-3 col-lg-3">
          <label>Manager</label>
          <select class="form-control">
            <option>Seleccione...</option>
            <option v-for="(manager, index) in manager" :key="index">{{
              manager.nombre
            }}</option>
          </select>
        </div>
        <div class="form-group col-12 col-md-3 col-lg-3">
          <label>Periodo de Consulta</label>
          <input type="date" class="form-control" />
        </div>
        <div class="form-group col-12 col-md-3 col-lg-3">
          <label class="text-white">no me veo</label>
          <button class="form-control btn-primary">Buscar</button>
        </div>
      </div>
    </div>

    <!-- tabla -->
    <div class="mt-4">
      <table class="table text-center">
        <thead>
          <tr>
            <th>ID Vendedor</th>
            <th>Vendedor</th>
            <th>Ventas Unitarias</th>
            <th>Venta Pesos</th>
            <th>Media Venta</th>
            <th>Cumplimiento Media</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(vendedor, index) in Vendedores" :key="index">
            <td>{{ vendedor.id_vendedor }}</td>
            <td>{{ vendedor.nombre }}</td>
            <td>{{ vendedor.venta_unid }}</td>
            <td>$ {{ vendedor.venta_pesos }}</td>
            <td>$ {{ vendedor.meta_venta }}</td>
            <td>
              <div class="progress" style="height: 20px;">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  
                  :style="{
                    width:
                      (vendedor.venta_pesos / vendedor.meta_venta) * 100 + '%',
                  }"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{{vendedor.venta_pesos}}</div>

              </div>
            </td>
            <td>
              <a
                class="button form-control btn-primary"
                href="/vendedores/ficha"
                >detalle</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from "axios";



export default {
  name: "Vendedores",
  data() {
    return {
      Vendedores: {},
      oficina: {},
      manager: {},
     

    };
  },
  mounted() {
    // vendores
    axios
      .get("./datos/vendedores.json")
      .then((response) => {
        this.Vendedores = response.data.vendedores;
      })
      .catch((error) => {
        console.log(error);
      });

    // Oficina
    axios
      .get("./datos/oficinas.json")
      .then((response) => {
        this.oficina = response.data.oficinas;
      })
      .catch((error) => {
        console.log(error);
      });

    // manager
    axios
      .get("./datos/managers.json")
      .then((response) => {
        this.manager = response.data.managers;
      })
      .catch((error) => {
        console.log(error);
      });
  },

 
};
</script>

<style lang="scss" scoped>
.color {
  background-color: rgb(219, 144, 144);
}
</style>

<template>
    <div class="p-3">
        <h6 class="header">Home >> Monitor de Vendedores >> Ficha vendedor</h6>
        <h1>Ficha Vendedores</h1>
          <!-- pestañas internas -->
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-general-tab" data-toggle="tab" href="#nav-general" role="tab" aria-controls="nav-general" aria-selected="true">General</a>
              <a class="nav-item nav-link" id="nav-cc-tab" data-toggle="tab" href="#nav-cc" role="tab" aria-controls="nav-cc" aria-selected="false">Cartera Clientes</a>
              <a class="nav-item nav-link" id="nav-cump-tab" data-toggle="tab" href="#nav-cump" role="tab" aria-controls="nav-cump" aria-selected="false">Cumplimiento</a>
            </div>
          </nav>
          <!-- contenido pestañas internas -->
          <div class="tab-content" id="nav-tabContent">

            <!-- general -->
            <div class="tab-pane fade show active" id="nav-general" role="tabpanel" aria-labelledby="nav-general-tab">

              <div class="formulario">
                <div class="p-5">

                  <div class="form row">
                    <label class="col-12 col-md-3 col-lg-3 col-form-label">ID Vendedor</label>
                    <label class="col-12 col-md-3 col-lg-3 col-form-label">{{vendedores.id}}</label>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-12 col-md-3 col-lg-3 col-form-label">Nombre</label>
                    <label class="col-12 col-md-3 col-lg-3 col-form-label">{{vendedores.nombre}}</label>
                  </div>
                  
                  <div class="form-group row">
                    <label class="col-12 col-md-3 col-lg-3 col-form-label">Email</label>
                    <label class="col-12 col-md-3 col-lg-3 col-form-label">{{vendedores.email}}</label>
                  </div>

                  <div class="form-group row">
                    <label class="col-12 col-md-3 col-lg-3 col-form-label">Telefono</label>
                    <label class="col-12 col-md-3 col-lg-3 col-form-label">{{vendedores.fono}}</label>
                  </div>

                  <div class="form-group row">
                    <label class="col-12 col-md-3 col-lg-3 col-form-label">Oficina</label>
                    <label class="col-12 col-md-3 col-lg-3 col-form-label">{{vendedores.oficina}}</label>
                  </div>

                  <div class="form-group row">
                    <label class="col-12 col-md-3 col-lg-3 col-form-label">Maneger</label>
                    <label class="col-12 col-md-3 col-lg-3 col-form-label">Ema{{vendedores.Manager}}il</label>
                  </div>

                </div>
              </div>
              

            </div>

            <!-- cartera clientes -->
            <div class="tab-pane fade" id="nav-cc" role="tabpanel" aria-labelledby="nav-cc-tab">
                <table class="table table-responsive-xl">
                    <thead>
                    <tr>
                        <th scope="col">ID Cliente</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Segmento</th>
                        <th scope="col">Venta Periodo</th>
                        <th scope="col">Meta Periodo</th>
                        <th scope="col">Cumplimiento</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cartera, index) in cartera" :key="index">
                            <td>{{cartera.id_cliente}}</td>
                            <td>{{cartera.nombre}}</td>
                            <td>{{cartera.Segmento}}</td>
                            <td>${{cartera.venta}}</td>
                            <td>{{cartera.meta}}</td>
                            <td>
                                <div class="progress" style="height: 20px;">
                                    <div class="progress-bar" role="progressbar" style="width: 35%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- cumplimineto -->
            <div class="tab-pane fade" id="nav-cump" role="tabpanel" aria-labelledby="nav-cump-tab">

                <table class="table table-responsive-xl">
                    <thead>
                        <tr>
                            <th scope="col">Periodo</th>
                            <th scope="col">Venta Unid</th>
                            <th scope="col">Venta Pesos</th>
                            <th scope="col">Meta Periodo</th>
                            <th scope="col">Cumplimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cumplimiento, index) in cumplimiento" :key="index">
                            <td>{{cumplimiento.periodo}}</td>
                            <td>{{cumplimiento.venta_unidades}}</td>
                            <td>{{cumplimiento.venta_pesos}}</td>
                            <td>{{cumplimiento.meta}}</td>
                            <td>
                                <div class="progress" style="height: 20px;">
                                    <div class="progress-bar" role="progressbar" style="width: 35%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div class="d-flex flex-row justify-content-center  ">
            
              <a class="button form-control btn-primary tamaño" href="/vendedores" >🢀</a>
        </div>
            
           
          </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "FichaVendedor",
        data(){
            return{
                vendedores: {},  
                cartera: {},
                cumplimiento: {}     
            }
        },
        mounted() {
            // ficha vendedor general
            axios.get('../ficha_vendedor.json').then(response => {
                this.vendedores = response.data.vendedor;
            }).catch(error => {
                console.log(error)
            })

            // ficha vendedor cartera
            axios.get('../ficha_vendedor.json').then(response => {
                this.cartera = response.data.cartera;
            }).catch(error => {
                console.log(error)
            })

            // ficha vendedor cumplimiento
            axios.get('../ficha_vendedor.json').then(response => {
                this.cumplimiento = response.data.cumplimiento;
            }).catch(error => {
                console.log(error)
            })
        },


     
    }
</script>

<style lang="scss" scoped>

.tamaño{
    width: 5%;
    text-align: center;  
}

</style>
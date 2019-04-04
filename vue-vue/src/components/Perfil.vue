<template lang="html">

  <div class="container" id="content">
    <flash-message v-if="err" class="" autoHide variant="danger" transitionIn="animated rubberBand"></flash-message>
      <div class="row p-4">
        <div class="col-md-9 col-lg-9 mx-auto">
          <div class="card shadow-lg bg-white">

            <div class="card-header">
              <h2>PERFIL DEL CONDUCTOR</h2>
            </div>

            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion1 variant="primary">Ver Información Personal</b-btn>

              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">+57</div>
                </div>
                <input type="number" v-model="user.phone" class="form-control" id="inlineFormInputGroupUsername" placeholder="Phone" disabled>
              </div>

            </b-card-header>

              <!--b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel"-->
              <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">

                <b-card-body>
              <form v-on:submit.prevent="updateProfileInfo()">

                <div class="form-group">
                  <input type="text" v-model="user.first_name" class="form-control" placeholder="First Name">
                </div>
                <div class="form-group">
                  <input type="text" v-model="user.last_name" class="form-control" placeholder="Last Name">
                </div>
                <div class="form-group">
                  <input type="text" v-model="user.email" class="form-control" placeholder="Email">
                </div>
                <div class="form-group">
                  <input type="text" v-model="user.credit_card" class="form-control" placeholder="Credit-card Number">
                </div>
                <div class="form-group">
                  <button class="btn btn-outline-danger btn-block">Actualizar</button>
                </div>
                </form>
                  </b-card-body>
                </b-collapse>


                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion2 variant="primary">Ver vehículos a disposición</b-btn>
                    <br>

                      <div class="form-group">
                       <label for="sel1">Por favor seleccione un vehículo para continuar:</label>
                       <select class="form-control" id="sel1">
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                       </select>
                     </div>

                </b-card-header>

                <b-collapse id="accordion2" visible accordion="my-accordion2" role="tabpanel">
                  <b-card-body>

                    <!--Hacerlo con los taxis-->
                    <h1>Taxis....coming soon v;</h1>
                      <div v-for="(item, index) in favorite_places" :key="index" v-on:click="showingPlace(index)" class="alert alert-primary alert-dismissible fade show pdleft">
                        {{item.title}}
                        <button v-on:click="remove(item.id)" class="close" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <button v-on:click="updateObj(item.id, item.title)" class="close myclose" v-b-modal.myEditModal>
                          <img src="@/assets/edit3.png">
                        </button>
                      </div>
                    </b-card-body>
                </b-collapse>



              <hr>

              <div class="form-group">
                <router-link :to="{ path: 'mapa', params: {} }">
                  <button class="btn btn-success btn-block">Continuar</button>
                </router-link>
              </div>

              <router-link :to="{ path: 'about', params: {} }">
                About us
              </router-link>
              <p></p>

          </div>
        </div>

      </div>
    </div>
</template>

<script>

export default {
  data(){
    return{
      user: {
        fname: null,
        lname: null,
        phone: null,
        email: null,
        credit_card: null,
        password: null,
        passConf: null
      },
      err: false
    }
  },



}
</script>

<style lang="css">


  .container{
    padding: 0px;
  }





</style>

<template>
  <div id="navegar">

    <nav class="navbar navbar-expand-lg navbar-light fixed-top"style="background-color: #FFA500;">

      <div class="collapse navbar-collapse" id="taxicon">
        <a class="navbar-brand"><h4><strong><i class="fas fa-taxi"></i> ThatEasyTaxi</strong></h4></a>
      </div>


      <a class="navbar-toggler"><h4><strong><i class="fas fa-taxi"></i>ThatEasyTaxi</strong></h4></a>
      <!--Boton cuando se encoje la pagina-->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


<!--
<toggle-button v-model="myDataVariable"/>

<toggle-button :value="false"
               color="#82C7EB"
               :sync="true"
               :labels="true"/>
-->

      <div class="collapse navbar-collapse" id="navbarNav">

        <ul class="navbar-nav ml-auto">

          <li class="nav-item">
            <toggle-button :value="true"
                           :color="{checked: '#218e16', unchecked: '#c7351f', disabled: '#CCCCCC'}"
                           :fontSize=18
                           :width=150
                           :height=40
                           :labels="{checked: 'Disponible', unchecked: 'Ocupado'}"/>
          </li>

          <li class="nav-item">
            <!--<a class="nav-link" href="#">Mi Perfil</a>-->
            <router-link :to="{ path: '/perfil' }" class="nav-link">Perfil</router-link>
          </li>

          <li class="nav-item">
            <!--<a class="nav-link" href="#">Configuración</a>-->
            <router-link :to="{ path: '/configuracion' }" class="nav-link">Configuración</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ path: '/home' }" class="nav-link">Salir</router-link>
          </li>

        </ul>
      </div>
    </nav>

    <router-view/>
  </div>




</template>


<script >
import HelloWorld from '@/components/HelloWorld.vue';

export default{


};
</script>


<style>
.navbar{
    box-shadow: 2px 2px 5px #000;

    /*top right bottom left*/
    padding: 5px 15px 0px 15px;
}

.navbar .form-inline{
  padding-left: 15px;
}

.navbar .nav-item{
    text-align: left;
}

.navbar .nav-item .nav-link{
  text-align: left;
  font-weight: bolder;

  padding-left: 10px;
  color: #fff;
}

/*
#navegar{
  padding: 10px;/*para visualizar lo que hay bajo nav*/

</style>

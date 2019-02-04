<template>
  <div class="divHome">
    <link href="https://fonts.googleapis.com/css?family=Pompiere" rel="stylesheet">
    <h1 id="title">Univalle Taxi</h1>

      <div class="choose">

        <router-link :to="{  name: 'login', params: {} }" class="btn btn-warning" style="margin: 5px">
          <img src="@/assets/taxi-driver.png">
          <p>Ingresar</p>
        </router-link>

      </div>

  </div>

</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  }
}
</script>

<style>
#title{
  font-family: 'Pompiere', cursive;
  font-size: 90px;
  margin-top: 155px;
}

#divHome{
  top: 0px,auto;
  height: 600px;
  text-align: left;
}



</style>

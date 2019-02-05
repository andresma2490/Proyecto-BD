<template>

  <l-map id="elMapa" ref="elMapa" :min-zoom="minzoom" :max-zoom="maxzoom" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

  </l-map>
</template>


<script>

import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    name: 'MyAwesomeMap',
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    data(){
      return {
        zoom:11 /*13*/,
        minzoom:13, //1 or 13
        maxzoom:18, //18
        center: L.latLng(3.4216, -76.5120),
        url:'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: L.latLng(3.4516, -76.5320),
      }
    }
}
</script>


<style>
  #elMapa{
    height: 600px;
    width: 100%;
  }
</style>

<template>
  
  <l-map style="height: 80%; width: 100%" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng" ></l-marker>
  </l-map>
</template>

<script>




import { LMap, LTileLayer, LMarker, LIcon, LPopup, LPolyline } from 'vue2-leaflet';
import "leaflet/dist/leaflet.css";

export default {
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 3,
      center: [47.413220, -1.219482],
      markerLatLng: [47.313220, -1.319482]
    };
  }
}
</script>

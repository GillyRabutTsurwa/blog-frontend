<template>
  <div id="mapContainer"></div>
</template>
  
<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const state = reactive({
  map: null,
});

onMounted(() => {
  // const coordinates = [latitude, longitude];
  // NOTE: this value was originally in the setView method, but i'm putting it in a variable for more clarity. change it to play around with it
  const zoomLevel = 10;

  // NOTE: it seems this is the entry point of rendering the map
  state.map = L.map("mapContainer").setView([39.18566, -78.163334], zoomLevel); // ("map") signifie un element dans notre HTML ayant le ID de "map"

  /**
   * NOTE:
   * tile layers affecct the appearance of the map
   * apparently there's all sorts and are customisable by simply changing the url (1st parametre of the tileLayer())
   */
  L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(state.map);

  // NOTE: and this displays the map marker
  L.marker([39.18566, -78.163334]).addTo(state.map).bindPopup("A pretty CSS3 popup.<br> Easily customizable.").openPopup();
});
</script>
  
  <style>
#mapContainer {
  width: 40vw;
  height: 50vh;
}
</style>
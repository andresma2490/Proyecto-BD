//Mapa con leaflet
var map= L.map('el_mapa').setView([3.4338,-76.5164], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

//marcador de prueba
const marker= L.marker([3.3752,-76.53333])
    .addTo(map)
    .bindPopup('Hogar de Vagón');


map.locate({enableHighAccuracy: true});//Localización del sujeto
map.on('locationfound', e =>{//event
  console.log(e);//muestra la info de locate (ntra ubicación)
  const coordenadas= [e.latlng.lat, e.latlng.lng];
  //marcador donde estas
  const you= L.marker(coordenadas)
  .addTo(map)
  .bindPopup('Usted esta aquí')
  .openPopup();
});





//

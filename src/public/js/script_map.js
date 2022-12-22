// MAPAS 

// import { buoys } from "../layers/buoys";

//variables que contienen los puntos (centro de despliegues y marcadores)
var center = [51.505, -0.09];
//capas base
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
  minZoom: 10
});
var dark = L.tileLayer('https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png');
var ocean = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}',
{
  maxZoom: 10
});
//mapa
var map = L.map('map', {
        layers: [dark,osm,ocean],
        center: center,
        zoom: 10,
        zoomControl: false
});
//marcadores
var singleMarker = L.marker(center);
singleMarker.addTo(map);
var popup = singleMarker.bindPopup('This is a popup');
popup.addTo(map);
//control capas
var baseLayers = {
"Dark": dark,
"Ocean": ocean
};
var overlays = {
"Marker": singleMarker
};
var layer_control = L.control.layers(baseLayers,overlays);
layer_control.addTo(map);
//control escala
var scale_control = L.control.scale({position: 'bottomright'});
scale_control.addTo(map);
//control zoom 
var zoom_control = L.control.zoom({position: 'bottomright'});
zoom_control.addTo(map); 

var wmsbuoys = L.tileLayer.wms('http://localhost:8080/geoserver/Buoyviewer/wms', {
  layers: 'Buoys',
  style: 'burg'
}).addTo(map);
// function popup(feature, layer) {
//   if (feature.properties && feature.properties.cruise) {
//     layer.bindPopup("<strong>cruise: </strong>" + feature.properties.cruise + "</br>");
//   }
// }

// L.geoJson(buoys).addTo(map);

// var buoysJS = L.geoJson(buoys, {
//   onEachFeature: popup
// }).addTo(map);
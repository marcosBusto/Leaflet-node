//variables que contienen los puntos (centro de despliegues y marcadores)
var center = [51.505, -0.09];
//capas base
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png');
var dark = L.tileLayer('https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png');
//mapa
var map = L.map('map', {
        layers: [dark,osm],
        center: center,
        zoom: 14
});
//marcadores
var singleMarker = L.marker(center);
singleMarker.addTo(map);
var popup = singleMarker.bindPopup('This is a popup');
popup.addTo(map);
//control de capas
var baseLayers = {
"Dark": dark,
"OpenStreetMap": osm
};
var overlays = {
"Marker": singleMarker
};
var control = L.control.layers(baseLayers,overlays);
control.addTo(map);
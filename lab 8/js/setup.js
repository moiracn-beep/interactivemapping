var map = L.map('map', {
  center: [40.4432, 79.9428],
  zoom: 18,
});


// Search Addresses
L.Control.geocoder({
  defaultMarkGeocode: false
})
  .on('markgeocode', function(e) {
    map.fitBounds(e.geocode.bbox);
  })
  .addTo(map);

map.locate({ setView: true, maxZoom: 18 });

map.on('locationfound', function(e) {
  L.marker(e.latlng).addTo(map)
    .bindPopup("You are here").openPopup();
});


//Scale bar
L.control.scale().addTo(map);

// --- Basemap options ---
var Satellite = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

var CartoLight = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var CartoDark = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var StamenTerrain = L.tileLayer(
  'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
  { attribution: 'Map tiles by Stamen Design — Data © OpenStreetMap' }
);


var EsriTopo = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

var EsriSat = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

// Default basemap
Satellite.addTo(map);

// You can add or remove basemaps here. A button will appear top right of map to toggle.
var baseMaps = {
  "Satellite (Esri)": EsriSat,
  "CARTO Light": CartoLight,
  "CARTO Dark": CartoDark,
  "Stamen Terrain": StamenTerrain,
  "Esri Topo": EsriTopo
};

L.control.layers(baseMaps).addTo(map);


//// adding shapes to the map


// Make a simple circle
var circle = L.circle([39.983219999796114, -75.15256557830536], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5
}).addTo(map);

// Make a shape
var polygon = L.polygon([
    [39.982739776172565, -75.15452518555603],
    [39.98265756770085,  -75.15402093032024],
    [39.982254744759665, -75.15411748983348],
    [39.98227118655885,  -75.15448227021682],
    [39.98195057076098,  -75.15454664322564],
    [39.98204100101016,  -75.1547290334173],
    [39.982739776172565, -75.15456810089525],
    [39.982739776172565, -75.15452518555603]
]).addTo(map);

polygon.bindPopup("Doherty Hall");

// Add a marker
L.marker([40.44152556360597, -79.95678306119423])
  .addTo(map)
  .bindPopup("My Favorite Boba Shop");


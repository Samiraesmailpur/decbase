mapboxgl.accessToken =
  'pk.eyJ1Ijoic3Nxb29sIiwiYSI6ImNraWplbms2dDAxeHoycnA4czNuMHZvMHYifQ.ZHj3Eb9wzbS5HcPlhVN7NQ';
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
  container: 'coordinates',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [30.5234, 50.4501],
  zoom: 9,
});

const marker = new mapboxgl.Marker({
  draggable: true,
})
  .setLngLat([30.5234, 50.4501])
  .addTo(map);

const popup = new mapboxgl.Popup().setHTML('<p>Ми з України.</p>');

marker.setPopup(popup);
function onDragEnd() {
  const lngLat = marker.getLngLat();
  coordinates.style.display = 'block';
  coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}

marker.on('dragend', onDragEnd);

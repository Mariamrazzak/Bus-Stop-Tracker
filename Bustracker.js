// This array contains the coordinates for all bus stops on the Imagine Austin Line
const busStops = [
  [-97.651578632876, 30.336418601648],
  [-97.651416578796, 30.336402381465],
  [-97.651243499752, 30.336387505985],
  [-97.651059434086, 30.336373980475],
  [-97.650864427541, 30.336361805847],
  [-97.650658524719, 30.336350986593],
  [-97.650441791066, 30.336341525834], 
  [-97.649976108689, 30.336326690801],
  [-97.649467754365, 30.336317318033],
  [-97.648917848757, 30.336313432293],
  [-97.648327484919, 30.336315040597], 
  [-97.647698277381, 30.336322139207], 
  [-97.647009470959, 30.336335215836], 
  [-97.646284756699, 30.336354065776],
  [-97.645528478738, 30.336378576452],
  [-97.64474838057, 30.336408498202],
  [-97.643934374019, 30.336444398638], 
  [-97.643129293218, 30.336484563489],
  [-97.642364913966, 30.336527467963],
  [-97.641732913243, 30.336567991638], ];
  // Add your own access token for mapbox
  mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWFtcmF6emFrMSIsImEiOiJjbDd2M2EzczcwMXVoM25uM2xoZTIwdGg2In0.vb3DhokI141bxGmwa5M9pA';
  
let map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mapbox/streets-v11', 
  center: [-97.651578632876, 30.336418601648], 
  zoom: 49
});
  // Marker added to the map at the first coordinates in the array busStops. 
var marker = new mapboxgl.Marker()
  .setLngLat([-97.651578632876, 30.336418601648])
  .addTo(map);
 
let counter = 0;  
function move() {
  setTimeout(() =>{ 
    if (counter >= busStops.length) return;  
    marker.setLngLat(busStops[counter]); 
    counter++; 
    move(); 
  }, 1000); 
}
  
  // Do not edit code past this point
if (typeof module !== 'undefined') { module.exports = { move }; }

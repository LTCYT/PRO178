let latitude=22.7868542, longitude=88.3643296;

// Intializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibHRjMTIzIiwiYSI6ImNsb2tudjJvZjBxYWUya21vczE3cnhjajcifQ.zuw2UaSF7Are2rcFeYKacw'

var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 16
});

var img1 = document.querySelector("#MONUMENT")
var img2 = document.querySelector("#MONUMENT1")
var img3 = document.querySelector("#MONUMENT2")
var img4 = document.querySelector("#MONUMENT3")


// Create a Monument, Marker and add it to the map
var marker1 = new mapboxgl.Marker({
        element:img1
})
.setLngLat([53.559, 28.246])
.addTo(map);
var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([80.85133, 26.98547])
.addTo(map);
var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([43.8803, 10.4538])
.addTo(map);
var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([90.85133, 21.98547])
.addTo(map);

map.addControl(
        new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
        })
);
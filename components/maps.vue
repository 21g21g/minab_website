<template>
    <!-- The map container with defined height and width -->
    <div class="mt-8" id="map" style="height: 300px; width: 300px;"></div>
  </template>
  
  <script setup>
  import { Loader } from '@googlemaps/js-api-loader'; 
  import { ref, onMounted } from 'vue'; 
  
  const map = ref(null); 
  const marker = ref(null); 
  
  let loaderInstance = null;
  
  function getGoogleMapsLoader() {
    if (!loaderInstance) {
      loaderInstance = new Loader({
        apiKey: "AIzaSyDenHT2SGUaSm0MQJ48EqMhbfy0sH379rs", 
        version: "weekly", 
        libraries: ["places"] // Libraries to load (in this case, "places")
      });
    }
    return loaderInstance; 
  }
  
  // Map options: setting center (latitude, longitude) and initial zoom level
  const mapOptions = {
    center: {
      lat: 9.03, 
      lng: 38.74 
    },
    zoom: 12 
  };
  
  // Marker options: setting position and style
  const markerOptions = {
    position: { lat: 9.03, lng: 38.74 }, // Position for the marker (Addis Ababa)
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" // Red marker icon
    }
  };
  
  onMounted(() => {
    const loader = getGoogleMapsLoader(); // Get the Google Maps loader instance
    loader.load()
      .then((google) => {
        // Initialize the map when the loader finishes loading the Google Maps script
        map.value = new google.maps.Map(document.getElementById("map"), mapOptions);
  
        marker.value = new google.maps.Marker({
          ...markerOptions, // Spread marker options (position and icon)
          map: map.value // Assign the map to the marker
        });
      })
      .catch(e => {
        console.error("Error loading Google Maps", e);
      });
  });
  </script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Remove the default Leaflet icon URL references
delete L.Icon.Default.prototype._getIconUrl;

// Configure the default icon options, centering the icon
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl: 'https://www.minabtech.com/icons/minab.svg',  // Custom icon URL
  iconSize: [30, 30],  // Icon size (width x height)
  iconAnchor: [15, 15],  // Center the icon at half the width and height
  shadowUrl,  // Optional: marker shadow image
});

// Define the Nuxt plugin to provide Leaflet globally
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('L', L); 
});
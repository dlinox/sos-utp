<template>
  <v-app>
    <v-app-bar app title="Seguridad Ciudadana" color="primary">
      <v-icon class="me-3">mdi-shield-account</v-icon>
    </v-app-bar>
    <v-main>
      <v-carousel
        height="200"
        hide-delimiter-background
        hide-delimiters
        cycle
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="(item, index) in relevantInfo"
          :key="index"
          :src="item"
        ></v-carousel-item>
      </v-carousel>
      <v-container>
        <v-card subtitle="Numeros de emergencia" class="pa-2">
          <v-list>
            <v-list-item
              v-for="(emergencyNumber, index) in emergencyNumbers"
              :key="index"
              link
              :href="'tel:' + emergencyNumber.number"
            >
              <v-list-item-title>{{ emergencyNumber.name }}</v-list-item-title>
              <v-list-item-subtitle>{{
                emergencyNumber.number
              }}</v-list-item-subtitle>

              <template #append>
                <v-btn icon color="primary" density="compact">
                  <v-icon>mdi-phone</v-icon>
                </v-btn>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-container>
      <v-card class="mb-4" variant="tonal">
        <v-card-item style="height: 250px">
          <div id="mapContainer" style="height: 250px"></div>
        </v-card-item>
      </v-card>
    </v-main>
    <v-bottom-navigation app>
      <v-btn value="geolocation" @click="activateGeolocation">
        <v-icon>mdi-map-marker</v-icon>

        <span>Ubicación</span>
      </v-btn>

      <v-btn
        value="alert"
        size="x-large"
        variant="flat"
        class="mx-auto btn-alert"
        v-tooltip:top="'Enviar alerta'"
        @click="sendAlert"
      >
        <v-icon>mdi-alpha-a-circle-outline</v-icon>

        <span>Alerta</span>
      </v-btn>

      <v-btn
        value="whatsapp"
        link
        href="https://chat.whatsapp.com/LHvpoQNQkpAE2oALaACMAp"
      >
        <v-icon> mdi-whatsapp </v-icon>
        <span> Grupo </span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
<script setup lang="ts">
import { ref } from "vue";
import L from "leaflet";

import { sendAlert } from "@/app/modules/client-panel/services";

const lat = ref(-15.900224453828727);
const lng = ref(-70.03838594026693);

const onUpdatedLocation = () => {
  initMap();
};

const initMap = () => {
  var iconoPersonalizado = L.icon({
    iconUrl: "/marker_red.png",
    iconSize: [35, 35], // Tamaño del ícono
    iconAnchor: [15, 15], // Punto de anclaje del ícono
  });
  const idMap = "mapContainer" as string;
  const map = L.map(idMap).setView([lat.value, lng.value], 7);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  let marker = L.marker([lat.value, lng.value]);
  marker.setIcon(iconoPersonalizado);

  marker.setLatLng([lat.value, lng.value]).addTo(map);
};

//activar geolocalizacion
const activateGeolocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lat.value = position.coords.latitude;
      lng.value = position.coords.longitude;
      onUpdatedLocation();
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

// numeros de emergencia
const emergencyNumbers = [
  {
    name: "Bomberos",
    number: "116",
    image: "https://www.bomberosperu.gob.pe/Imagenes/Noticias/23015.jpeg",
  },
  {
    name: "Policia",
    number: "105",
    image:
      "https://cdn.www.gob.pe/uploads/document/file/5526211/878150-408977684_664318045874096_3757839972358280228_n.jpg",
  },
  {
    name: "Ambulancia",
    number: "106",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3oXLm9C8n1QrVbjNc0-TZIovG1EvHout7w&s",
  },
  {
    name: "Serenazgo",
    number: "110",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixHcnwik1lhPONcjar_N-p2WGOrmB0_GrFUVFfEuKOwM0OmQNEkxoD3tb9k1MXkK0gGI&usqp=CAU",
  },
];
//informacion relevante imgs
const relevantInfo = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxmT3TWlmZBa7H8FyPYdiiOq3cirr_rVrh9zza6UR-KXsp0JjHr5EkVmV7KilejMRax2l5ioixBm6wUQ8BzxgOdDyq1j3qjqaFhSFcg7aO_5YgXX2kZVRiDomJuO48WGvyoERlhA0NsCOt/s1600/aa.jpg",
  "https://www.hejcu.gob.pe/images/SLIDER-WEB_NMEROS-DE-EMERGENCIA_Mesa-de-trabajo-1.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjltAHQ4ibw3hMMZ4uDMWbWKW5HwuK-tAcw&s",
];
</script>

<style>
.btn-alert {
  background-color: #f44336;
  color: white;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  margin-bottom: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>

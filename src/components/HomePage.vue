<template>
  <div>
    <v-app>
      <Header />
      <v-main>
        <v-container> <weather-card /> </v-container
      ></v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "App",
  components: { WeatherCard, Header, Footer },

  data() {
    return {};
  },
};
</script>
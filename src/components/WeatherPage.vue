<template>
  <div>
    <v-row class="city_list mx-4">
      <v-col xl="4" md="4" class="d-flex flex-wrap">
        <weather-card v-for="city in citiesData" :key="city.id" :city="city" class="my-1 mx-1"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue";
import { cities } from "../data/cityData";

export default {
  components: { WeatherCard },
  data() {
    return {
      citiesData: cities,
    };
  },
};
</script>
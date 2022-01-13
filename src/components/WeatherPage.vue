<template>
  <div>
    <v-row class="city_list mx-4">
      <v-btn @click="locatorButtonPressed">get location</v-btn>
      <v-col
        xl="4"
        md="4"
        class="d-flex flex-wrap"
        v-if="allCities && allCities.length > 0"
      >
        <weather-card
          v-for="city in allCities"
          :key="city.id"
          :city="city"
          class="my-1 mx-1"
        ></weather-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <select v-model="selected">
          <option disabled value="">Choose one of cities</option>
          <option
            v-for="(selectedCity, index) in citiesForSelected"
            :key="index"
          >
            {{ selectedCity.name }}
          </option>
        </select>
        <span>Выбрано: {{ selected }}</span>
        <v-btn @click="addCityCard(selected)">+</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue";
import { cities } from "../data/cityData";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  components: { WeatherCard },
  data() {
    return {
      citiesData: cities,
      selected: "",
      citiesForSelected: [
        { name: "Kyiv" },
        { name: "Lviv" },
        { name: "Odessa" },
        { name: "Kharkiv" },
        { name: "Dnepr" },
        { name: "Poltava" },
        { name: "Donetsk" },
      ],
      selectedCity: null,
      geolocation: {
        lat: null,
        lon: null,
      },
    };
  },
  computed: {
    ...mapState({
      allCities: "weatherData",
    }),
  },
  methods: {
    addCityCard(name) {
      this.getWeatherByCityName(name);
    },
    locatorButtonPressed() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (geolocationData) => {
            this.geolocation = {
              lat: geolocationData.coords.latitude,
              lon: geolocationData.coords.longitude,
            };
            this.getWeatherByCityLocation(this.geolocation);
          },
          (error) => {
            console.log(error.message);
          }
        );
      } else {
        console.log("Your browser does not support geolocation API");
      }
    },
    ...mapActions(["getWeatherByCityName", "getLocationApi"]),
    ...mapMutations(["updateWeatherData", "removeFromWeatherData"]),
  },
};
</script>
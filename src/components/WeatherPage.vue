<template>
  <div class="wrapper d-flex flex-column justify-center">
    <div class="d-flex align-center justify-space-around wrapper">
      <div
        xl="4"
        md="4"
        class="d-flex column"
        v-if="allCities && allCities.length > 0"
      >
        <weather-card
          v-for="city in allCities"
          :key="city.id"
          :city="city"
          class="my-1 mx-1"
        ></weather-card>
      </div>
    </div>
    <div class="d-flex justify-center mb-20">
      <v-btn
        button
        elevation="3"
        fab
        outlined
        color="white lighten-3 "
        class="add-btn"
        @click="addCityCard(selected)"
        >add</v-btn
      >

      <select
        v-model="selected"
        onblur="this.size=1;"
        onchange="this.size=1; this.blur();"
      >
        <option disabled value="">Choose one of cities</option>
        <option v-for="(selectedCity, index) in citiesForSelected" :key="index">
          {{ selectedCity.name }}
        </option>
      </select>
    </div>
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
        { name: "Cherkasy" },
        { name: "Chernihiv" },
        { name: "Ternopil" },
        { name: "Zhytomyr" },
        { name: "Vinnytsia" },
        { name: "Rivne" },
        { name: "Luhansk" },
        { name: "Khmelnytsk" },
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
    ...mapActions([
      "getWeatherByCityName",
      "getLocationApi",
      "getWeatherByCityLocation",
    ]),
    ...mapMutations(["updateWeatherData", "removeFromWeatherData"]),
  },
  mounted() {
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
};
</script>

<style lang="scss" scoped>
select {
  margin-bottom: 30px;
  border: 2px solid white;
  color: white;
  margin-left: 30px;
  border-radius: 8px;
  font-size: 20px;
  background: rgba(155, 155, 155, 0);
  margin-top: 10px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.349);
  padding: 5px;
  // position: absolute;
  // right: 35%;
  &:hover {
    border: 2px solid rgb(70, 203, 255);
    transition: 0.25s ease;
  }
  &:focus {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    color: black;
  }
  & option {
    background-color: white;
  }
}
.wrapper {
  min-width: 100%;
}
.column {
  flex-wrap: wrap;
}
</style>
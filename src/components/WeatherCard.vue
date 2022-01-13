<template>
  <v-row>
    <v-col class="weather__component">
      <v-card class="city__card">
        <div class="click-zone" @click="show = true">
          <v-card-title>
            <h3>{{ city.temp }}</h3>
            <h3>{{ city.name }}</h3>
            <p>id: {{ city.id }}</p>
            <!-- <p
              v-for="weatherData in allallWeatherData"
              :key="weatherData.weather.id"
            >
              123
            </p> -->
          </v-card-title>
          <v-img height="250"></v-img>
        </div>
        <v-card-text>
          <div class="click-zone" @click="show = true">
            <p>
              <b>sdasd </b>
            </p>
            <!-- <p v-if="weather">{{ weather }}&deg;C</p> -->
            <p>asd</p>
          </div>
          <v-btn color="orange" plain outlined depressed elevation="3" rounded
            ><router-link
              :to="{ name: 'CityPageCard', params: { id: city.id } }"
              tag="button"
              >More details</router-link
            ></v-btn
          >
          <v-btn
            color="orange"
            plain
            outlined
            depressed
            elevation="3"
            rounded
            @click="intervalData"
            >refresh</v-btn
          >
          <v-btn
            color="orange"
            plain
            outlined
            depressed
            elevation="3"
            rounded
            @click="removeFromWeatherData(city.id)"
            >remove</v-btn
          >
        </v-card-text>
      </v-card>
    </v-col>

    <modal-window :temp="city.temp" :show="show" v-if="show" @close="show = false" />
  </v-row>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

import ModalWindow from "./ModalWindow.vue";

export default {
  name: "WeatherCard",
  components: {
    ModalWindow,
  },
  props: {
    city: Object,
  },
  data() {
    return {
      show: false,

    };
  },
  methods: {
    intervalData() {
      setTimeout(() => this.getWeatherByCityId(this.city.name), 1000);
      console.log("weqweqw");
    },
    ...mapActions(["getWeatherByCityName"]),
    ...mapMutations(["removeFromWeatherData"]),
  },
  // created() {
  //   console.log("Weather Card");
  //   this.getWeatherByCityName(this.city.name);
  //   const locationCheck = window.location.pathname.split("/");
  //   this.cityId = locationCheck[locationCheck.length - 1];
  // },
};
</script>

<style lang="scss" scoped>
// ::-webkit-scrollbar {
//   width: 0;
// }
</style>
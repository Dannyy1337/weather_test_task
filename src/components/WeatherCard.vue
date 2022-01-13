<template>
  <v-row>
    <v-col class="weather__component">
      <v-card class="city__card" v-if="deleteCard">
        <div class="click-zone" @click="show = true">
          <v-card-title>
            <h3>{{ temp }}</h3>
            <h3>{{ name }}</h3>
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
            @click="deleteCard = false"
            >remove</v-btn
          >
        </v-card-text>
      </v-card>
    </v-col>

    <modal-window :temp="temp" :show="show" v-if="show" @close="show = false" />
  </v-row>
</template>

<script>
import axios from "axios";
import ModalWindow from "./ModalWindow.vue";
// import {cities} from '../data/cityData'

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
      temp: null,
      show: false,
      deleteCard: true,
    };
  },
  methods: {
    async callApi(city) {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d1c911f8b78b22a045fb3362c92c74f4`
        )
        .then((response) => {
          this.temp = response.data.main.temp;
          this.name = response.data.name;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    intervalData() {
      setTimeout(() => this.callApi(this.city.name), 1000);
      console.log("timeout");
    },
  },
  created() {
    this.callApi(this.city.name);
  },
};
</script>

<style lang="scss" scoped>
// ::-webkit-scrollbar {
//   width: 0;
// }
</style>
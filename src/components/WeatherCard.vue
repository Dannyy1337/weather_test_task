<template>
  <v-row>
    <v-col class="weather__component">
     

      
          <v-card class="city__card">
            <v-card-title>
              <h3>{{ temp }}</h3>
            </v-card-title>
            <v-img height="250"></v-img>
            <v-card-text>
              <p>
                <b>sdasd </b>
              </p>
              <!-- <p v-if="weather">{{ weather }}&deg;C</p> -->
              <p>asd</p>
              <v-btn
                color="orange"
                plain
                outlined
                depressed
                elevation="3"
                rounded
                ><router-link
                  :to="{ name: 'CityPageCard', params: { id: city.id } }"
                  tag="button"
                  >More details</router-link
                ></v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    
</template>

<script>
import axios from "axios";
// import {cities} from '../data/cityData'

export default {
  name: "WeatherCard",
  props: {
    city: Object,

  },
  data() {
    return {
      temp: null,
    };
  },
  methods: {
    async callApi(city) {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d1c911f8b78b22a045fb3362c92c74f4`
        )
        .then((response) => {
          (this.temp = response.data.main.temp)

        })
        .catch((error) => {
          console.error(error);
        });
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
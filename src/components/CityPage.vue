<template>
  <div>
    <v-row>
      <v-col md="5">
        <v-card>
          <v-card-title class="d-flex justify-space-between flex-wrap">
           
            <h2 class="text-h2">{{ temp }}&deg;</h2>
            <h2 class="text-h2">{{ name }}</h2>
             <v-img :src="iconRef" max-height="100" max-width="100"></v-img>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col md="7">
        <v-card class="h-100">
          <v-card-text>
            <h4 class="text-h4 mb-4 font-weight-bold">Details</h4>

            <v-divider></v-divider>
            <p class="text-h5 font-weight-bold">
              Weather description:
              <span class="grey-text">
                {{ main }} <i class="fas fa-rainbow"></i
              ></span>
            </p>
            <p class="text-h5 font-weight-bold">
              Minimal temperature:<span class="grey-text">
                {{ minTemp }}&deg; <i class="fas fa-temperature-low"></i
              ></span>
            </p>
            <p class="text-h5 font-weight-bold">
              Maximal temperature:<span class="grey-text">
                {{ maxTemp }}&deg; <i class="fas fa-temperature-high"></i
              ></span>
            </p>
            <p class="text-h5 font-weight-bold">
              Feels like temperature:<span class="grey-text">
                {{ feelsLikeTemp }}&deg; <i class="fas fa-thermometer-half"></i
              ></span>
            </p>
            <p class="text-h5 font-weight-bold">
              Wind gust:<span class="grey-text">
                {{ windGust }} <i class="fas fa-wind"></i
              ></span>
            </p>
            <p class="text-h5 font-weight-bold">
              Wind speed:<span class="grey-text">
                {{ windSpeed }} <i class="fas fa-wind"></i
              ></span>
            </p>

            <p class="text-h5 font-weight-bold">
              Wind deg:<span class="grey-text">
                {{ windDeg }} <i class="fas fa-wind"></i
              ></span>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CityPage",
  props: {
    name: String,
    temp: Number,
    icon: String,
    main: String,
    minTemp: Number,
    maxTemp: Number,
    feelsLikeTemp: Number,
    windSpeed: Number,
    windDeg: Number,
    windGust: Number,
  },
  data() {
    return {
      iconRef: `http://openweathermap.org/img/wn/${this.icon}@2x.png`,
    };
  },
  created() {
    console.log("hello", this.name);
  },
};
</script>

<style lang="scss" scoped>
.h-100 {
  height: 100%;
}
p,
h4 {
  text-shadow: 1px 1px rgba(101, 206, 255, 0.466);
  color: black;
}
.grey-text {
  color: grey;
}
</style>
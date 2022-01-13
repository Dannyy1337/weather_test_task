<template>
  <div>
    <v-row>
      <v-col md="5">
        <v-card>
          <v-card-title class="d-flex ">
            <h2 class="text-h2">{{ name }}</h2>
            <h2 class="text-h2">{{ temp }}&deg;</h2>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col md="7">
        <v-card class="h-100">
          <v-card-text>
            <h4 class="text-h5 mb-4">Details</h4>

            <v-divider></v-divider>
            <p class="mt-4 text-body-1 mr-5">
              {{ descriptionWeather }}
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
    descriptionWeather: String,
    imgWeather: String,
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
</style>
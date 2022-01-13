<template>
  <div>
    <v-row class="city_list mx-4">
      <v-col xl="4" md="4" class="d-flex flex-wrap">
        <weather-card
          v-for="city in citiesData"
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
            {{ selectedCity }}
          </option>
        </select>
        <span>Выбрано: {{ selected }}</span>
        <v-btn @click="addCityCard">+</v-btn>
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
      selected: "",
      someId: 1,
      citiesForSelected: [
        "Kyiv",
        "Lviv",
        "Odessa",
        "Kharkiv",
        "Dnepr",
        "Poltava",
        "Donetsk",
      ],
    };
  },
  methods: {
    addCityCard() {
      this.citiesData.push({
        id: this.someId++,
        name: this.selected,
      });

      console.log(this.citiesData);
    },
  },
};
</script>
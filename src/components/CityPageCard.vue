<template>
  <div>
    <v-row>
      <v-col>
        <v-breadcrumbs :items="breadcrumbs_item"></v-breadcrumbs>
      </v-col>
    </v-row>
    <city-page
      v-if="selectedCity"
      :name="selectedCity.name"
      :temp="selectedCity.temp"
      :imgWeather="selectedCity.imgWeather"
      :descriptionWeather="selectedCity.descriptionWeather"
    />
  </div>
</template>

<script>
import { cities } from "../data/cityData";
import CityPage from "./CityPage.vue";

export default {
  name: "CityPageCard",
  components: { CityPage },
  data() {
    return {
      cities: cities,
      selectedCity: null,
      breadcrumbs_item: [
        {
          text: "Back",
          disabled: false,
          href: "/",
        },
        {
          text: "More details",
          disabled: true,
          href: ":id",
        },
      ],
    };
  },
  created() {
    this.handleRouteId(this.$route.params.id);
  },
  methods: {
    handleRouteId(id) {
      this.cities.forEach((item) => {
        if (item.id === id) {
          this.selectedCity = item;
          return;
        }
      });
    },
  },
};
</script>
<template>
  <div>
    <v-row>
      <v-col>
        <v-breadcrumbs :items="breadcrumbs_item" class="text-h4"></v-breadcrumbs>
      </v-col>
    </v-row>
    <city-page
      v-if="selectedCity"
      :name="selectedCity.name"
      :temp="selectedCity.temp"
      :icon="selectedCity.icon"
      :main="selectedCity.main"
      :minTemp="selectedCity.minTemp"
      :maxTemp="selectedCity.maxTemp"
      :feelsLikeTemp="selectedCity.feelsLikeTemp"
      :windSpeed="selectedCity.windSpeed"
      :windDeg="selectedCity.windDeg"
      :windGust="selectedCity.windGust"
    />
  </div>
</template>

<script>
import { cities } from "../data/cityData";
import CityPage from "./CityPage.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CityPageCard",
  components: { CityPage },
  data() {
    return {
      cities: cities,
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
  computed: {
    selectedCity() {
      return this.cityById(this.cityId);
    },
    ...mapGetters(["cityById"]),
  },
  created() {
    console.log("here");
    const locationCheck = window.location.pathname.split("/");
    this.cityId = locationCheck[locationCheck.length - 1];
    this.getWeatherByCityId(this.cityId);
  },
  methods: {
    ...mapActions(["getWeatherByCityId"]),
  },
};
</script>
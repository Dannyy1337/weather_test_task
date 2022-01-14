<template>
  <v-row>
    <v-col class="weather__component">
      <v-card class="city__card" elevation="3" outlined max-width="200">
        <div class="click-zone" @click="show = true">
          <v-card-title class="d-flex flex-column">
            <h3 class="mt-7">{{ city.name }}</h3>
            <h3>{{ city.temp }}&deg;</h3>
            <v-img :src="iconRef"></v-img>
            <p>{{ city.main }}</p>
            <v-btn
              color="blue"
              class="remove-btn"
              plain
              outlined
              depressed
              elevation="3"
              rounded
              icon
              @click.stop="removeFromWeatherData(city.id)"
              >X</v-btn
            >
          </v-card-title>
          <!-- <v-img height="250"></v-img> -->
        </div>
        <v-card-text class="d-flex justify-center">
          <v-btn color="blue" plain outlined depressed elevation="3" rounded
            ><router-link
              :to="{ name: 'CityPageCard', params: { id: city.id } }"
              tag="button"
              >More details</router-link
            ></v-btn
          >
          <v-btn
            color="blue"
            plain
            outlined
            icon
            depressed
            elevation="3"
            rounded
            @click="intervalData"
            class="ml-4"
          >
            <i class="fas fa-redo-alt"></i
          ></v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <transition name="modal">
      <modal-window
        :temp="city.temp"
        :name="city.name"
        :show="show"
        :feelsLikeTemp="city.feelsLikeTemp"
        :maxTemp="city.maxTemp"
        :minTemp="city.minTemp"
        :iconRef="iconRef"
        v-if="show"
        @close="show = false"
      />
    </transition>
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
      iconRef: `http://openweathermap.org/img/wn/${this.city.icon}@2x.png`,
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
};
</script>

<style lang="scss" scoped>
.remove-btn {
  position: absolute;
  top: 3%;
  right: 5%;
}

// animation

.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s;
}
.modal-enter,
.modal-leave-to {
  transform: translateY(-200px);
}
</style>
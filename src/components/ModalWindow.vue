<template>
  <div class="wrapper">
    <transition name="fade">
      <slot name="modal">
        <div
          class="modal d-flex flex-column align-center"
          color="blue lighten-3"
        >
          <v-row class="align-center">
            <v-img
              max-height="150"
              class="modal-img"
              max-width="150"
              contain
              :src="iconRef"
            ></v-img>
            <h3>{{ temp }}&deg;</h3>
            <h3>{{ name }}</h3>
          </v-row>
          <v-row class="d-flex justify-space-around">
            <h3>
              {{ feelsLikeTemp }}&deg; <br />
              feels like
            </h3>
            <h3>
              {{ maxTemp }}&deg; <br />
              max temperature
            </h3>
            <h3>
              {{ minTemp }}&deg; <br />
              min temperature
            </h3>
          </v-row>
          <v-btn
            class="mb-3 mt-5"
            icon
            elevation="7"
            outlined
            color="white"
            @click="$emit('close')"
            >ok</v-btn
          >
        </div>
      </slot>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    temp: Number,
    show: Boolean,
    name: String,
    feelsLikeTemp: Number,
    maxTemp: Number,
    minTemp: Number,
    iconRef: String,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 33.5%;
  z-index: 10;
  border: 2px solid white;
  border-radius: 7px;
  background: url("../assets/modalBack.jpg");
  opacity: 0.9;
  min-width: 300px;
  color: white;
  text-shadow: 1px 0px skyblue;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.568);
  & h3 {
    margin-right: 40px;
    &:nth-child(1) {
      margin-left: 40px;
    }
  }
}

// animation

// .fade-enter-active {
//   animation: 0.75s fade forwards;
// }

// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
// }

// @keyframes fade {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: .5;
//   }
// }
</style>
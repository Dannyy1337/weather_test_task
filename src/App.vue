<template>
  <v-app>
    <Header />
    <v-main class="main d-flex align-center">
      <v-container
        ><transition name="fade" mode="out-in">
          <router-view class="view"> </router-view>
        </transition> </v-container
    ></v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: url("./assets/background1.jpg");
  background-size: cover;
}

// animation

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>

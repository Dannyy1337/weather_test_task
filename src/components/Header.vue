<template>
  <div class="wrapper">
    <v-footer color="blue lighten-3">
      <v-col class="font-weight-bold text-center white--text">Weather</v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  z-index: 20;
}
</style>
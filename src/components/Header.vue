<template>
  <div>
    <!-- <v-app-bar color="blue lighten-3
" app>
      <v-col class="font-weight-bold white--text d-flex">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-app-bar-title class="d-flex align-center justify-center">Weather</v-app-bar-title>
      </v-col>
    </v-app-bar> -->
    <!-- <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="text--acent-4">
          <v-list-item>
            <v-list-item-title>
              <router-link to="/"> City list </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Item 2</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Item 3</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer color="blue lighten-3">
      <v-col class="font-weight-bold text-center white--text"
        >Weather</v-col
      >
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
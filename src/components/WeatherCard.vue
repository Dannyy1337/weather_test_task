<template>
  <v-row>
    <v-col class="weather__component">
      <h1 class="py-4">List of cities 4&deg;</h1>
      <v-row class="city_list mx-2">
        <v-col v-for="city in cities" :key="city.id" xl="4" md="4">
          <v-card class="city__card">
            <v-card-title> {{ city.name }} </v-card-title>
            <v-img height="250" :src="city.img"></v-img>
            <v-card-text>
              <p>
                <b>{{ city.country }} </b>
              </p>
              <p>{{ city.temp }}&deg;</p>
              <p>{{ city.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "WeatherCard",
  data() {
    return {
      cities: [
        {
          id: 0,
          name: "Kyiv",
          country: "UA",
          temp: "4.5",
          description: "clear sky",
          img: "https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg?ixlib=rb-1.1.0&rect=0%2C292%2C3008%2C1504&q=45&auto=format&w=1356&h=668&fit=crop",
        },
        {
          id: 1,
          name: "Lviv",
          country: "UA",
          temp: "2.5",
          description: "black sky",
          img: "",
        },
        {
          id: 2,
          name: "Odessa",
          country: "UA",
          temp: "1",
          description: "drunk sun",
          img: "",
        },
        {
          id: 3,
          name: "Kharkiv",
          country: "UA",
          temp: "-2",
          description: "alco sky",
          img: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// ::-webkit-scrollbar {
//   width: 0;
// }
</style>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weatherData: []
  },
  mutations: {
    updateWeatherData(state, weatherDataObject) {
      let checkForDuplicateIndex = state.weatherData.find(city => city.id === weatherDataObject.id);
      if (checkForDuplicateIndex === undefined) {
        state.weatherData = [...state.weatherData, weatherDataObject]
      }
    },
    removeFromWeatherData(state, id) {
      const index = state.weatherData.findIndex(item => item.id === id);
      if (state.weatherData.length === 1) {
        state.weatherData = []
      } else {
        state.weatherData = state.weatherData.splice(index - 1, 1);
      }
    }
  },
  actions: {
    async getWeatherByCityName({ commit }, city) {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d1c911f8b78b22a045fb3362c92c74f4`
        )
        .then((response) => {
          const weatherData = response.data;
          let weatherDataObject = {
            name: weatherData.name,
            main: weatherData.weather.main,
            temp: weatherData.main.temp,
            minTemp: weatherData.main.temp_min,
            maxTemp: weatherData.main.temp_max,
            feelsLikeTemp: weatherData.main.feels_like,
            id: weatherData.id
          }
          commit('updateWeatherData', weatherDataObject)
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async getWeatherByCityLocation({ commit }, { lat, lon }) {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d1c911f8b78b22a045fb3362c92c74f4`
        )
        .then((response) => {
          const weatherData = response.data;
          let weatherDataObject = {
            name: weatherData.name,
            main: weatherData.weather.main,
            temp: weatherData.main.temp,
            minTemp: weatherData.main.temp_min,
            maxTemp: weatherData.main.temp_max,
            feelsLikeTemp: weatherData.main.feels_like,
            id: weatherData.id
          }
          commit('updateWeatherData', weatherDataObject)
        });
    },
    async getWeatherByCityId({ commit }, id) {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=d1c911f8b78b22a045fb3362c92c74f4`
        )
        .then((response) => {
          const weatherData = response.data;
          let weatherDataObject = {
            name: weatherData.name,
            main: weatherData.weather.main,
            temp: weatherData.main.temp,
            minTemp: weatherData.main.temp_min,
            maxTemp: weatherData.main.temp_max,
            feelsLikeTemp: weatherData.main.feels_like,
            id: weatherData.id
          }
          commit('updateWeatherData', weatherDataObject)
        });
    },
  },
  getters: {
    cityById: (state) => (id) => {
      return state.weatherData.find(city => city.id == id);
    },
  },
  plugins: [createPersistedState()],
})

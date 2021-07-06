import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather_api: {},
  },
  mutations: {
    setWeather_api (state, weather) {
      state.weather_api = weather
      console.log('>>>>>>>>>>>>>>>>>',state.weather_api)
    },
  },
  actions: {
    fetchWeather (store,payload) {
      var axios = require('axios');
      var data = '';
      const api_key = '41a1e54eb2350be2f840ddd2536d4052'

      var config = {
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/weather?q='+payload.city+'&units=metric&appid='+api_key,
        headers: { },
        data : data
      };

      axios(config)
      .then(function (response) {
        store.commit('setWeather_api', JSON.parse(JSON.stringify(response.data)))
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  modules: {
  },
  getters: {
    curr_temp(state) {
      if (state.weather_api.main && state.weather_api.main.temp) {
        return state.weather_api.main.temp
      }
    },
    // max_temp(state) {
    //   if (state.weather_api.main && state.weather_api.main.temp_max) {
    //     return state.weather_api.main.temp_max
    //   }
    // },
    // min_temp(state) {
    //   if (state.weather_api.main && state.weather_api.main.temp_min) {
    //     return state.weather_api.main.temp_min
    //   }
    // },
    location(state) {
      if (state.weather_api.name) {
        return state.weather_api.name
      }
    },
    country(state) {
      if (state.weather_api.sys && state.weather_api.sys.country) {
        return state.weather_api.sys.country
      }
    },
    weather(state) {
      if (state.weather_api.weather) {
        return state.weather_api.weather[0].main
      }
    }

  }
})

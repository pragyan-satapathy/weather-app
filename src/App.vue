<template>

  <v-app>
    <v-img
     :src="background_cover" 
     style="height:100vh;"
    >
      <v-main>
        <HelloWorld/>
      </v-main>
    </v-img>
  </v-app>

</template>

<script>
import HelloWorld from './components/HelloWorld';
import store from './store/index';
import logo from './assets/logo.png'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
  }),
  computed: {
    background_cover() {
      if (store.getters.weather) {
        if (store.getters.weather.toLowerCase() == 'thunderstorm') {
          return 'https://i.gifer.com/9z9V.gif'
        }
        else if (store.getters.weather.toLowerCase() == 'haze') {
          return 'https://i.gifer.com/2ZJu.gif'
        }
        else if (store.getters.weather.toLowerCase() == 'drizzle') {
          return 'https://j.gifs.com/v1PopA.gif'
        }
        else if (store.getters.weather.toLowerCase() == 'rain') {
          return 'https://gifimage.net/wp-content/uploads/2018/10/anime-rain-gif-loop-7.gif'
        }
        else if (store.getters.weather.toLowerCase() == 'snow') {
          return 'https://songbook1.files.wordpress.com/2016/12/snowfall-on-christmas-tree-blue-1.gif'
        }
        else if (store.getters.weather.toLowerCase() == 'clouds') {
          return 'https://i.gifer.com/bEt.gif'
        }
        else if (store.getters.weather.toLowerCase() == 'tornado') {
          return 'https://i.gifer.com/2QhR.gif'
        }
        else if (store.getters.weather.toLowerCase() == 'hurricane') {
          return 'https://i.gifer.com/2QhR.gif'
        }
      }
      return logo
      
    }
  }
};
</script>

<style>
  
</style>

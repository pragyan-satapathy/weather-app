<template>
  <v-container grid-list-md text-center>
    <v-layout>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <v-flex ma-5>
        <v-text-field dark
         outlined 
         label="City/District name" 
         v-model="city" 
         append-icon="fa fa-search"
         @click:append="$store.dispatch('fetchWeather',{city: city})"
         @keyup.enter="$store.dispatch('fetchWeather',{city: city})"
         color="white"
         ></v-text-field>
      </v-flex>
    </v-layout>
    <v-container 
      v-if="isContainerVisible" 
      white--text font-weight-bold
    >

      {{ location }}, {{ country }}
      <br /><br />
      
      <v-container
       display-4
       font-weight-medium
      >
        {{ Math.round(curr_temp) }}&deg;C
      </v-container> 
      <v-container
       display-2
       font-weight-medium
      >
        {{ weather }}
      </v-container>
      
      
      <br /><br />

      {{ day }}, {{ date }}
      <br /><br />

    </v-container>
  </v-container>
</template>

<script>
import store from '../store/index'
  export default {
    name: 'HelloWorld',

    data: () => ({
      city: '',
      today: new Date(),
    }),
    computed: {
      day() {
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        return weekday[this.today.getDay()]
      },
      date() {
        return this.today.getDate()+'/'+(this.today.getMonth()+1)+'/'+this.today.getFullYear();
      },
      curr_temp() {
        return store.getters.curr_temp
      },
      max_temp() {
        return store.getters.max_temp
      },
      min_temp() {
        return store.getters.min_temp
      },
      location() {
        return store.getters.location
      },
      country() {
        return store.getters.country
      },
      isContainerVisible() {
        return (
          store.state.weather_api!== undefined && 
          store.state.weather_api!== {} && 
          store.state.weather_api.name)
      },
      weather() {
        return store.getters.weather
      }
    }
  }
</script>

<style scoped>
</style>

<script>
import { state } from './state.js';
export default {
  name: 'App',
  data() {
    return {
      state
    }
  }
}
</script>
 
<template>
  <input name="searchText" type="text" placeholder="Name movie or series here" v-model="state.stringSearch">
  <button @click="state.getMovie">Filter</button>
  <ul v-for="movie in state.out">
    <li>Title : {{ movie.title }}</li>
    <li>Original title : {{ movie.original_title }}</li>
    <li>Language: {{ movie.original_language }}</li>
    <li>Vote: {{ movie.vote_count }}</li>
    <li>Vote averege: {{ movie.vote_average }}</li>
  </ul>
</template>
 
<style scoped></style>
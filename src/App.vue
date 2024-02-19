<script>
import SearchMovieTV from './components/SearchMovieTV.vue';
import { state } from './state.js';
export default {
  name: 'App',
  data() {
    return {
      state
    };
  },
  components: { SearchMovieTV }
}
</script>
  
<template>
  <SearchMovieTV></SearchMovieTV>
</template>
 
<style scoped></style>



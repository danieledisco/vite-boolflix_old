<script>
import AppHeader from './components/AppHeader.vue';
import SearchMovieTV from './components/SearchMovieTV.vue';
import AppMain from './components/AppMain.vue';
import { state } from './state.js';
export default {
  name: 'App',
  data() {
    return {
      state
    };
  },
  components: { SearchMovieTV, AppHeader, AppMain }
}
</script>
  
<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <SearchMovieTV></SearchMovieTV>
</template>
 
<style scoped></style>



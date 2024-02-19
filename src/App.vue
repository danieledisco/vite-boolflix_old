<script>
import { state } from './state.js';
export default {
  name: 'App',
  data() {
    return {
      state
    }

  },
  methods: {
    makeFlags(input) {
      let out;
      if (input.original_language === 'en')
        out = 'fi fi-gb';
      else if (input.original_language === 'ja')
        out = 'fi fi-jp';
      else if (input.original_language === 'hi')
        out = 'fi fi-in';
      else if (input.original_language === 'zh')
        out = 'fi fi-cn';
      else if (input.original_language === 'ko')
        out = 'fi fi-kr';
      else {
        if (state.available_flags.includes(input.original_language))
          out = 'fi fi-' + input.original_language;
        else
          out = 'fi fi-xx';
      }

      return out;
    }
  }
}

</script>
 
<template>
  <input name="searchText" type="text" placeholder="Name movie or series here" v-model="state.stringSearch">
  <button @click="state.getMovie">Filter</button>
  <ul v-for="movie in    state.out   ">
    <li>Title : {{ movie.title }}</li>
    <li>Original title : {{ movie.original_title }}</li>
    <li>Language : {{ movie.original_language }}</li>
    <li><span v-bind:class="makeFlags(movie)"></span></li>
    <li>Vote: {{ movie.vote_count }}</li>
    <li>Vote averege: {{ movie.vote_average }}</li>
  </ul>
</template>
 
<style scoped></style>



<script>
import { state } from '../state.js';
export default {
    name: 'SearchMovieTV',
    data() {
        return {
            state
        }
    },

    methods: {

        makeFlags(input) {
            let lc = input.toLowerCase();
            let out;
            if (lc === 'en')
                out = 'fi fi-gb';
            else if (lc === 'ja')
                out = 'fi fi-jp';
            else if (lc === 'hi')
                out = 'fi fi-in';
            else if (lc === 'zh')
                out = 'fi fi-cn';
            else if (lc === 'ko')
                out = 'fi fi-kr';
            else if (lc === 'cs')
                out = 'fi fi-cz';
            else if (lc === 'te')
                out = 'fi fi-in';
            else {
                if (state.available_flags.includes(lc))
                    out = 'fi fi-' + lc;
                else
                    out = 'fi fi-xx';
            }
            return out;
        },
        compose_image_url(image) {
            let url = state.base_image_url + image
            return url;
        },
        evalStars(num) {
            return Math.ceil(5. * num / 10.);
        }

    }
}
</script>
 
<template>
    <ul v-for="movie in state.out_movie">
        <li>Title : {{ movie.title }}</li>
        <li>Original title : {{ movie.original_title }}</li>
        <li>Language : {{ movie.original_language }}</li>
        <li><span v-bind:class="makeFlags(movie.original_language)"></span></li>
        <li>Vote: {{ movie.vote_count }}</li>
        <li>Vote averege: {{ movie.vote_average }}</li>
        <li><img v-bind:src=compose_image_url(movie.poster_path) alt=""></li>
        <li>Number of stars</li>
        <li>{{ evalStars(movie.vote_average) }}</li>
    </ul>
    <p v-if="state.movie_tv == 0 && state.out_movie.length == 0">
        Nessun Film Trovato
    </p>

    <ul v-for="tv in    state.out_tv ">
        <li>Title : {{ tv.name }}</li>
        <li>Original title : {{ tv.original_name }}</li>
        <li>Language : {{ tv.original_language }}</li>
        <li><span v-bind:class="makeFlags(tv.original_language)"></span></li>
        <li>Origin Country</li>
        <li><span v-bind:class="makeFlags(tv.origin_country[0])"></span></li>
        <li>Vote: {{ tv.vote_count }}</li>
        <li>Vote averege: {{ tv.vote_average }}</li>
        <li><img v-bind:src=compose_image_url(tv.poster_path) alt=""></li>
        <li>Number of stars</li>
        <li>{{ evalStars(tv.vote_average) }}</li>
    </ul>

    <p v-if="state.movie_tv == 1 && state.out_tv.length == 0">
        Nessuna Serie TV Trovata
    </p>
</template>

<style scoped></style>

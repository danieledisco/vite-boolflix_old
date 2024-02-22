<script>
import { state } from '../state.js';
export default {
    name: 'MoviesList',
    data() {
        return {
            state
        }
    }
}

</script>
 
<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-4" v-for="movie in state.out_movie">

                <div class="card" v-if="movie.poster_path != null">
                    <img v-bind:src=state.compose_image_url(movie.poster_path) alt="">
                </div>
                <div class="card" v-else>
                    <img src="/noPoster.jpg" alt="">
                </div>

            </div>
            <!-- /.col-12 col-sm-6 col-md-3 -->
        </div>
    </div>






    <!--    <ul v-for="movie in state.out_movie">
        <li>Title : {{ movie.title }}</li>
        <li>Original title : {{ movie.original_title }}</li>
        <li>Language : {{ movie.original_language }}</li>
        <li><span v-bind:class="makeFlags(movie.original_language)"></span></li>
        <li>Vote: {{ movie.vote_count }}</li>
        <li>Vote averege: {{ movie.vote_average }}</li>
        <li></li>
        <li>Number of stars</li>
        <li>{{ evalStars(movie.vote_average) }}</li>
    </ul>
    <p v-if="state.movie_tv == 0 && state.out_movie.length == 0">
        Nessun Film Trovato
    </p> -->
</template>
 
<style scoped>
.card {
    /*     background-color: white;
    transition: all 1s;

    &:hover {
        filter: drop-shadow(0 0 15px #507183);
        scale: 1.01;
    } */


    >img {
        width: 100%
    }

    >div {
        padding: 1rem;
    }
}
</style>
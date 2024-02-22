<script>
import { state } from '../state.js';
export default {
    name: 'TVSeriesList',
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
            <div class="col-12 col-sm-6 col-lg-4" v-for="tv in state.out_tv">


                <div class="card" v-if="tv.poster_path != null">
                    <img v-bind:src=state.compose_image_url(tv.poster_path) alt="">
                </div>
                <div class="card" v-else>
                    <img src="/noPoster.jpg" alt="">
                </div>

            </div>
            <!-- /.col-12 col-sm-6 col-md-3 -->
        </div>
    </div>
</template>










<!-- <template>
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
 --> 
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
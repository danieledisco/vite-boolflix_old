<script>
import { state } from '../state.js';
export default {
    name: 'TVSeriesList',
    data() {
        return {
            state
        }
    },
    methods: {

    }

}
</script>
 
<template>
    <div class="container">
        <div v-if="state.movie_tv == 1 && state.out_tv.length == 0" class="noOut">
            No TV Series found in the database
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-4" v-for="tv in state.out_tv">


                <div class="card">
                    <img v-if="tv.poster_path != null" v-bind:src=state.compose_image_url(tv.poster_path) alt="">
                    <img v-else src="/noPoster.jpg" alt="">
                    <div class="info">
                        <ul>
                            <li class="caption">Title:</li>
                            <li>{{ tv.name }}</li>
                            <li class="caption">Original title:</li>
                            <li>{{ tv.original_name }}</li>
                            <li class="caption">Overview:</li>
                            <li>{{ tv.overview }}</li>
                            <li class="caption">Country: <span v-bind:class="state.makeFlags(tv.origin_country[0])"></span>
                            </li>
                            <li class="caption">Rate:
                                <span v-for="i in state.evalStars(tv.vote_average)"> <i class="fa-solid fa-star"></i></span>
                                <span v-for="i in 5 - state.evalStars(tv.vote_average)"><i
                                        class="fa-regular fa-star"></i></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped>
.card {
    position: relative;
    background-color: black;


    & img {
        width: 100%
    }

    & .info {
        display: none;
        position: absolute;
        top: 200Px;
        left: 20px;
        background-color: black;
        color: var(--bflix-gray);
        border: 1px solid var(--bflix-ligth);
    }

    & img:hover {
        display: none;
    }

    & img:hover+.info {
        display: block;
    }


}

.caption {
    font-weight: bold;
    margin-right: 0.5rem;
    color: var(--bflix-logo);
}

i {
    color: yellow;
}

.noOut {
    width: 70%;
    margin-top: 15rem;
    margin-bottom: 18rem;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;
    text-align: center;
    font-size: 2rem;
    color: var(--bflix-logo);
    border: 2px solid var(--bflix-logo);
    background-color: var(--bflix-dark);
    border-radius: 10px;
}
</style>
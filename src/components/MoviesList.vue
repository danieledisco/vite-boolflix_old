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
 
<template onscroll="blockHover">
    <div class="container">
        <div v-if="state.movie_tv == 0 && state.out_movie.length == 0" class="noOut">
            No Movies found in the database
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-4" v-for="movie in state.out_movie">
                <div class="card">
                    <img v-if="movie.poster_path != null" v-bind:src=state.compose_image_url(movie.poster_path) alt=""
                        id="i1">
                    <img v-else src="/noPoster.jpg" alt="" id="i2">
                    <div class="info">
                        <ul>
                            <li class="caption">Titole:</li>
                            <li> {{ movie.title }}</li>
                            <li class="caption">Original title:</li>
                            <li> {{ movie.original_title }}</li>
                            <li class="caption">Overview:</li>
                            <li>{{ movie.overview }}</li>
                            <li class="caption">Country: <span
                                    v-bind:class="state.makeFlags(movie.original_language)"></span></li>
                            <li class="caption">Rate:
                                <span v-for="i in state.evalStars(movie.vote_average)"> <i
                                        class="fa-solid fa-star"></i></span>
                                <span v-for="i in 5 - state.evalStars(movie.vote_average)"><i
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
        width: 100%;
    }

    & .info {
        display: none;
        position: absolute;
        top: 200Px;
        left: 20px;
        background-color: black;
        color: var(--bflix-gray);
    }

    & img:hover {
        display: none;
    }

    & img:hover+.info {
        display: block;
    }


}

.caption {
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
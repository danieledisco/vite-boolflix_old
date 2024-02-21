<script>
import { state } from '../state.js';
export default {
    name: 'FilterData',
    data() {
        return {
            state
        }
    },
    methods: {
        getMovie() {
            state.out_tv = [];
            let url;
            state.movie_tv = 0;
            url = `${state.base_api_url}movie?api_key=${state.api_key}&query=${state.stringSearch}`
            console.log('SearchMivieTV url = ' + url);
            state.getMovieTV(url)
        },
        getTV() {
            state.out_movie = [];
            let url;
            state.movie_tv = 1;
            url = `${state.base_api_url}tv?api_key=${state.api_key}&query=${state.stringSearch}`
            state.getMovieTV(url)
            console.log('SearchMivieTV url = ' + url);
        },
    }
}
</script>
 
<template>
    <div class="container">
        <input name="searchText" type="text" placeholder="Type movie or series here" v-model="state.stringSearch">
        <div class="buttonContainer">
            <button @click="getMovie()">Search Movie</button>
            <button @click="getTV()">Search TV Series</button>
        </div>
    </div>
</template>
 
<style scoped>
.container {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;

    &>input {
        font-size: 1rem;
        padding: 0.2rem 0;
        text-align: center;
    }

    &>.buttonContainer {
        display: flex;
        text-align: center;

        & button {
            font-size: 1rem;
            padding: 0.2rem 0.2rem;
            margin: 0 0.2rem;
            border-radius: 0.5rem;
            color: var(--bflix-dark);
            border: 1px solid transparent;
        }

        & button:hover {
            color: var(--bflix-logo);
            border: 1px solid var(--bflix-logo);
        }


    }
}
</style>
<script>
import { state } from '../state.js';
import FilterData from './FilterData.vue';
import MoviesList from './MoviesList.vue';
import TVSeriesList from './TVSeriesList.vue';


export default {
    name: 'AppMain',
    components: { FilterData, MoviesList, TVSeriesList },
    data() {
        return {
            state
        }
    }
}
</script>
 
<template>
    <main>
        <FilterData></FilterData>
        <MoviesList></MoviesList>
        <TVSeriesList></TVSeriesList>
    </main>
</template>
 
<style scoped>
main {
    background-color: var(--bflix-gray);
}
</style>
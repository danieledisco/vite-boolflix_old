import { reactive } from 'vue';
import axios from 'axios';
export const state = reactive({
    base_api_movie_url: 'https://api.themoviedb.org/3/search/movie?api_key=016f962ecb95c317b3e0029c7c77989e&query=',
    stringSearch: '',
    out: [],

    getMovie() {
        const url = this.base_api_movie_url + this.stringSearch;
        console.log('url = ' + url);
        axios.get(url)
            .then(response => {
                console.log(response.data.results);
                this.out = response.data.results;
            })
            .catch(error => {
                console.error(error);
            })
    }

})

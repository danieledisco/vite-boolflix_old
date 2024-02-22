import { reactive } from 'vue';
import axios from 'axios';
export const state = reactive({
    api_key: '016f962ecb95c317b3e0029c7c77989e',
    base_api_url: 'https://api.themoviedb.org/3/search/',
    base_image_url: 'https://image.tmdb.org/t/p/w342',
    available_flags: ['ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'aq', 'ar', 'arab', 'as', 'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf',
        'bg', 'bh', 'bi', 'bj', 'bl', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt', 'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cefta', 'cf', 'cg',
        'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cp', 'cr', 'cu', 'cv', 'cw', 'cx', 'cy', 'cz', 'de', 'dg', 'dj', 'dk', 'dm', 'do', 'dz',
        'eac', 'ec', 'ee', 'eg', 'eh', 'er', 'es', 'es-ct', 'es-ga', 'es-pv', 'et', 'eu', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'ga', 'gb',
        'gb-eng', 'gb-nir', 'gb-sct', 'gb-wls', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu',
        'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'ic', 'id', 'ie', 'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp',
        'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly',
        'ma', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mk', 'ml', 'mm', 'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my',
        'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np', 'nr', 'nu', 'nz', 'om', 'pa', 'pc', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl',
        'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'sh-ac',
        'sh-hl', 'sh-ta', 'si', 'sj', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'sv', 'sx', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th',
        'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'um', 'un', 'us', 'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi',
        'vn', 'vu', 'wf', 'ws', 'xk', 'xx', 'ye', 'yt', 'za', 'zm', 'zw'],
    stringSearch: '',
    out_movie: [],
    out_tv: [],

    movie_tv: 3,    /* 0 movie 1 tv */

    getMovieTV(url) {
        console.log('state.js url = ' + url);
        axios.get(url)
            .then(response => {
                console.log('state.js response.data.results = ');
                console.log(response.data.results);
                if (this.movie_tv === 0) {
                    this.out_movie = response.data.results;
                }
                else {
                    this.out_tv = response.data.results;
                }
            })
            .catch(error => {
                console.error(error);
            })
    },
    compose_image_url(image) {
        let url;
        if (image != null) {
            url = state.base_image_url + image;
        }
        else {
            url = '/npPoster.jpg';
        }
        return url;
    },

})

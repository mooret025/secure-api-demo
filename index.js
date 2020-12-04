require('dotenv').config();

const axios = require('axios').default;
const OMDB_BASE_URL = 'http://omdbapi.com/?';
const SEARCH_WORD = 'jumanji';

axios.get(`${OMDB_BASE_URL}apikey=${process.env.OMDB_API_KEY}&s=${SEARCH_WORD}`).then( (res) => {
    console.log(res.data.Search);
});
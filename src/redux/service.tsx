import axios from 'axios';
const APIKEY = 'e3f08a46';

function getMoviesAPI(searchTerm: any) {
	const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchTerm}`;
	return axios.get(url);
}

export default { getMoviesAPI };

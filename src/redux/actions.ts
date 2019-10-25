import ACTIONS from './actions.config';
// import Service from './service';
import axios from 'axios';
const APIKEY = 'e3f08a46';

export const getSingleMovie = (imdbID: string) => {
	return (dispatch: any) => {
		const url = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;

		axios.get(url).then((result: any) => {
			dispatch(getSingleMovieAction(result.data));
		});
	};
};

export const getMoviesAction = (searchTerm: any) => {
	console.log('dispatching...');
	return (dispatch: any) => {
		const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchTerm}`;

		dispatch(getMovieStartedAction());
		axios
			.get(url)
			.then((result: any) => {
				console.log(result);
				dispatch(getMoviesSuccessAction(result.data.Search));
			})
			.catch((e) => console.log(e));
	};
};

export const saveMovieComment = (comment: any) => ({
	type: ACTIONS.ADD_COMMENT,
	payload: { comment }
});

export const saveMovieToFavorite = (movie: any) => ({
	type: ACTIONS.ADD_MOVIE_FAVORITE,
	payload: { movie }
});

export const getSingleMovieAction = (movie: any) => ({
	type: ACTIONS.GET_SINGLE_MOVIE,
	payload: { movie }
});

export const getMoviesSuccessAction = (movies: any) => ({
	type: ACTIONS.GET_MOVIES_SUCCESS,
	payload: { movies }
});

export const getMovieStartedAction = () => ({
	type: ACTIONS.GET_MOVIES_STARTED
});

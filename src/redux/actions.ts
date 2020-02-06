import ACTIONS from './actions.config';
// import Service from './service';
import axios from 'axios';
const APIKEY = 'e3f08a46';

export const getSingleMovie = (imdbID: string) => {
	return (dispatch: Function) => {
		const url = `https://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;

		axios.get(url).then((result: any) => {
			dispatch(getSingleMovieAction(result.data));
		});
	};
};

export const getMoviesAction = (searchTerm: string) => {
	return (dispatch: Function) => {
		const url = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchTerm}`;
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

export const saveMovieComment = (commentObj: object) => ({
	type: ACTIONS.ADD_COMMENT,
	payload: { commentObj }
});

export const saveMovieToFavorite = (movie: object) => ({
	type: ACTIONS.ADD_MOVIE_FAVORITE,
	payload: { movie }
});

export const getSingleMovieAction = (movie: object) => ({
	type: ACTIONS.GET_SINGLE_MOVIE,
	payload: { movie }
});

export const getMoviesSuccessAction = (movies: object) => ({
	type: ACTIONS.GET_MOVIES_SUCCESS,
	payload: { movies }
});

export const getMovieStartedAction = () => ({
	type: ACTIONS.GET_MOVIES_STARTED
});

export const removeMovieFromFavorite = (movie: object) => ({
	type: ACTIONS.REMOVE_MOVIE_FAVORITE,
	payload: { movie }
});

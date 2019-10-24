import ACTIONS from './actions.config';
import Service from './service';

export const saveMovieComment = (comment: any) => ({
	type: ACTIONS.ADD_COMMENT,
	payload: { comment }
});

export const saveMovieToFavorite = (movie: any) => ({
	type: ACTIONS.ADD_MOVIE_FAVORITE,
	payload: { movie }
});

export const getMoviesSuccessAction = (movies: any) => ({
	type: ACTIONS.GET_MOVIES_SUCCESS,
	payload: { movies }
});

export const getMoviesAction = (searchTerm: any) => {
	return async (dispatch: any) => {
		const result = await Service.getMoviesAPI(searchTerm);
		dispatch(getMoviesAction(result.data.Search));
	};
};

import ACTIONS from './actions.config';

export const saveMovieComment = (comment: any) => ({
	type: ACTIONS.ADD_COMMENT,
	payload: { comment }
});

export const saveMovieToFavorite = (movie: any) => ({
	type: ACTIONS.ADD_MOVIE_FAVORITE,
	payload: { movie }
});

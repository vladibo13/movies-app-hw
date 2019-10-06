import ACTIONS from './actions.config';

export const saveMovieComment = (comment: any) => ({
	type: ACTIONS.ADD_COMMENT,
	payload: { comment }
});

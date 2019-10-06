import Actions from './actions.config';

const initialState = {
	comments: null
};

export default function root(state = initialState, action: any) {
	switch (action.type) {
		case Actions.ADD_COMMENT: {
			const newComment = action.payload.comment;
			return {
				...state,
				newComment
			};
		}

		default:
			return state;
	}
}

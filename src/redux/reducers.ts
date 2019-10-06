import Actions from './actions.config';

const initialState = {
	comments: []
};

export default function root(state = initialState, action: any) {
	switch (action.type) {
		case Actions.ADD_COMMENT: {
			console.log(state);

			const newComment = action.payload.comment;
			return {
				comments: [ ...state.comments, { newComment } ]
			};
		}

		default:
			return state;
	}
}

import Actions from './actions.config';

const initialState = {
	comments: [],
	favorites: []
};

export default function root(state = initialState, action: any) {
	switch (action.type) {
		case Actions.ADD_COMMENT: {
			console.log(state);

			const newComment = action.payload.comment;
			return {
				...state,
				comments: [ ...state.comments, { newComment } ]
			};
		}

		case Actions.ADD_MOVIE_FAVORITE: {
			const { movie } = action.payload;
			const { favorites } = state;
			return {
				...state,
				favorites: [ ...favorites, movie ]
			};
		}

		default:
			return state;
	}
}

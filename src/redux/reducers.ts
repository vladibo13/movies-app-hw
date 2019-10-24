import Actions from './actions.config';
import moviesFavorite from '../components/movies-favorite';

const initialState = {
	comments: [],
	favorites: [],
	movies: [],
	isLoading: false
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

		case Actions.GET_MOVIES_SUCCESS: {
			const { movies: data } = action.payload;

			return {
				...state,
				isLoading: false,
				movies: [ ...data ]
			};
		}

		case Actions.GET_MOVIES_STARTED: {
			return {
				...state,
				isLoading: true
			};
		}

		default:
			return state;
	}
}

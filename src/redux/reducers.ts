import Actions from './actions.config';
import moviesFavorite from '../components/movies-favorite';

const initialState = {
	comments: [],
	favorites: [],
	movies: [],
	isLoading: false,
	currentMovie: null
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

		case Actions.GET_SINGLE_MOVIE: {
			const { movie } = action.payload;
			return {
				...state,
				currentMovie: movie
			};
		}
		case Actions.GET_SINGLE_MOVIE: {
			const { movie } = action.payload;
			return {
				...state,
				currentMovie: movie
			};
		}
		case Actions.REMOVE_MOVIE_FAVORITE: {
			const { movie } = action.payload;
			const { favorites } = state;
			const filtredMovies = favorites.filter((m: any) => m.imdbID !== movie.imdbID);
			return {
				...state,
				favorites: [ ...filtredMovies ]
			};
		}

		default:
			return state;
	}
}

import React from 'react';
import MovieSearch from '../movie-search';
import MoviesList from '../movies-list';
import { connect } from 'react-redux';
import { getMoviesAction } from '../../redux/actions';

class MoviesPage extends React.Component<any, any> {
	// constructor(props: any) {
	// 	super(props);
	// 	this.state = {
	// 		movies: [],
	// 		isLoading: false
	// 	};
	// }

	movieSearch = (searchTerm: any) => {
		// this.setState({ isLoading: true });
		// const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchTerm}`;
		// axios
		// 	.get(url)
		// 	.then((result: any) => {
		// 		console.log(result.data.Search);
		// 		if (result.data.Search.length > 0)
		// 			this.setState({ movies: [ ...this.state.movies, ...result.data.Search ], isLoading: false });
		// 	})
		// 	.catch((e) => console.log(e));
		console.log(searchTerm);
		this.props.onSearchMovies(searchTerm);
	};
	render() {
		console.log(this.props);
		const { movies, isLoading } = this.props;
		return (
			<div className="container">
				<h2 className="display-4 lead text-center my-5">Movie App</h2>
				<MovieSearch movieSearch={this.movieSearch} />
				<MoviesList isLoading={isLoading} movies={movies} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onSearchMovies: (movies: any) => {
			dispatch(getMoviesAction(movies));
		}
	};
};

function mapStateToProps(state: any) {
	console.log('state from redux');
	return {
		...state
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);

// export default MoviesPage;

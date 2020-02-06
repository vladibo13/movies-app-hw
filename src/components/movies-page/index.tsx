import React from 'react';
import MovieSearch from '../movie-search';
import MoviesList from '../movies-list';
import { connect } from 'react-redux';
import { getMoviesAction } from '../../redux/actions';

class MoviesPage extends React.Component<any, any> {
	movieSearch = (searchTerm: string) => {
		this.props.onSearchMovies(searchTerm);
	};
	render() {
		const { movies, isLoading } = this.props;
		return (
			<div className="container-fluid">
				<h2 className=" text-center mt-5 mb-3">Movie Search App</h2>
				<MovieSearch movieSearch={this.movieSearch} />
				<MoviesList isLoading={isLoading} movies={movies} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		onSearchMovies: (movies: any) => {
			dispatch(getMoviesAction(movies));
		}
	};
};

function mapStateToProps(state: object) {
	return {
		...state
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);

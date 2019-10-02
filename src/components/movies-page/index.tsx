import React from 'react';
import MovieSearch from '../movie-search';
import MoviesList from '../movies-list';
import axios from 'axios';
const APIKEY = 'e3f08a46';
class MoviesPage extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			movies: [],
			isLoading: false
		};
	}
	movieSearch = (searchTerm: any) => {
		this.setState({ isLoading: true });
		const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchTerm}`;
		axios
			.get(url)
			.then((result: any) => {
				console.log(result.data.Search);
				if (result.data.Search.length > 0)
					this.setState({ movies: [ ...result.data.Search ], isLoading: false });
			})
			.catch((e) => console.log(e));
	};
	render() {
		const { movies } = this.state;
		return (
			<div className="container">
				<h2 className="display-4 lead text-center my-5">Movie App</h2>
				<MovieSearch movieSearch={this.movieSearch} />
				<MoviesList isLoading={this.state.isLoading} movies={movies} />
			</div>
		);
	}
}

export default MoviesPage;

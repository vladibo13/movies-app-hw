import React from 'react';
import Movie from '../movie';
import MovieLoader from '../movie-loader';

class MoviesList extends React.Component<any, any> {
	render() {
		const { movies, isLoading } = this.props;
		if (!movies.length) return <h3 className="text-center mt-3 lead ">Enter movie in the search bar </h3>;
		if (isLoading) return <MovieLoader />;
		return <div className="row ">{movies.map((movie: any) => <Movie key={movie.imdbID} {...movie} />)}</div>;
	}
}

export default MoviesList;

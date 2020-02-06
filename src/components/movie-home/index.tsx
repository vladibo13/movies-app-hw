import React from 'react';
import { Link } from 'react-router-dom';

class MovieHome extends React.Component {
	render() {
		return (
			<div className="movie-container text-center ">
				<h1 className="text-white pt-5 display-4">Welcome To Movie Search App </h1>
				<Link className="mt-3 d-block" to="/movies">
					Go To Movie Search
				</Link>
			</div>
		);
	}
}

export default MovieHome;

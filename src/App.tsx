import React from 'react';
import MoviesPage from './components/movies-page';
import MovieHome from './components/movie-home';
import MovieNavbar from './components/movie-navbar';
import MovieDetail from './components/movie-detail';
import { Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<div>
			<MovieNavbar />
			<Switch>
				<Route exact path="/movies" component={MoviesPage} />
				<Route exact path="/" component={MovieHome} />
				<Route exact path="/movie/:imdbID" component={MovieDetail} />
			</Switch>
		</div>
	);
};

export default App;

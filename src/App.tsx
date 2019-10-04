import React from 'react';
import MoviesPage from './components/movies-page';
import MovieHome from './components/movie-home';
import MovieNavbar from './components/movie-navbar';
import { Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<div>
			<MovieNavbar />
			<Switch>
				<Route path="/movies" component={MoviesPage} />
				<Route path="/" component={MovieHome} />
			</Switch>
		</div>
	);
};

export default App;

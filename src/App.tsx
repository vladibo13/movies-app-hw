import React from 'react';
import MoviesPage from './components/movies-page';
import MovieHome from './components/movie-home';
import MovieNavbar from './components/movie-navbar';
import MovieDetail from './components/movie-detail';
import MovieFeedback from './components/movie-feedback';
import MovieComments from './components/movie-comments';
import MoviesFavorite from './components/movies-favorite';
import { Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<div>
			<MovieNavbar />
			<Switch>
				<Route exact path="/" component={MovieHome} />
				<Route exact path="/movies" component={MoviesPage} />
				<Route exact path="/favorites" component={MoviesFavorite} />
				<Route exact path="/movie/:imdbID" component={MovieDetail} />
				<Route exact path="/feedback" component={MovieFeedback} />
				<Route exact path="/comments" component={MovieComments} />
			</Switch>
		</div>
	);
};

export default App;

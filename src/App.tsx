import React from 'react';
import MoviesPage from './components/movies-page';
import MovieHome from './components/movie-home';
import { Route, Switch, Link } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<Switch>
			{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
				<li className="nav-item">
					<Link className="nav-link" to="/">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/movies">
						Movies
					</Link>
				</li>
			</nav> */}
			<Route exact path="/" render={() => <MovieHome />} />
			<Route exact path="/movies" render={() => <MoviesPage />} />
		</Switch>
	);
};

export default App;

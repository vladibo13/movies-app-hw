import React from 'react';
import MoviesPage from './components/movies-page';
import MovieHome from './components/movie-home';
import { Route, Switch, Link } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Movies Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/movies">
							Movies Page
						</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route path="/movies" component={MoviesPage} />
				<Route path="/" component={MovieHome} />
			</Switch>
		</div>
	);
};

export default App;

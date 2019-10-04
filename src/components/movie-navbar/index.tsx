import React from 'react';
import { Link } from 'react-router-dom';

class MovieNavbar extends React.Component<any, any> {
	render() {
		return (
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
		);
	}
}

export default MovieNavbar;

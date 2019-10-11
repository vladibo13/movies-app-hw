import React from 'react';
import { Link } from 'react-router-dom';

class MovieNavbar extends React.Component<any, any> {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">
					<i className="icon ion-md-videocam" />
				</Link>
				<div className="collapse navbar-collapse">
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
						<li className="nav-item">
							<Link className="nav-link" to="/comments">
								Movie Comments
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/feedback">
								Movies Feedback
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/favorites">
								Favorites
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default MovieNavbar;

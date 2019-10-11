import React from 'react';
import { connect } from 'react-redux';

class MoviesFavorite extends React.Component<any, any> {
	render() {
		const { favorites } = this.props;
		// Title, Poster, Year, imdbID, Type
		if (favorites.length === 0) return <h1 className="text-center mt-3 display-4">No Favorites</h1>;
		return (
			<div className="container">
				<div className="row">
					{favorites.map((movie: any) => {
						return (
							<div className="col-sm-6 col-md-4 col-lg-3 my-3">
								<div className="card">
									<img className="img-fluid" src={movie.Poster} />
									<div className="card-body">
										<p className="card-text">{movie.Title}</p>
										<p className="card-text">{movie.Year}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch: any) {
	return {};
	// return {
	// 	onSaveMovieComment: (user: any) => {
	// 		dispatch(saveMovieComment(user));
	// 	}
	// };
}

const mapStateToProps = (state: any) => {
	console.log('state from redux');
	return {
		...state
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesFavorite);

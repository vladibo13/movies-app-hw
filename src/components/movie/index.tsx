import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveMovieToFavorite } from '../../redux/actions';

class Movie extends React.Component<any, any> {
	addMovieFavorite = () => {
		console.log(this.props);
		const { Title, Poster, Year, imdbID, Type } = this.props;
		const { addMovieToFavorite } = this.props.reduxAction;
		addMovieToFavorite({ Title, Poster, Year, imdbID, Type });
	};
	render() {
		const { Title, Poster, Year, imdbID, Type } = this.props;
		console.log(Title);
		return (
			<div className="col-sm-6 col-md-4 col-lg-3 my-3 ">
				<div className="card shadow rounded">
					<img src={Poster} alt={Title + Type} className="card-img-top" />
					<div className="card-body">
						<h5 className="card-title">
							<span className="lead">Title - </span> {Title}
						</h5>
						<p className="card-text">Year - {Year}</p>
						<p className="card-text">Type - {Type}</p>
						<p className="card-text">imdbID - {imdbID}</p>
						<Link to={`/movie/${imdbID}`}>Movie Detail</Link>
						<button onClick={this.addMovieFavorite} className="btn btn-outline-info">
							Add To Favorite
						</button>
						<i style={{ cursor: 'pointer' }} className="icon ion-md-star-outline" />
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		reduxAction: {
			addMovieToFavorite: (movie: any) => {
				dispatch(saveMovieToFavorite(movie));
			}
		}
	};
};

const mapStateToProps = (state: any) => {
	return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

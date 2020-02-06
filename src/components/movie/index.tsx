import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveMovieToFavorite, removeMovieFromFavorite } from '../../redux/actions';

class Movie extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = { isFavorite: false };
	}
	addMovieFavorite = () => {
		console.log(this.props);
		const { Title, Poster, Year, imdbID, Type } = this.props;
		const { addMovieToFavorite, removeMovieFromFavorite } = this.props.reduxAction;
		this.setState((state: any) => ({
			isFavorite: !state.isFavorite
		}));
		console.log(this.state.isFavorite);
		if (this.state.isFavorite) {
			removeMovieFromFavorite({ Title, Poster, Year, imdbID, Type });
			return;
		}
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
						<Link className="mr-2" to={`/movie/${imdbID}`}>
							Movie Detail
						</Link>
						{/* <button onClick={this.addMovieFavorite} className="btn btn-outline-info">
							Add To Favorite
						</button> */}
						<i
							onClick={this.addMovieFavorite}
							style={{ cursor: 'pointer' }}
							className={this.state.isFavorite ? 'icon ion-md-star' : 'icon ion-md-star-outline'}
						/>
						{/* className="icon ion-md-star-outline" */}
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		reduxAction: {
			addMovieToFavorite: (movie: object) => {
				dispatch(saveMovieToFavorite(movie));
			},
			removeMovieFromFavorite: (movie: object) => {
				dispatch(removeMovieFromFavorite(movie));
			}
		}
	};
};

const mapStateToProps = (state: object) => {
	return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

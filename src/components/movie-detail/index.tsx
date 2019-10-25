import React from 'react';
import { connect } from 'react-redux';
import { getSingleMovie } from '../../redux/actions';
import axios from 'axios';
const APIKEY = 'e3f08a46';
class MovieDetail extends React.Component<any, any> {
	// constructor(props: any) {
	// 	super(props);
	// 	console.log(props.match.params.imdbID);
	// 	this.state = { currentMovie: null };
	// }

	componentDidMount() {
		const { imdbID } = this.props.match.params;
		this.props.onSingleMovie(imdbID);
		// const url = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
		// axios.get(url).then((result) => this.setState({ currentMovie: result.data })).catch((e) => console.log(e));
	}
	render() {
		const { currentMovie } = this.props;
		if (!currentMovie) return <div>Loading...</div>;
		return (
			<div className="container my-5">
				<div className="row">
					<div className="col-lg-6 offset-lg-3 ">
						<div className="card shadow rounded">
							<img src={currentMovie.Poster} className="card-img-top" alt={currentMovie.Poster} />
							<div className="card-body">
								<h5 className="card-title">
									{currentMovie.Title} - {currentMovie.Production} - {currentMovie.Released}
								</h5>
								<p className="card-text">
									<u>Plot: </u>
									{currentMovie.Plot}
								</p>
								<p className="card-text">
									<u>Actors: </u>
									{currentMovie.Actors}
								</p>
								<p className="card-text">
									<u>Writers: </u>
									{currentMovie.Writer}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onSingleMovie: (imdbID: any) => {
			dispatch(getSingleMovie(imdbID));
		}
	};
};

function mapStateToProps(state: any) {
	console.log('state from redux');
	return {
		...state
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

// Actors: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans"
// Awards: "N/A"
// BoxOffice: "$664,987,816"
// Country: "USA"
// DVD: "14 Aug 2018"
// Director: "Anthony Russo, Joe Russo"
// Genre: "Action, Adventure, Sci-Fi"
// Language: "English"
// Metascore: "68"
// Plot: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
// Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
// Production: "Walt Disney Pictures"
// Rated: "PG-13"
// Ratings: (3) [{…}, {…}, {…}]
// Released: "27 Apr 2018"
// Response: "True"
// Runtime: "149 min"
// Title: "Avengers: Infinity War"
// Type: "movie"
// Website: "http://marvel.com/movies/movie/223/avengers_infinity_war"
// Writer: "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)"
// Year: "2018"
// imdbID: "tt4154756"
// imdbRating: "8.5"
// imdbVotes: "706,537"

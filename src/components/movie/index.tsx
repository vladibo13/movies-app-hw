import React from 'react';

class Movie extends React.Component<any, any> {
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
					</div>
				</div>
			</div>
		);
	}
}

export default Movie;

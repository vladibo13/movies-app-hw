import React from 'react';
import { saveMovieComment } from '../../redux/actions';
import { connect } from 'react-redux';

class MovieFeedback extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
			title: '',
			comment: ''
		};
	}
	handleMovieCommentChange = (e: any) => {
		console.log('state = ', this.state);

		this.setState({ [e.target.name]: e.target.value });
	};

	handleMovieCommentSave = () => {
		const { onSaveMovieComment } = this.props;
		onSaveMovieComment(this.state);
		this.setState({ comment: '', title: '' });
	};
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-6 offset-3 my-5">
						<h2 className="display-4 text-center my-5">Moovies Feedback</h2>
						<div className="form-group">
							<input
								onChange={this.handleMovieCommentChange}
								name="title"
								placeholder="enter movie title"
								type="text"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<textarea
								className="form-control"
								style={{ height: 200 }}
								onChange={this.handleMovieCommentChange}
								placeholder="enter movie comment"
								name="comment"
							/>
						</div>
						<button
							onClick={this.handleMovieCommentSave}
							type="button"
							className="btn btn-outline-primary btn-lg"
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch: Function) {
	return {
		onSaveMovieComment: (movie: object) => {
			console.log('movie = ' + movie);
			dispatch(saveMovieComment(movie));
		}
	};
}

function mapStateToProps(state: object) {
	return {
		...state
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieFeedback);

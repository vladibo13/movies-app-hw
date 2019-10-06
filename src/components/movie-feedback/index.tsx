import React from 'react';
import { saveMovieComment } from '../../redux/actions';
import { connect } from 'react-redux';

class MovieFeedback extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
			comment: ''
		};
	}
	handleMovieCommentChange = (e: any) => {
		console.log(this.state.comment);
		this.setState({ comment: e.target.value });
	};

	handleMovieCommentSave = () => {
		const { onSaveMovieComment } = this.props;
		onSaveMovieComment(this.state.comment);
		this.setState({ comment: '' });
	};
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-6 offset-3 my-5">
						<div className="form-group">
							<textarea
								value={this.state.comment}
								className="form-control"
								style={{ height: 200 }}
								onChange={this.handleMovieCommentChange}
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

function mapDispatchToProps(dispatch: any) {
	// return {};
	return {
		onSaveMovieComment: (movie: any) => {
			console.log('movie = ' + movie);
			dispatch(saveMovieComment(movie));
		}
	};
}

function mapStateToProps(state: any) {
	console.log('state from redux');
	return {
		...state
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieFeedback);

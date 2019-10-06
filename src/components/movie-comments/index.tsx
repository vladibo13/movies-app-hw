import React from 'react';
import { connect } from 'react-redux';

class MovieComments extends React.Component<any, any> {
	render() {
		const { comments } = this.props;
		console.log(comments);
		if (comments.length === 0) return <h1>No Comments</h1>;
		return (
			<div className="container">
				<div className="row">
					<div className="col-6 offset-3 my-5">
						{comments.map((comment: any, index: any) => (
							<p className="shadow p-5" key={index}>
								{comment.newComment}
							</p>
						))}
					</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieComments);

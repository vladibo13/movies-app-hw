import React from 'react';
import { connect } from 'react-redux';

class MovieComments extends React.Component<any, any> {
	render() {
		const { comments } = this.props;
		console.log(comments);
		if (comments.length === 0) return <h1 className="text-center mt-3 display-4">No Comments</h1>;
		return (
			<div className="container">
				<div className="row">
					{comments.map((c: any, index: number) => (
						<div className="col-6  my-2">
							<ul className="list-group p-2" key={index}>
								<li className="list-group-item">
									<h5>{c.title}</h5>
									<p>{c.comment}</p>
								</li>
							</ul>
						</div>
					))}
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch: any) {
	return {};
}

const mapStateToProps = (state: any) => {
	console.log('state from redux');
	return {
		...state
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieComments);

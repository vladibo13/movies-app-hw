import React from 'react';

class MovieLoader extends React.Component<any, any> {
	render() {
		return (
			<div className="text-center">
				<div
					className="spinner-border mt-5 text-primary"
					role="status"
					style={{ width: '15rem', height: '15rem' }}
				>
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	}
}

export default MovieLoader;

import React from 'react';

class MovieSearch extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = { searchTerm: '' };
	}
	handleFormInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleOnClick = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault();
		const { movieSearch } = this.props;
		const { searchTerm } = this.state;
		movieSearch(searchTerm);
		this.setState({ searchTerm: '' });
	};
	render() {
		return (
			<form className="mb-3">
				<div className="input-group w-50 mx-auto">
					<input
						value={this.state.searchTerm}
						type="text"
						className="form-control"
						placeholder="Movie Search"
						name="searchTerm"
						onChange={this.handleFormInput}
					/>

					<div className="input-group-append">
						<button type="submit" className="btn btn-outline-primary " onClick={this.handleOnClick}>
							Search Movie
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default MovieSearch;

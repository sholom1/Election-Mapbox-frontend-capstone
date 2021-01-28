import React, { Component } from 'react';

class AddCategoryForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: '',
		};
		console.log('in constructor', this.state);
	}

	handleChange = (event) => {
		event.preventDefault();
		console.log('state in handleChange', this.state);
		this.setState({
			[event.target.name]: event.target.value,
		});

	}

	handleSubmit = async () => {
		this.props.postCategory(this.state);
	};

	render() {
		return (
			<div>
				<label>
					Add Category:
					<input type="text" name="category" onChange={this.handleChange} value={this.state.category} />
				</label>
				<button type="button" onClick={this.handleSubmit}>
					Submit
				</button>
			</div>
		);
	}
}

export default AddCategoryForm;

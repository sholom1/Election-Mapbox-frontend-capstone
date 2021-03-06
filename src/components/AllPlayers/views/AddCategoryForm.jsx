import React, { Component } from 'react';
import './styles/InnerForms.css';

class AddCategoryForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: '',
		};
		// console.log('in constructor', this.state);
	}

	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value,
		});

	}

	handleSubmit = async (event) => {
		this.props.postCategory(this.state);
	};

	render() {
		return (
			<div className='innerForm'>
				<h2>Add Category</h2>
				<label>
					Category Name:
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

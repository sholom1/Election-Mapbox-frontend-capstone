import React, { Component } from 'react';
import './styles/InnerForms.css';

class AddColorFilesForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorFiles: null,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.files,
		});
		// console.log('state', this.state);
	}

	handleUpload = async () => {
		this.props.postColorFiles(this.state);
	};

	render() {
		// console.log('state in render', this.state);
		return (
			<div className='innerForm'>
				<h2>Upload New Color Files</h2>
				<input type="file" name="colorFiles" multiple onChange={this.handleChange} />
				<button type="button" onClick={this.handleUpload}>
					Upload
				</button>
			</div>
		);
	}
}

export default AddColorFilesForm;

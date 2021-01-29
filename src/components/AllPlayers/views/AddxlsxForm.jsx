import React, { Component } from 'react';
import './styles/InnerForms.css';

class AddxlsxForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			xlsxFiles: null,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.files,
		});
		console.log('state', this.state);
	}

	handleUpload = async (e) => {
		this.props.postxlsxFiles(this.state);
		this.form.reset();
	};

	render() {
		console.log('state in render', this.state);
		return (
			<div className='innerForm'>
				<h2>Upload New Xlsx Files</h2>
				<input className='fileLoad' type="file" name="xlsxFiles" multiple onChange={this.handleChange} />
				<button type="button" onClick={this.handleUpload}>
					Upload
				</button>
			</div>
		);
	}
}

export default AddxlsxForm;

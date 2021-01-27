import React, { Component } from 'react';

class AddxlsxForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			xlsxKey: '',
			xlsxFile: null,
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

	handleUpload = async () => {
		this.props.postxlsxFiles(this.state);
	};

	render() {
		console.log('state in render', this.state);
		return (
			<div>
				<input type="file" name="xlsx" multiple onChange={this.handleChange} />
				<button type="button" onClick={this.handleUpload}>
					Upload
				</button>
			</div>
		);
	}
}

export default AddxlsxForm;

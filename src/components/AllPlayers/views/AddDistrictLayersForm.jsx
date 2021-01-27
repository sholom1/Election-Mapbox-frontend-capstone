import React, { Component } from 'react';

class AddDistrictLayersForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			districtKey: '',
			districtLayers: null,
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
		this.props.postDistrictLayers(this.state);
	};

	render() {
		console.log('state in render', this.state);
		return (
			<div>
				<label>
					District Key:
					<input type="text" name="districtKey" onChange={this.handleChange} value={this.state.districtKey} />
				</label>
				<input type="file" name="districtLayers" multiple onChange={this.handleChange} />
				<button type="button" onClick={this.handleUpload}>
					Upload
				</button>
			</div>
		);
	}
}

export default AddDistrictLayersForm;

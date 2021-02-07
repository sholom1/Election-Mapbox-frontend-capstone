import React, { Component } from 'react';
import './styles/InnerForms.css';

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

		if(event.target.name === 'districtKey'){
			this.setState({
				[event.target.name]: event.target.value,
			});
		}
		else{
			this.setState({
				[event.target.name]: event.target.files,
			});			
		}

		// console.log('state', this.state);
	}

	// handleKeyChange(event) {
	// 	event.preventDefault();
	// 	this.setState({
	// 		[event.target.name]: event.target.value,
	// 	});
	// 	console.log('state', this.state);
	// }

	handleUpload = async () => {
		this.props.postDistrictLayers(this.state);
		// this.setState ({
		// 	districtKey: '',
		// })
	};

	render() {
		console.log('state in render', this.state);
		return (
			<div className='innerForm'>
				<h2>Upload New District Layer</h2>
				<label>
					District Key:
					<input type="text" name="districtKey" onChange={this.handleChange} value={this.state.districtKey} />
				</label>
                <label>Upload new district layers:</label>
				<input className='fileLoad' type="file" name="districtLayers" multiple onChange={this.handleChange} />
				<button type="button" onClick={this.handleUpload}>
					Upload
				</button>
			</div>
		);
	}
}

export default AddDistrictLayersForm;

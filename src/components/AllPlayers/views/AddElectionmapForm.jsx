import React, { Component } from 'react';
import electionmapReducer from '../../../redux/electionmap/electionmap.reducer';

class AddElectionmapForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			category:'',
			layerFile: 0,
			excelFile: 0,
			colorFile: 0,
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.layerFile && this.state.colorFile && this.state.excelFile && this.state.category)
			this.props.postElectionmap(this.state);
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		console.log('available categories', this.props.availableCategories);
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
				</label>


				<label>
					Select Category:
					<select name="category" onChange={this.handleChange}>
						<option value={0} selected disabled hidden>
							Choose here
						</option>
						{this.props.availableCategories !== undefined ? (
							this.props.availableCategories.map((element) => {
								return (
									<option key={element.name+element.id} value={element.id}>
										{element.name}
									</option>
								);
							})
						) : (
							<option value={0}>No Available Categories</option>
						)}
					</select>
				</label>


				<label>
					Select District Layer:
					<select name="layerFile" onChange={this.handleChange}>
						<option value={0} selected disabled hidden>
							Choose here
						</option>
						{this.props.availableLayers !== undefined ? (
							this.props.availableLayers.map((element) => {
								return (
									<option key={element.name + element.id} value={element.id}>
										{element.name}
									</option>
								);
							})
						) : (
							<option value={0}>No Available Layers</option>
						)}
					</select>
				</label>
				<label>
					Select Excel File:
					<select name="excelFile" onChange={this.handleChange}>
						<option value={0} selected disabled hidden>
							Choose here
						</option>
						{this.props.availableExcelFiles !== undefined ? (
							this.props.availableExcelFiles.map((element) => {
								return (
									<option key={element.name + element.id} value={element.id}>
										{element.name}
									</option>
								);
							})
						) : (
							<option value={-1}>No Available Files</option>
						)}
					</select>
				</label>
				<label>
					Select Color File:
					<select name="colorFile" onChange={this.handleChange}>
						<option value={0} selected disabled hidden>
							Choose here
						</option>
						{this.props.availableColorFiles !== undefined ? (
							this.props.availableColorFiles.map((element) => {
								return (
									<option key={element.name + element.id} value={element.id}>
										{element.name}
									</option>
								);
							})
						) : (
							<option value={-1}>No Available Files</option>
						)}
					</select>
				</label>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default AddElectionmapForm;

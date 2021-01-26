import React, { Component } from 'react';

class AddDistrictLayersForm extends Component {

    constructor(props){
        super(props);
        this.state = { 
            districtKey: '',
            districtLayers: '',
         }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
                districtLayers: event.target.files,
        });
        console.log(this.state);
    }

    handleUpload = () => {
        const data = new FormData();
        for(let i=0; i<this.state.districtLayers.length; i++){
            data.append('file', this.state.districtLayers[i])
        }
        console.log('state', this.state);
        data.append(this.state.districtKey);

        console.log('inside handleUpload');

        this.props.postDistrictLayers(data);
    }

    render() { 
        return ( 
            <div>
                <label>
                    District Key: 
                    <input type='text' name='districtKey' onChange={ this.handleChange } value={ this.state.districtKey } />
                </label>
                <input type='file' multiple onChange={ this.state.handleChange } />
                <button type='button' onClick={ this.state.handleUpload }>Upload</button>
            </div>
         );
    }
}
 
export default AddDistrictLayersForm;
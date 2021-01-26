import React, { Component } from 'react';

class AddDistrictLayersForm extends Component {

    constructor(props){
        super(props);
        this.state = { 
            districtKey: '',
            districtLayers: null,
         }

         this.handleChange = this.handleChange.bind(this);
         this.handleUpload = this.handleUpload.bind(this);

    }

    handleChange (event) {
        event.preventDefault();
        this.setState({
                districtLayers: event.target.files,
        });
        console.log('state', this.state);
    }

    handleUpload = () => {
        const data = new FormData();
        for(let i=0; i<this.state.districtLayers.length; i++){
            data.append('file', this.state.districtLayers[i])
        }
        data.append('districtKey', this.state.districtKey);


        for (var key of data.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
        this.props.postDistrictLayers(data);
    }

    render() { 
        console.log('state in render', this.state);
        return ( 
            <div>
                <label>
                    District Key: 
                    <input type='text' name='districtKey' onChange={ this.handleChange } value={ this.state.districtKey } />
                </label>
                <input type='file' multiple onChange={ this.handleChange } />
                <button type='button' onClick={ this.handleUpload }>Upload</button>
            </div>
         );
    }
}
 
export default AddDistrictLayersForm;
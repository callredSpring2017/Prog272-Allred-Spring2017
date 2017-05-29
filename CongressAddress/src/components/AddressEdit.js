import React, {Component} from 'react';
import '../css/App.css';

class AddressEdit extends Component {

    render() {
        return (
            <div className='addressEditRender'>
                <div  className="container" style={{width: 200 + "px"}}>
                <input id='elfFirstName'
                       className='App-intro'
                       value={this.props.address.firstName}
                       onChange={this.props.onNameChange} />
                <input id='elfLastName'
                       className='App-intro'
                       value={this.props.address.lastName}
                       onChange={this.props.onNameChange} />
                <input id='elfStreetName'
                       className='App-intro'
                       value={this.props.address.streetAddress}
                       onChange={this.props.onNameChange} />
                <input id='elfCity'
                       className='App-intro'
                       value={this.props.address.city}
                       onChange={this.props.onNameChange} />
                <input id='elfState'
                       className='App-intro'
                       value={this.props.address.state}
                       onChange={this.props.onNameChange} />
                <input id='elfZipCode'
                       className='App-intro'
                       value={this.props.address.zipCode}
                       onChange={this.props.onNameChange} />
                <input id='elfWebsite'
                       className="App-intro"
                       value={this.props.address.website}
                       onChange={this.props.onNameChange} />
                </div>
                <div className="row">
                    <button className="btn btn-primary center-block" id='getFirstAddress' onClick={this.props.setAddress}>First</button>
                    <button className="btn btn-primary center-block" id='getAddress' onClick={this.props.setAddress}>Get Prev</button>
                    <button className="btn btn-primary center-block" id='setAddress' onClick={this.props.setAddress}>Get Next</button>
                    <button className="btn btn-primary center-block" id='setLastAddress' onClick={this.props.setAddress}>Last</button>
                </div>
            </div>
        );
    }

}

export default AddressEdit;

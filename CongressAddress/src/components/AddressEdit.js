import React, {Component} from 'react';
import '../css/App.css';

class AddressEdit extends Component {

    render() {
        return (
            <div className='addressEditRender'>
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
                       className='App-intro'
                       value={this.props.address.website}
                       onChange={this.props.onNameChange} />
                <button className='elf' id='getFirstAddress' onClick={this.props.getFirstAddress}>First</button>
                <button className='elf' id='getPreviousAddress' onClick={this.props.getAddress}>Get Prev</button>
                <button className='elf' id='setAddress' onClick={this.props.setAddress}>Get Next</button>
                <button className='elf' id='setLastAddress' onClick={this.props.setLastAddress}>Last</button>
            </div>
        );
    }

}

export default AddressEdit;
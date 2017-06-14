/**
 * Created by bcuser on 5/1/17.
 */

import React, {Component} from 'react';
import '../css/App.css';


class AddressEdit extends Component {



    render() {
        return (
            <div className="addressEditRender">
                <input id="elfFirstName"
                       className="App-intro"
                       value={this.props.address.firstName}
                       onChange={this.props.onNameChange} />
                <input id="elfLastName"
                       className="App-intro"
                       value={this.props.address.lastName}
                       onChange={this.props.onNameChange} />
                <input id="elfStreetName"
                       className="App-intro"
                       value={this.props.address.streetAddress}
                       onChange={this.props.onNameChange} />
                <input id="elfCity"
                       className="App-intro"
                       value={this.props.address.city}
                       onChange={this.props.onNameChange} />
                <input id="elfState"
                       className="App-intro"
                       value={this.props.address.state}
                       onChange={this.props.onNameChange} />
                <input id="elfZipCode"
                       className="App-intro"
                       value={this.props.address.zipCode}
                       onChange={this.props.onNameChange} />
                <button className='elf' id='setAddress' onClick={this.props.setAddress}>Set Address</button>
            </div>
        );
    }

}

export default AddressEdit;
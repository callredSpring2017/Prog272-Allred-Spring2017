/**
 * Created by bcuser on 4/22/17.
 */
import React, {Component} from 'react';

import addresses from './addresslist';

class Address extends Component {
    constructor() {
        super();

        const AddressList = addresses[0];
        this.state = {
            firstName: AddressList.firstName,
            lastName: AddressList.lastName,
            streetAddress: AddressList.streetAddress,
            city: AddressList.city,
            State: AddressList.State,
            zipCode: AddressList.zipCode
        }
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">firstName: {this.state.firstName}</p>
                <p className="App-intro">lastName: {this.state.lastName}</p>
                <p className="App-intro">streetAddress: {this.state.streetAddress}</p>
                <p className="App-intro">city: {this.state.city}</p>
                <p className="App-intro">state: {this.state.State}</p>
                <p className="App-intro">zipCode: {this.state.zipCode}</p>
                <button className='elf' id='address' onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }

    setAddress = () => {
        const AddressList = addresses[1];
        this.setState({
            firstName: AddressList.firstName,
            lastName: AddressList.lastName,
            streetAddress: AddressList.streetAddress,
            city: AddressList.city,
            State: AddressList.State,
            zipCode: AddressList.zipCode
        })
    };
}


export default Address;

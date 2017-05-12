/**
 * Created by bcuser on 5/1/17.
 */
/**
 * Created by bcuser on 4/24/17.
 */
//eslint-disable-next-line
import React, {Component} from 'react';
import '../css/App.css';
import Addresses from './address-list';
import AddressEdit from './AddressEdit';
import Address from './address';

class AddressChanger extends Address {

    onNameChange = (event) => {
        const address = Addresses[this.addressindex];
        switch (event.target.id) {
            case 'elfFirstName':
                address.firstName = event.target.value;
                break;
            case 'elfLastName':
                address.lastName = event.target.value;
                break;
            case 'elfStreetName':
                address.streetAddress = event.target.value;
                break;
            case 'elfCity':
                address.city = event.target.value;
                break;
            case 'elfState':
                address.state = event.target.value;
                break;
            case 'elfZipCode':
                address.zipCode = event.target.value;
                break;
            case 'elfWebsite':
                address.website = event.target.value;
                break;
            default:
                throw new Error('OH NO BAD CASE in Address onNameChange');
        }
        this.setState({
            address: address
        })
    };

    render() {
        console.log("ADDRESS", this.state.address);
        return (
            <div className="App">
                <AddressEdit
                    address={this.state.address}
                    setAddress={this.setAddress}
                    getAddress={this.getAddress}
                    setLastAddress={this.setLastAddress}
                    getFirstAddress={this.getFirstAddress}
                    onNameChange={this.onNameChange}
                />
            </div>
        );
    }

}

export default AddressChanger;

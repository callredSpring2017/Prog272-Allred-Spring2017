import React from 'react';
import '../css/App.css';
import Addresses from './address-list';
import AddressEdit from './AddressEdit';
import Address from './Address';

class AddressChanger extends Address {
    onNameChange(event)  {
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
        });
    };

    render() {
        return (
            <div className='App'>
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
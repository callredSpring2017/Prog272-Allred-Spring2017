import React, {Component} from 'react';
import '../css/App.css';
import Addresses from './address-list';
import AddressShow from './address-show';
//import AddressEdit from './AddressEdit';
import {
    saveToLocalStorage,
    clearLocalStorage,
    getLocalStorage
} from '../assets/elf-local-storage'

class Address extends Component {
    constructor() {
        super();
        this.addressindex = 0;
        this.state = {

            address: Addresses[this.addressindex ]

        }
        this.onNameChange = this.onNameChange.bind(this);
        Addresses.forEach(function(address) {
            saveToLocalStorage()
        });
    }


    setAddress = () => {
        this.addressindex = 1;
        this.setState({

            address: Addresses[this.addressindex]
        })
    };


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
                <AddressShow
                    address={this.state.address}
                    setAddress={this.setAddress}
                />
            </div>
        );
    }

}

export default Address;

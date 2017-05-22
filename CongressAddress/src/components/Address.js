import React, {Component} from 'react';
import '../css/App.css';
import Addresses from './address-list';
import AddressShow from './Address-Show';
import DataLoader from '../assets/DataLoader';
import 'whatwg-fetch';

const dataLoader = new DataLoader();

class Address extends Component {
    constructor() {
        super();
        this.addressindex = 0;
        this.state = {

            address: Addresses[this.addressindex ]

        };
        this.onNameChange = this.onNameChange.bind(this);

        const that = this;
        dataLoader.loadAddresses(function(addressCount) {
            if (!addressCount) {
                throw new Error('Cannot get address count in Address.js');
            }
            that.addressCount = addressCount;
        });
    }

    setAddress = () => {
        this.addressindex++;
        if (this.addressindex > Addresses.length - 1) {
            this.addressindex = Addresses.length - 1;
        }
        this.setState({
            address: Addresses[this.addressindex]
        })
    };

    getAddress = () => {
        this.addressindex--;
        if (this.addressindex < 0) {
            this.addressindex = 0;
        }
        this.setState({
            address: Addresses[this.addressindex]
        })
    };

    setLastAddress = () => {
        this.addressindex = Addresses.length - 1;
        this.setState({
            address: Addresses[this.addressindex]
        })
    };

    getFirstAddress = () => {
        this.addressindex = 0;
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
        return (
            <div className="App">
                <AddressShow
                    address={this.state.address}
                    setAddress={this.setAddress}
                    getAddress={this.getAddress}
                    setLastAddress={this.setLastAddress}
                    getFirstAddress={this.getFirstAddress}
                />
            </div>
        );
    }

}

export default Address;

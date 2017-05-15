import React, {Component} from 'react';
import '../css/App.css';
import Addresses from './address-list';
import AddressShow from './address-show';
import logger from '../assets/logger';
import 'whatwg-fetch';
/*import {
    // eslint-disable-next-line
    saveToLocalStorage,
    // eslint-disable-next-line
    saveToLocalStorageByName,
    // eslint-disable-next-line
    clearLocalStorage,
    // eslint-disable-next-line
    getLocalStorage
} from '../assets/elf-local-storage'*/

class Address extends Component {
    constructor() {
        super();
        this.addressindex = 0;
        this.state = {
            address: Addresses[this.addressindex]
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.loadAddresses();
/*
        Addresses.forEach(function(address) {
            saveToLocalStorage()
        });
*/
    }

    loadAddresses = () => {

        var PadNumber = function(numberToPad, width, padValue){

            padValue = padValue|| 0;
            numberToPad += '';
            if (numberToPad.length >= width){
                return numberToPad
            } else {
                return new Array(width-numberToPad.length + 1).join(padValue) + numberToPad;
            }
        }
        const that = this;
        fetch('./address.json').then(function(data) {
            const addresses = data.json();
            return addresses;
        }).then(function (data) {
            //console.log(JSON.stringify(data, null, 4));
            that.addresses = data;
            data.forEach(function(address, index)
            {
                const addressString = JSON.stringify(address);
                console.log(addressString);
                localStorage.setItem('elf' + PadNumber(index,4,0), addressString)
                //saveToLocalStorage();
            });
        }).catch(function(err) {
            logger.log(err);
        })
    };

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
        console.log("ADDRESS", this.state.address);
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

import React, {Component} from 'react';
import '../css/App.css';
import Addresses from './address-list';
import AddressShow from './address-show';
import DataLoader from '../assets/DataLoader';
import 'whatwg-fetch';
//eslint-disable-next-line
import {getByIndex} from '../assets/elf-local-storage'
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
                throw new Error('Cannot get address count in address.js');
            }
            that.addressCount = addressCount;
        });
    }


    setAddress = () => {
        this.addressindex = 1;
        this.setState({

            address: Addresses[this.addressindex]
        })
    };

/*    loadAddresses = () => {

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
    };*/

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

import React, {Component} from 'react';
import {
    Route
} from 'react-router-dom';
import Address from './Address';
import AddressEdit from './AddressEdit';
import SmallNumbers from './SmallNumbers';
import ElfHeader from './ElfHeader';
import ElfMenu from "./ElfMenu";
import DataLoader from '../assets/DataLoader';
import 'whatwg-fetch';
import Addresses from './address-list';
//eslint-disable-next-line
import {getByIndex} from '../assets/elf-local-storage'
const dataLoader = new DataLoader();


class DataMaven extends Component {
    constructor(props) {
        super(props);
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


    setAddress = (event) => {
        console.log(event.target.id);
        this.addressindex++;
        if(this.addressindex > 4){
            this.addressindex = 4;
        }
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
        return (
            <div className="container">
                <ElfHeader />
                    <div>
                        <ElfMenu />
                        <Route exact path="/" render={(props) => (
                            <Address {...props}
                                         address={this.state.address}
                                         onAddressChange={this.onAddressChange}
                                         setAddress={this.setAddress}
                                         onNameChange={this.onNameChange}
                            />
                        )}/>
                        <Route path='/edit' render={(props) => (
                            <AddressEdit {...props}
                                         address={this.state.address}
                                         onAddressChange={this.onAddressChange}
                                         setAddress={this.setAddress}
                                         onNameChange={this.onNameChange}
                            />
                        )}/>
                        <Route path="/small" component={SmallNumbers}/>
                    </div>
            </div>

        );
    }
}

export default DataMaven;
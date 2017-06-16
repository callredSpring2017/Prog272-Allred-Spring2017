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
//import Addresses from './address-list';
const dataLoader = new DataLoader();
import { getByIndex } from '../assets/elf-local-storage';
import Logger from '../assets/elf-logger';
const logger = new Logger('data-maven', 'yellow', 'green', '16px');

class DataMaven extends Component {
    constructor(props) {
        super(props);
        this.addressindex = 0;
        var unknown = "loading";

        this.state = {
            address: {
                'firstName': unknown,
                'lastName': unknown,
                'streetAddress': unknown,
                'city': unknown,
                'state': unknown,
                'zipCode': unknown,
                'phone': unknown,
                'website': unknown,
                'email': unknown,
                'contact': unknown
            }

        };
        this.onNameChange = this.onNameChange.bind(this);

        // const that = this;
        // dataLoader.loadAddresses(function(addressCount) {
        //     if (!addressCount) {
        //         throw new Error('Cannot get address count in Address.js');
        //     }
        //     that.addressCount = addressCount;
        // });
    }

    componentDidMount() {
        logger.log('DID MOUNT');
        const that = this;
        dataLoader.loadAddresses(function(addressCount) {
            if (!addressCount) {
                throw new Error('Cannot get address count in address.js');
            }
            that.addressCount = addressCount;
            logger.log('LOADED ADDRESS');
            const address = getByIndex(that.addressindex);
            that.setState({
                address: address
            });
        });
    }

    setAddress = (event) => {
        //console.log(event.target.id);
        switch (event.target.id){
            case 'getFirstAddress':
                this.addressindex = 0;
                const address = getByIndex(this.addressindex);
                this.setState({
                    address: address
                });
                break;
            case 'getAddress':
                if (this.addressindex > 0) {
                    this.addressindex--;
                    const address = getByIndex(this.addressindex);
                    this.setState({
                        address: address
                    });
                }
                break;
            case 'setAddress':
                if (this.addressindex < this.addressCount - 1) {
                    this.addressindex++;
                    const address = getByIndex(this.addressindex);
                    this.setState({
                        address: address
                    });
                }
                break;
            case 'setLastAddress':
                if (this.addressindex < this.addressCount - 1) {
                    this.addressindex = this.addressCount - 1;
                    const address = getByIndex(this.addressindex);
                    this.setState({
                        address: address
                    });
                }
                break;
            default:
                throw new Error('OH-NO BAD CASE in Address onAddressChange');
        }
    };

    onNameChange = (event) => {
        logger.log('onAddressChange called with index:', this.addressindex);
        if (this.addressindex < this.addressCount - 1) {
            this.addressindex += 1;
            const address = getByIndex(this.addressindex);
            this.setState({
                address: address
            });
        }
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
                    <Route path="/small" component={SmallNumbers} />
                </div>
            </div>

        );
    }
}

export default DataMaven;
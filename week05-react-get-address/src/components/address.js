/**
 * Created by bcuser on 4/24/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import Addresses from './address-list';
import AddressShow from './address-show';
//import AddressEdit from './AddressEdit';

class Address extends Component {
    constructor() {
        super();
        this.addressindex = 0;
        this.state = {
            // firstName: this.props.address[index].firstName,
            // lastName: this.props.address[index].lastName,
            // streetAddress: this.props.address[index].streetAddress,
            // city: this.props.address[index].city,
            // state: this.props.address[index].state,
            // zipCode: this.props.address[index].zipCode
            address: Addresses[this.addressindex ]
        }
    }


    setAddress = () => {
        this.addressindex = 1;
        this.setState({
            /*            firstName: 'Patty',
             lastName: 'Murray',
             streetAddress: '915 2nd Ave #2988',
             city: 'Seattle',
             state: 'Washington',
             zipCode: '98174'*/
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
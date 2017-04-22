/**
 * Created by bcuser on 4/22/17.
 */
import React, {Component} from 'react';

import addresses from './addresslist';

class Address extends Component {
    constructor() {
        super();
        const unknown = 'unknown';
        this.state = {
            firstName: unknown,
            lastName: unknown,
            streetAddress: unknown,
            city: unknown,
            State: unknown,
            zipCode: unknown
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
        this.setState({
            firstName: 'Patty',
            lastName: 'Murray',
            streetAddress: '915 2nd Ave #2988',
            city: 'Seattle',
            State: 'Washington',
            zipCode: '98174'
        })
    };
}


export default Address;
/**
 * Created by bcuser on 4/24/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import addresses from './address-list';

class App extends Component {
    constructor(props) {
        super(props);
        const index = 0;
        this.state = {
            // firstName: this.props.address[index].firstName,
            // lastName: this.props.address[index].lastName,
            // streetAddress: this.props.address[index].streetAddress,
            // city: this.props.address[index].city,
            // state: this.props.address[index].state,
            // zipCode: this.props.address[index].zipCode
            address: addresses[index]
        }
    }


    setAddress = () => {
        this.setState({
            firstName: 'Patty',
            lastName: 'Murray',
            streetAddress: '915 2nd Ave #2988',
            city: 'Seattle',
            state: 'Washington',
            zipCode: '98174'
        })
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">firstName: {this.state.firstName}</p>
                <p className="App-intro">lastName: {this.state.lastName}</p>
                <p className="App-intro">streetAddress: {this.state.streetAddress}</p>
                <p className="App-intro">city: {this.state.city}</p>
                <p className="App-intro">state: {this.state.state}</p>
                <p className="App-intro">zipCode: {this.state.zipCode}</p>
                <button className='elf' id='address' onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }

}

export default App;
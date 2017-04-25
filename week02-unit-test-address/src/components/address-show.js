/**
 * Created by bcuser on 4/24/17.
 */
import React, {Component} from 'react';
import '../css/App.css';


class AddressShow extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.address);
        // this.state = {
        //     address: this.props.address
        // }
    }


    setAddress = () => {
        this.setState({

        })
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">firstName: {this.props.address.firstName}</p>
                <p className="App-intro">lastName: {this.props.address.lastName}</p>
                <p className="App-intro">streetAddress: {this.props.address.streetAddress}</p>
                <p className="App-intro">city: {this.props.address.city}</p>
                <p className="App-intro">state: {this.props.address.state}</p>
                <p className="App-intro">zipCode: {this.props.address.zipCode}</p>
                <button className='elf' id='address' onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }

}

export default AddressShow;

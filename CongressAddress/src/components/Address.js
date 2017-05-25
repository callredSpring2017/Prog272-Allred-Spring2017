import React, {Component} from 'react';
import '../css/App.css';
import AddressShow from './Address-Show';


class Address extends Component {
    /*    constructor(props) {
     super(props);
     }*/



    render() {
        return (
            <div className="App">
                <AddressShow
                    address={this.props.address}
                    setAddress={this.props.setAddress}
                />
            </div>
        );
    }

}

export default Address;

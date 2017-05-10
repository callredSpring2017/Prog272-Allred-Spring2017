/**
 * Created by bcuser on 4/24/17.
 */
import React, {Component} from 'react';
import '../css/App.css';


//could get rid of this, but left it to show it's there behind the scenes
class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.quiet = true;
        this.log(this.props.address);
        // this.state = {
        //     address: this.props.address
        // }
        this.log(props);
    }

    log(message, message2='', message3=''){

        if(!this.quiet){

            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3)
        }

    }


    setAddress = () => {
        this.setState({

        })
    };

    render() {
        this.log('render called');
        return (
            <div className="addressShowRender">
                <p className="App-intro">firstName: {this.props.address.firstName}</p>
                <p className="App-intro">lastName: {this.props.address.lastName}</p>
                <p className="App-intro">streetAddress: {this.props.address.streetAddress}</p>
                <p className="App-intro">city: {this.props.address.city}</p>
                <p className="App-intro">state: {this.props.address.state}</p>
                <p className="App-intro">zipCode: {this.props.address.zipCode}</p>
                <button className='elf' id='getAddress' onClick={this.props.setAddress}>Set Address</button>
            </div>
        );
    }

}

export default AddressShow;
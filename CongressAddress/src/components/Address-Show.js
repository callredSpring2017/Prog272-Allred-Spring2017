import React, {Component} from 'react';
import '../css/App.css';


//could get rid of this, but left it to show it's there behind the scenes
class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.quiet = true;
        this.log(this.props.address);
        this.log(props);
    }

    log(message, message2 = '', message3 = '') {

        if (!this.quiet) {

            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3)
        }

    }

    setAddress = () => {
        this.setState({})
    };

    getAddress = () => {
        this.setState({})
    };

    getFirstAddress = () => {
        this.setState({})
    };

    setLastAddress = () => {
        this.setState({})
    };

    render() {
        this.log('render called');
        return (
            <div className='addressShowRender'>
                <p className='App-intro'>firstName: {this.props.address.firstName}</p>
                <p className='App-intro'>lastName: {this.props.address.lastName}</p>
                <p className='App-intro'>streetAddress: {this.props.address.streetAddress}</p>
                <p className='App-intro'>city: {this.props.address.city}</p>
                <p className='App-intro'>state: {this.props.address.state}</p>
                <p className='App-intro'>zipCode: {this.props.address.zipCode}</p>
                <p className='App-intro'>website: {this.props.address.website}</p>
                <button className='elf' id='getFirstAddress' onClick={this.props.getFirstAddress}>First</button>
                <button className='elf' id='getAddress' onClick={this.props.getAddress}>Get Prev</button>
                <button className='elf' id='setAddress' onClick={this.props.setAddress}>Get Next</button>
                <button className='elf' id='setLastAddress' onClick={this.props.setLastAddress}>Last</button>
            </div>
        );
    }

}

export default AddressShow;

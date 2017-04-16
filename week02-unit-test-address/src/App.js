import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0',
            firstName: 'unknown',
            lastName: 'unknown',
            streetAddress: 'unknown',
            city: 'unknown',
            state: 'unknown',
            zipCode: 'unknown'
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Prog 272</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p className="App-intro">Nine: {this.state.nine}</p>
                <p className="App-intro">firstName: {this.state.firstName}</p>
                <p className="App-intro">lastName: {this.state.lastName}</p>
                <p className="App-intro">streetAddress: {this.state.streetAddress}</p>
                <p className="App-intro">city: {this.state.city}</p>
                <p className="App-intro">state: {this.state.state}</p>
                <p className="App-intro">zipCode: {this.state.zipCode}</p>
                <button className='elf' onClick={this.getNine}>Get Nine</button>
                <button className='orc' onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }

    getNine = () => {
        console.log('state');
        this.setState({nine: '9'})
    };

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
}

export default App;
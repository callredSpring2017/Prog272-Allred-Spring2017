import React, {Component} from 'react';
import './css/App.css';
import ElfHeader from './components/elfheader.js';
import Address from './components/address';

class App extends Component {
    constructor() {
        super();
        const unknown = 'unknown';
        this.state = {
            nine: '0',
            firstName: unknown,
            lastName: unknown,
            streetAddress: unknown,
            city: unknown,
            state: unknown,
            zipCode: unknown
        }
    }

    getNine = () => {
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

    render() {
        return (
            <div className="App">
                <ElfHeader/>
                <Address/>
                <button className='elf' id='nine' onClick={this.getNine}>Get Nine</button>
            </div>
        );
    }

}

export default App;
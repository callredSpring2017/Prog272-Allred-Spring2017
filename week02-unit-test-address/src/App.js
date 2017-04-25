import React, {Component} from 'react';
import './css/App.css';
import ElfHeader from './components/elfheader.js';
// import Address from './components/address';

class App extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0',
        }
    }

    getNine = () => {
        this.setState({nine: '9'})
    };

    render() {
        return (
            <div className="App">
                <ElfHeader/>
                <p className="App-intro">Nine: {this.state.nine}</p>
                <button className='elf' id='nine' onClick={this.getNine}>Get Nine</button>
            </div>
        );
    }

}

export default App;
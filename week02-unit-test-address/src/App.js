import React, {Component} from 'react';
import './css/App.css';
import './css/index.css';
import ElfHeader from './components/elfheader';
import Address from './components/address';


class App extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0',

        }
    }
    render() {
        return (
            <div className="App">
                <ElfHeader/>
                <p className="App-intro">Nine: {this.state.nine}</p>
                <Address/>
                <button className='elf' id='nine' onClick={this.getNine}>Get Nine</button>
            </div>
        );
    }

    getNine = () => {
        this.setState({nine: '9'})
    };

}


export default App;
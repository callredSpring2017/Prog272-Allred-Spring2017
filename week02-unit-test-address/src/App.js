import React, {Component} from 'react';
import './css/App.css';
<<<<<<< HEAD
//import ElfHeader from './components/elfheader.js';
// import Address from './components/address';

=======
import './css/index.css';
import ElfHeader from './components/elfheader';
import Address from './components/address';


>>>>>>> ea1b4a15e8acf146212d3e2f1bec9ba91b17e54b
class App extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0',
<<<<<<< HEAD
=======

>>>>>>> ea1b4a15e8acf146212d3e2f1bec9ba91b17e54b
        }
    }

    getNine = () => {
        this.setState({nine: '9'})
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">Nine: {this.state.nine}</p>
<<<<<<< HEAD
=======
                <Address/>
>>>>>>> ea1b4a15e8acf146212d3e2f1bec9ba91b17e54b
                <button className='elf' id='nine' onClick={this.getNine}>Get Nine</button>
            </div>
        );
    }
<<<<<<< HEAD

}

=======
}


>>>>>>> ea1b4a15e8acf146212d3e2f1bec9ba91b17e54b
export default App;
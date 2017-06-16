import React, {Component} from 'react';
import logo from '../images/top.svg';
import { Jumbotron } from 'react-bootstrap';
import '../css/App.css';

class ElfHeader extends Component {

    render() {
        return (
            <div className="App">
            <Jumbotron>
                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <h2>Welcome to Prog 272</h2>
                </div>
            </Jumbotron>
            </div>
        );
    }

}

export default ElfHeader;

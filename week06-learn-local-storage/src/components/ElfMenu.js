import React, {Component} from 'react';
import '../css/App.css';
import {
    Link
} from 'react-router-dom';


class ElfMenu extends Component {

    render() {
        return (
            <div className='App' id='elfmenu'>
                <ul>
                    <li><Link to="/">AddressShow</Link></li>
                    <li><Link to="/edit">AddressEdit</Link></li>
                    <li><Link to="/small">SmallNumbers</Link></li>
                </ul>
            </div>
        );
    }
}

export default ElfMenu;

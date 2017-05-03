/**
 * Created by bcuser on 5/1/17.
 */
import React, {Component} from 'react';
import AddressShow from './address-show'
import AddressEdit from './AddressEdit'
import Address from './address';
import AddressChanger from './AddressChanger';
import SmallNumbers from './SmallNumbers';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import '../css/App.css';

class ElfMenu extends Component {

    render() {
        return (
            <Router>
                <div>
                    <div className="App">
                        <ul>
                            <li><Link to="/">AddressShow</Link></li>
                            <li><Link to="/edit">AddressEdit</Link></li>
                            <li><Link to="/small">SmallNumbers</Link></li>
                        </ul>
                    </div>
                </div>
                <Route exact path="/" component={Address}/>
                <Route path="/edit" component={AddressChanger}/>
            </Router>
        );
    }
}

export default ElfMenu;

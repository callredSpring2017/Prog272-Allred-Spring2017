import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Address from './Address';
import AddressEdit from './AddressChanger';
import SmallNumbers from './SmallNumbers';
import ElfHeader from './ElfHeader';
import ElfMenu from "./ElfMenu";

class DataMaven extends Component {
    render() {
        return (
            <div>
            <ElfHeader />
            <Router>
                <div>
                    <ElfMenu />
                    <Route exact path="/" component={Address}/>
                    <Route path="/edit" component={AddressEdit}/>
                    <Route path="/small" component={SmallNumbers}/>
                </div>
            </Router>
            </div>

        );
    }
}

export default DataMaven;
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Address from './address';

class DataMaven extends Component {

    render() {
        return (
            <Router>
                <Route exact path="/" component={Address}/>
            </Router>
        );
    }
}

export default DataMaven;

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import DataMaven from './components/DataMaven'
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render(
    <div className="container">
        <Router>
            <DataMaven />
        </Router>
    </div>,
    document.getElementById('root')
);
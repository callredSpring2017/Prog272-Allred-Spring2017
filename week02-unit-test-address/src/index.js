import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import ElfHeader from "./components/elfheader";
import Address from "./components/address"

ReactDOM.render(
    <div>
        <ElfHeader/>
        <App />
        <Address />
    </div>,
    document.getElementById('root')
);

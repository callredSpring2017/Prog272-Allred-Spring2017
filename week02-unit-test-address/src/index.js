import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './css/index.css';
import Address from './components/address';
//import ElfHeader from "./components/elfheader";
//import Address from "./components/address"
import ElfHeader from './components/elfheader.js';

ReactDOM.render(
    <div>
        <ElfHeader/>
        <Address />
    </div>,
    document.getElementById('root')
)
;

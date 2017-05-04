import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import ElfHeader from "./components/elfheader";
import ElfMenu from './components/elfmenu';
ReactDOM.render(
    <div>
        <ElfHeader/>
        <ElfMenu />
    </div>,
    document.getElementById('root')
);

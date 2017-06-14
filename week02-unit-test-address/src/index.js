import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import ElfHeader from "./components/elfheader";
import App from  "./components/SmallNumbers"

ReactDOM.render(
    <div>
        <ElfHeader/>
        <App />
    </div>,
    document.getElementById('root')
);

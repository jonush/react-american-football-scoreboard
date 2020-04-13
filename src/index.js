import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BottomRow from './BottomRow.js'

const element = (
    <>
        <App />
        <BottomRow />
    </>
)

ReactDOM.render(element, document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom";
import App from './App';

const name = 'chanwool';
const element = <h1>Hello {name}</h1>

ReactDOM.render(
    element,
    document.getElementById('root')
)
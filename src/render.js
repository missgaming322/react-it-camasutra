import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {deletePost} from "./redux/state";
// deletePost()

export let rerenderEntireTree = (state)=> {
    ReactDOM.render(
        <App state={state}  />,
        document.getElementById('root')
    );
}


reportWebVitals();
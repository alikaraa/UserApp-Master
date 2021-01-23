import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {UserProvider} from "./context";

ReactDOM.render(
    <UserProvider>
    <App />
    </UserProvider>
    , 
    document.getElementById('root'));
serviceWorker.unregister();

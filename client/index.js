import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import store from './store'
import '../public/style.css'
ReactDOM.render(
    <Provider store = {store}>
        <div>Hello, world!</div>, 
    </Provider>,
    document.getElementById('app')
);
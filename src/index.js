import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
//redux
import {createStore} from "redux";
import {Provider} from "react-redux"
import AnimationReducer from "./redux/Reducers/AnimationReducer";

const Store = createStore(AnimationReducer)


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={Store}>
            <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

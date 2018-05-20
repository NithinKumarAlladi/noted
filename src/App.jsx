import React from 'react';
import './App.css';

import Navbar from './Navbar';
import ContentDisplay from './ContentDisplay';

export default function App(props) {
    const { store } = props;

    return (
        <div className="App">
            <div className="app-grid" >
                <Navbar className="col-navbar" store={store} />
                <ContentDisplay store={store} />
            </div>
        </div>
    );
}

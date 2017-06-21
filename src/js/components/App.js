import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import axios from 'axios';
import Categories from '../containers/Categories'
import Topics from '../containers/Topics'
import Messages from '../containers/Messages'

const App = () => (
    <div className="wrapper">
        <Categories />
        <Topics />
        <Messages />
    </div>
);

export default App;

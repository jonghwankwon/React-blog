import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// 웹 어플리케이션에 BrowserRouter를 적용
ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));

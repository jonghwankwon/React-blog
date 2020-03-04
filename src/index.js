import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GrapQLServer } from 'graphql-yoga';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

// 웹 어플리케이션에 BrowserRouter를 적용
ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));

//GraphQL Server connect
const server = new GrapQLServer({ typeDefs, resolvers });
server.start(() => console.log(`Server is running at httpL//localhost:3000`));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* //Example of simple JSx rendering
const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
} //known as arrow function could just replace () => with the word "function".. Same thing

const greeting = <h1>Hello World! Current date: {getCurrentDate()}</h1>; */


ReactDOM.render(<App />, document.getElementById('root')); //App i sa fully funational React Component
registerServiceWorker();

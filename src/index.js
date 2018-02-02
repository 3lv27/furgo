import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import api from './api'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App data={api} />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './common.css'
import './components/friends/friends.css'
import './components/profile/profile.css'
import './components/statistics/statistics.css'
import './components/transactions/transactions.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProfileState from './Context/ProfileState'


ReactDOM.render(
  <React.StrictMode>
    <ProfileState>
      <App />
    </ProfileState>
  </React.StrictMode>,
  document.getElementById('root')
);

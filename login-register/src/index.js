import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import { LoginScreen } from './components/auth/LoginScreen';
import { RegisterScreen } from './components/auth/RegisterScreen';

ReactDOM.render(
  
    <LoginScreen />,
 
  document.getElementById('root')
);


import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const Root: React.FC=()=>(
  <Provider store ={store}><App/></Provider>
  
)
ReactDOM.render(<Root/>,document.getElementById('root'));


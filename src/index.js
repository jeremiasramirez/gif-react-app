import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import page from "page"
import Home from "./pages/home.page"

page('/', ()=>{
  ReactDOM.render(
    <App />,
  document.getElementById('rootPage')
  );
})
//routing
page('/home', ()=>{
    ReactDOM.render(
      <Home />,
      document.getElementById('rootPage')
    );
  })

page();
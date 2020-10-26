import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import page from "page"
import Home from "./pages/home/home.page"
import SearchPage from "./pages/search/search.page"
import CategoryPage from './pages/categories/categories.page';



page('/', ()=>{
  ReactDOM.render(<App />, document.getElementById('rootPage'));
})

page('/home', ()=>{
    ReactDOM.render( <Home />, document.getElementById('rootPage') );
})


page('/home/search', ()=>{
    ReactDOM.render( <SearchPage />,  document.getElementById('rootPage') );
})


page('/home/categories', ()=>{
  ReactDOM.render( <CategoryPage />,  document.getElementById('rootPage') );
})

page('*', ()=>{
  ReactDOM.render(<App />, document.getElementById('rootPage'));
})

page();
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import RoutingApp from './routing/app.routing'

export const Main = ()=>{
  return <>
      <RoutingApp />
    </>
}

ReactDOM.render(<Main />, document.getElementById('rootPage'));

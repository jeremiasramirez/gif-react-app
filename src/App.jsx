import React from 'react'; 
import "./styles/index.css"
import Button from '@material-ui/core/Button'
import {NavLink} from 'react-router-dom'
const  App = ()=> {
  
  const headerRefs = ()=>{
     return <div className="bar animate">
          
              <header className="headerGiff">
                <Button className="link" ><NavLink to="./home">Start</NavLink></Button>
              </header>
              <section className="containerBanner">
                <img src="/images/background.png" alt="banner"></img>
              </section>
        </div>
  }


  return headerRefs() 
}

export default App;

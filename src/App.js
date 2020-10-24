import React from 'react';
import Button from "@material-ui/core/Button"
import "./styles/index.css"
import page from "page"
import { timer } from 'rxjs';


const  App = ()=> {

 
  const toHome = ()=>{
    timer(600).subscribe(()=>page('/home')) 
  }

  const headerRefs = ()=>{
     return <div className="bar animate">
              <header className="headerGiff">
                <h4>TIM GifS</h4>
              </header>
              <section className="containerBanner">
                <img src="https://cdn.pixabay.com/photo/2020/03/02/04/52/people-4894818_960_720.png" alt="banner"></img>
              </section>

            <section className="containerRedirect">
              <Button className="redirect" color="primary" onClick={toHome}>
                Watch
              </Button>
            </section>
        </div>
  }



  return headerRefs() 
}

export default App;

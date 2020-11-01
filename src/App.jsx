import React from 'react'; 
import "./styles/index.css"


const  App = ()=> {
  
  const headerRefs = ()=>{
     return <div className="bar animate">
          
              <header className="headerGiff">
                <h4>GifStar</h4>
              </header>
              <section className="containerBanner">
                <img src="/images/background.png" alt="banner"></img>
              </section>
        </div>
  }


  return headerRefs() 
}

export default App;

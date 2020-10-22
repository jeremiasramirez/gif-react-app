import React from 'react';
import Button from "@material-ui/core/Button"
import "./styles/index.css"

function App() {
   return <div className="bar animate">
        <header className="headerGiff">
          <h4>TIM GifS</h4>
        </header>
        <section className="containerBanner">
          <img src="https://cdn.pixabay.com/photo/2020/03/02/04/52/people-4894818_960_720.png" alt="banner"></img>
        </section>

      <section className="containerRedirect">
        <Button className="redirect" color="primary">
          <a href="/home" className="link">Watch</a>
        </Button>
      </section>
   </div>
}

export default App;

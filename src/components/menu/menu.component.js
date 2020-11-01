import React from 'react'
import "./menu.css"
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {NavLink} from 'react-router-dom'

const Menu = ()=>{

    return <header className="headerMenu ">
            <article className="iconImg">
                <img src="/images/gif.svg" alt="icon"></img>
            </article>
            <ul>
                <Button  className="animate"><NavLink exact activeClassName="active" to="./" ><ArrowBackIosIcon />  </NavLink></Button>  
                <Button  className="animate"><NavLink exact activeClassName="active" to="./home" ><HomeIcon />  </NavLink></Button>
                <Button className="animate"><NavLink  exact activeClassName="active" to="./search" ><SearchIcon />  </NavLink></Button> 
            </ul>
        </header>
     

   
}
export default Menu

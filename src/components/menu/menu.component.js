import React from 'react'
import "./menu.css"
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Menu = ()=>{

    return <header className="headerMenu ">
            <article className="iconImg">
                <img src="/images/gif.svg" alt="icon"></img>
            </article>

            <ul>
                 <Button><a  href="/"><ArrowBackIosIcon /></a> </Button> 
                <Button><a  href="/home"><HomeIcon /></a> </Button> 
                <Button><a  href="/home/categories"><FilterListIcon /></a> </Button> 
                <Button><a  href="/home/search"><SearchIcon/></a> </Button> 
            </ul>
        </header>



}
export default Menu

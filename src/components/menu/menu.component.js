import React from 'react'
import "./menu.css"
import Button from '@material-ui/core/Button'

const Menu = ()=>{

    return <header className="headerMenu">
            <ul>
                <Button><a  href="/home">Home</a> </Button> 
                <Button><a  href="/home/categories">Categories</a> </Button> 
                <Button><a  href="/home/search">Search</a> </Button> 
            </ul>
        </header>



}
export default Menu

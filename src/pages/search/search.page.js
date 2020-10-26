import React from 'react'
import Menu from '../../components/menu/menu.component'
import "./search.css"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

const SearchPage = () =>{

    return <>
            <Menu />

            <section className="containersearch animate">
                 <TextField id="standard-basic" variant="outlined" label="Search" className="fieldSearch" />
                <article>
                    <Button className="buttonSearch" color="primary">Ok</Button>
                </article>
            </section>
        </>


}

export default SearchPage
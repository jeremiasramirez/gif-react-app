import React,{useState} from 'react'
import Menu from '../../components/menu/menu.component'
import "./search.css"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import SearchGif from '../../services/search.service'
import CardGif from "../../components/card/card.component"
import Skeletons from '../../components/skeleton/skeleton.card' 

const SearchPage = () =>{
    const [finded,setFinded ] = useState([]);
    const [textInput,setTextInput] = useState('');
    const [loading,setLoading] = useState(true);


    const execHttp = (title)=>{
        setLoading(false)

        SearchGif(title).subscribe((resp)=>{
            setFinded(resp)
        } , ()=>{}, ()=>{setLoading(true)})
    }

    const execSearch = ()=>{
        if (textInput.length) execHttp(textInput)
    }


    return <>
            <Menu />

            <section className="containersearch">
                 <TextField id="standard-basic" variant="outlined" onChange={(e)=>setTextInput(e.target.value.trim()) } label="Search" className="fieldSearch" />
                
                <article>
                    <Button className="buttonSearch" onClick={()=>execSearch()} color="primary">Ok</Button>
                </article>

                <section className="containerGifs animate animateOut">
                    {
                        loading === false ? <Skeletons /> : <CardGif  data={finded}/>
                    }
                </section>
            </section>
        </>


}

export default SearchPage
import React,{ useState} from 'react'
import Menu from '../../components/menu/menu.component'
import "./search.css"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import SearchGif from '../../services/search.service'
import CardGif from "../../components/card/card.component"
import Skeletons from '../../components/skeleton/skeleton.card' 
 

const execHttp = (title,setLoading,setFinded)=>{
    setLoading(false)

    return SearchGif(title).subscribe((resp)=>{
        setFinded(resp)
    } , ()=>{}, ()=>{setLoading(true)})

}

const SearchPage = () =>{
    const [finded,setFinded ] = useState([]);
    const [textInput,setTextInput] = useState('');
    const [loading,setLoading] = useState(true);
   
 
    const execSearch = ()=>{
        if (textInput.length) execHttp(textInput,setLoading,setFinded);
    }

  
    return <>
            <Menu />

            <section className="containersearch animate">
                 <TextField type="search" id="standard-basic" variant="outlined" onChange={(e)=>setTextInput(e.target.value.trim()) } label="Search" className="fieldSearch" />
                
                <article>
                    <Button value={textInput} disabled={textInput.length < 1} className="buttonSearch" onClick={()=>execSearch()} color="primary">Ok</Button>
                    {
                        finded.length > 0 ? <Button className="animateOut" color="secondary" onClick={()=>{setFinded([])}}>Clear</Button> : null 
                    }
                </article>
                <article className="containerGifs animate animateOut">
                    {
                        loading === false ? <Skeletons /> : <CardGif  data={finded}/>
                    }
                </article>
            </section>
 
        </>


}

export default SearchPage
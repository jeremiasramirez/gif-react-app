import React,{useEffect, useState} from 'react'
import Menu from '../../components/menu/menu.component'
import "./search.css"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import SearchGif from '../../services/search.service'
import getSugestion from '../../services/sugestionSearch.service'
import CardGif from "../../components/card/card.component"
import Skeletons from '../../components/skeleton/skeleton.card' 
import Chip from '@material-ui/core/Chip';

const SearchPage = () =>{
    const [finded,setFinded ] = useState([]);
    const [textInput,setTextInput] = useState('');
    const [loading,setLoading] = useState(true);
    const [sugestions, setSugestion] = useState([])



    useEffect(()=>{
        execSugestion();

        return ()=> {
            execHttp().unsubscribe()
        }

    }, [])



    const execHttp = (title)=>{
        setLoading(false)

        return SearchGif(title).subscribe((resp)=>{
            setFinded(resp)
        } , ()=>{}, ()=>{setLoading(true)})

    }



    const execSearch = ()=>{
        if (textInput.length) execHttp(textInput)
    }



    const execSugestion = ()=>{
        return getSugestion().subscribe((resp)=>{
            setSugestion(resp)
        })
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
            <section>
            <article className="containerSugestions">
                {
                    sugestions.map((sugest,key)=>{
                        {
                           return <Chip
                                className="animate"
                                key={key}
                                label={sugest}
                                clickable
                                onClick={()=>{execHttp(sugest)}} 
                            />
                        }
                    })
                }
            </article>
            </section>
        </>


}

export default SearchPage
import React,{useState,useEffect} from 'react'
import {ajax} from "rxjs/ajax"
import {delay, pluck} from "rxjs/operators"
import CardGif from "../components/card/card.component"
import Skeletons from '../components/skeleton/skeleton.card' 

const url = "http://api.giphy.com/v1/gifs/trending?api_key=BMCs8nTHGEanLpXffXxB9Im4hMuTCTPh"
 //api.giphy.com/v1/gifs/search?q=q?api_key=;
const Home = ()=>{
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false)
     
   useEffect(()=>{
        changeState()
    },[])

   
   
   const changeState = () =>{
    
        ajax.get(url).pipe(pluck("response","data"),delay(2000)).subscribe((resp)=>{
                
            setData(resp);
             
        }, ()=>{return},()=>{ setLoading(true) })
        
   }
  
    return <div>
        
        <section className="containerGifs">
            {
                loading === false ? <Skeletons /> : <CardGif data={data}/>
            }
        </section>
    </div>

}



export default Home;





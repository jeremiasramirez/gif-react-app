import React,{useState,useEffect} from 'react'
import {ajax} from "rxjs/ajax"
import {pluck} from "rxjs/operators"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
 

let url = "http://api.giphy.com/v1/gifs/trending?api_key=BMCs8nTHGEanLpXffXxB9Im4hMuTCTPh"
 
const Home = ()=>{
    
   /* useEffect(()=>{
        console.log("hola")
    })*/
   const [data,setData] = useState([]);

   const changeState = () =>{
        ajax.get(url).pipe(pluck("response","data")).subscribe((e)=>{
            setData(e);
        })
   }
   
  
    return <div>
        <button onClick={()=>changeState()}>Load</button>
            
            <section  className="containerGifs">  
                { 
                    data.map((gif,key)=>{
                        return gif.images.downsized.url ? <Card className="cardGif animate" key={key}>
                        <CardHeader title={gif.title.substring(0,15)}></CardHeader>
                        <img src={gif.images.downsized.url} alt="gifs image"></img>
                    </Card> :null
                    }) 
                
                } 
                
            </section>

    
    </div>

}



export default Home;





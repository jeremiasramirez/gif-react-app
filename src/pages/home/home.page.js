import React,{useState,useEffect} from 'react'
import CardGif from "../../components/card/card.component"
import Skeletons from '../../components/skeleton/skeleton.card' 
import getGifs from '../../services/gif.service'
 
const changeState = (setData,setLoading) =>{
  return  getGifs().subscribe((resp)=>{
        setData(resp);
    }, ()=>{return},()=>{ setLoading(true) })
}

const Home = ()=>{
    
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false)
     
   useEffect(()=>{
        changeState(setData,setLoading)

        return ()=> changeState(setData,setLoading).unsubscribe();
    },[])

  
    return <div>
           
            <h1 className="centerTitle animate">Trending gifs</h1>
            <section className="containerGifs">  
            {
                loading === false ? <Skeletons /> : <CardGif data={data}/>
            }
            </section>
        </div>
}

export default Home;





import React,{useState,useEffect} from 'react'
import CardGif from "../../components/card/card.component"
import Skeletons from '../../components/skeleton/skeleton.card' 
import getGifs from '../../services/gif.service'
import Menu from '../../components/menu/menu.component'
 

const Home = ()=>{
    
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false)
     
   useEffect(()=>{
        changeState()
        
        //stop subscription
        return ()=>{
           changeState().unsubscribe()
        }
    },[])
   
   const changeState = () =>{
        
      return getGifs().subscribe((resp)=>{
            setData(resp);
        }, ()=>{return},()=>{ setLoading(true) })
         
   }
  
    return <div>
            <Menu />
            <h1 className="centerTitle">Trending gifs</h1>
            <section className="containerGifs">  
            {
                loading === false ? <Skeletons /> : <CardGif data={data}/>
            }
            </section>
        </div>
}



export default Home;





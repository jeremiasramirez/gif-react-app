import React from 'react'
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import ScreenGif from '../screengif/screen.component'
import './card.component.css'

const handleScreen = (title,img)=>{
    ScreenGif(title,img)
 }

const CardGif = ({data})=>{

   return data.map((gif,key)=>{
       
        return gif.images.downsized.url ? <Card className="cardGif animate" key={key} onClick={()=>handleScreen(gif.title,gif.images.downsized.url)}>
           
            <CardHeader title={gif.title.substring(0,14) + '..'} ></CardHeader>

            <img className='animate'  src={gif.images.downsized.url} alt={gif.title} ></img>

            </Card> : null
    }) 



}

export default CardGif
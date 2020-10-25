import React from 'react'
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
 
const CardGif = ({data})=>{

   
   return data.map((gif,key)=>{
        return gif.images.downsized.url ? <Card className="cardGif animate" key={key}>
            <CardHeader title={gif.title.substring(0,14) + '..'}></CardHeader>
        <img src={gif.images.downsized.url} alt="gifs image"></img>
    </Card> :null
    }) 



}

export default CardGif
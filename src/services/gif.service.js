import {ajax} from "rxjs/ajax"
import {delay, pluck} from "rxjs/operators"

const getGifs = ()=>{
    const url = "http://api.giphy.com/v1/gifs/trending?api_key=BMCs8nTHGEanLpXffXxB9Im4hMuTCTPh&limit=10";
   return ajax.get(url).pipe(pluck("response","data"),delay(200))
}

 
export default getGifs
 
 
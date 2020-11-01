import {ajax} from "rxjs/ajax"
import {delay, pluck} from "rxjs/operators"

const getGifs = (limit=10)=>{
    const url = `http://api.giphy.com/v1/gifs/trending?api_key=BMCs8nTHGEanLpXffXxB9Im4hMuTCTPh&limit=${limit}`;
   return ajax.get(url).pipe(pluck("response","data"),delay(200))
}

 
export default getGifs
 
 
import {ajax} from "rxjs/ajax"
import {delay, pluck} from "rxjs/operators"

const getSugestion = ()=>{
    const urlSugestion = "http://api.giphy.com/v1/trending/searches?api_key=BMCs8nTHGEanLpXffXxB9Im4hMuTCTPh";
   return ajax.get(urlSugestion).pipe(pluck("response","data"),delay(200))
}

 
export default getSugestion
 
 


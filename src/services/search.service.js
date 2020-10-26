import {ajax} from "rxjs/ajax"
import {delay, pluck} from "rxjs/operators"

const searchGif = () =>{
    const urlSearch = `http://api.giphy.com/v1/gifs/search?api_key=BMCs8nTHGEanLpXffXxB9Im4hMuTCTPh&q=marvel&limit=10`;
    return ajax.get(urlSearch).pipe(pluck("response","data"),delay(2000))
}
export default searchGif
 

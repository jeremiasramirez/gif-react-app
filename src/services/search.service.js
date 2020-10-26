import {ajax} from "rxjs/ajax"
import {delay, pluck} from "rxjs/operators"

const SearchGif = (title) =>{
    const urlSearch = `http://api.giphy.com/v1/gifs/search?api_key=BMCs8nTHGEanLpXffXxB9Im4hMuTCTPh&q=${title}&limit=10`;
    return ajax.get(urlSearch).pipe(pluck("response","data"),delay(300))
}
export default SearchGif
 

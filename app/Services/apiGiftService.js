import { ProxyState } from "../AppState.js"
import { giphyApi } from "./AxiosService.js"
import {Gift} from "../Models/Gift.js"


let params ={
    api_key :'Mz7FrQZfs574Ija8b3viGcfCgtGxTwhB',
    rating: 'pg',
    q: ''
}
class  ApiGiftService{
    async searchGiphy(query){
        params.q = query
        const res = await giphyApi.get('search', { params })
        console.log(res)
        // const gift = new Gift()
        const gifs = res.data.data.map(g => new Gift(g))
        ProxyState.gifts = gifs
        console.log(ProxyState.gifts);
    } 
    
}
export const apiGiftService = new ApiGiftService();

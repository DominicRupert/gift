import { ProxyState } from "../AppState.js"
import { giphyApi } from "./AxiosService.js"
import {Gift} from "../Models/Gift.js"


let params ={
    
    api_key :'Mz7FrQZfs574Ija8b3viGcfCgtGxTwhB',
    rating: 'pg',
    q: ''
}
class  ApiGiftService{
    async searchGiphy(){
        const res = await giphyApi.get('search', {params})
        const gift = new Gift(res.data)

    }
    
}
export const apiGiftService = new ApiGiftService();

import { ProxyState } from "../AppState.js"
import { giphyApi } from "./AxiosService.js"


let params ={
    
    api_key :'Mz7FrQZfs574Ija8b3viGcfCgtGxTwhB',
    rating: 'pg',
    q: ''
}
class ApiGiftService{
    searchGiphy(params){
        const res = giphyApi.get('search?'+params)
        console.log(res)
    }
}

export const apiGiftService = new ApiGiftService();
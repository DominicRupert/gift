import { ProxyState } from "../AppState.js"
import { giphyApi } from "./AxiosService.js"


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
    }
    
}
export const apiGiftService = new ApiGiftService();

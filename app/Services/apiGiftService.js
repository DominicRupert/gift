import { ProxyState } from "../AppState.js"
import { giphyApi } from "./AxiosService.js"


let params ={
    
    api_key :'Mz7FrQZfs574Ija8b3viGcfCgtGxTwhB',
    rating: 'pg',
    q: ''
}
class  ApiGiftService{
    async searchGiphy(){
        const res = await giphyApi.get('/search?api_key=Mz7FrQZfs574Ija8b3viGcfCgtGxTwhB&q=&rating=pg&lang=en')
        const gift = new Gift(res.data)

    }
    
}
export const apiGiftService = new ApiGiftService();

import { ProxyState } from "../AppState.js"
import { giphyApi } from "./AxiosService.js"


let params ={
    api_key :'Mz7FrQZfs574Ija8b3viGcfCgtGxTwhB',
    rating: 'pg',
    q: ''
}
class  ApiGiftService{
<<<<<<< HEAD
    async searchGiphy(query){
        params.q = query
        const res = await giphyApi.get('search', { params })
        console.log(res)
        // const gift = new Gift()
=======
    async searchGiphy(){
        const res = await giphyApi.get('/search?api_key=Mz7FrQZfs574Ija8b3viGcfCgtGxTwhB&q=&rating=pg&lang=en')
        const gift = new Gift(res.data)

>>>>>>> 0d63118457af497892acce2f8cef6efc16d376ff
    }
    
}
export const apiGiftService = new ApiGiftService();

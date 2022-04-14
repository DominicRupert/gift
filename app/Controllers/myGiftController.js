import { ProxyState } from "../AppState.js";
import { sandboxApi } from "../Services/AxiosService.js";
import { myGiftService } from "../Services/MyGiftservice.js";
import {Pop} from "../Utils/Pop.js"




export class MyGiftController{
    constructor (){
        // ProxyState.on('gifts', _drawGifts)
    }
    async upload(){
       try {
           await myGiftService.upload()
       } catch (error) {
           console.error(error)
           Pop.toast(error.message, 'error')
       }
    }
}
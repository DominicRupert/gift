import { ProxyState } from "../AppState.js";
import { myGiftservice } from "../Services/myGiftservice.js"
import {Pop} from "../Utils/Pop.js"


async function _drawGifts(){
   const gifts = ProxyState.gifts
   
   
    let template = ''
    gifts.forEach (g => {
        template += g.Template
    })
    document.getElementById('gif-landing').innerHTML = template
    
}

export class MyGiftController{
    constructor (){
        ProxyState.on('gifts', _drawGifts)
    }
}
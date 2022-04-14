import { apiGiftService } from "../Services/ApiGiftService.js"
import { ProxyState } from "../AppState.js"
import {Pop} from "../Utils/Pop.js"

async function _drawGifts(){
  const gifts = ProxyState.gifts
   let template = gifts[0].Template
   document.getElementById('gif-landing').innerHTML = template
   
}

export class ApiGiftController {
  constructor(){
      ProxyState.on('gifts', _drawGifts)
  }
  async searchGiphy() {
    try {
      /**@type {HTMLFormElement} */
      event.preventDefault()
      const formElem = event.target
      const formData = {
      query: formElem.gifs.value
    }
      await apiGiftService.searchGiphy(formData.query)
      formElem.reset()
      
    } catch (error) {
      console.error(error)
    }
  }
}
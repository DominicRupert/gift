import { apiGiftService } from "../Services/apiGiftService.js"
import { ProxyState } from "../AppState.js"
import {Pop} from "../Utils/Pop.js"

export class ApiGiftController {
  constructor(){
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
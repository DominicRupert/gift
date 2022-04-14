import { apiGiftService } from "../Services/apiGiftService.js"

export class ApiGiftController {
  constructor(){
    this.searchGiphy()
  }
  async searchGiphy() {
    await apiGiftService.searchGiphy()
  }
}
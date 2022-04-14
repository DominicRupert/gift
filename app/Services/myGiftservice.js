import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";

class MyGiftService {
  async upload(){
    let gift = ProxyState.gifts[0]
    await sandboxApi.post('', gift)
  }
}

export const myGiftService = new MyGiftService();
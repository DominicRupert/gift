import { ApiGiftController } from "./Controllers/apiGiftController.js";
import { MyGiftController } from "./Controllers/myGiftController.js";

class App {
  apiGiftController = new ApiGiftController();
  myGiftController = new MyGiftController();
}

window["app"] = new App();

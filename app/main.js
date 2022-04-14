import { ApiGiftController } from "./Controllers/apiGiftController.js";

class App {
  apiGiftController = new ApiGiftController();
}

window["app"] = new App();

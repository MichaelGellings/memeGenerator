import { clearCanvas, inputToOutput } from "./components/canvas.js";
import { addEventListeners } from "./components/form.js";

addEventListeners();
clearCanvas();
inputToOutput(event);

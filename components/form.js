import { getText, setText, getAlign, setAlign } from "./meme.js";
import { inputToOutput } from "./canvas.js";

const meme_text_01 = document.querySelector("#input_text_01");
const meme_aling_01 = document.querySelector("align_01");

export function addEventListeners() {
  meme_text_01.placeholder = getText();
  meme_text_01.addEventListener("keyup", function() {
    setText(event.target.value);
    inputToOutput();
  });

  meme_aling_01.value = getAlign();
}

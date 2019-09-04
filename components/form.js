import { getText, setText, getAlign, setAlign } from "./meme.js";
import { inputToOutput } from "./canvas.js";

const meme_text_01 = document.querySelector("#input_text_01");
// const meme_align_01 = document.querySelector("input[name='align_01']:checked");
const meme_align_01 = document.querySelectorAll("input[type='radio']");

export function addEventListeners() {
  meme_text_01.placeholder = getText();
  meme_text_01.addEventListener("keyup", function() {
    setText(event.target.value);
    inputToOutput();
  });
  if (meme_align_01) {
    meme_align_01.forEach(function(radioButton) {
      radioButton.addEventListener("click", function(event) {
        setAlign(event.target.value);
        // console.log(event.target.value);
        inputToOutput();
      });
    });
  }

  // meme_align_01.value = getAlign();
}

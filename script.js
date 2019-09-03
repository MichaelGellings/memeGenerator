"use strict";

const meme_text_01 = document.querySelector("#input_text_01");

/* zum Testen: 
const output = document.getElementById("output_text");
function outputInput(event) {
  output.innerHTML = event.target.value;
}
*/

const parent = document.querySelector("#canvas_div");
const canvas = document.querySelector("#meme_canvas");
const ctx = canvas.getContext("2d");
const img = document.querySelector("#image_current");

canvas.width = parent.offsetWidth;
canvas.height = img.height * (parent.offsetWidth / img.width); // keeps ratio of the image
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

function inputToOutput(event) {
  // clear output from previous functions calls
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // determine font attributes
  let fontSize = canvas.height / 5;
  let fontSizeString = fontSize + "px";
  ctx.font = fontSizeString + " Impact, sans-serif";
  ctx.lineWidth = fontSize / 8;
  ctx.strokeStyle = "black";
  ctx.textAlign = "center";

  let txt = event.target.value;

  if (ctx.measureText(txt).width <= canvas.width - 20) {
    ctx.strokeText(txt, canvas.width / 2, fontSize, canvas.width - 2);

    ctx.fillStyle = "white";
    ctx.fillText(txt, canvas.width / 2, fontSize, canvas.width - 2);
  } else {
    document.querySelector("#err01").innerHTML = "Too long for one line!";
  }
}

meme_text_01.addEventListener("keyup", inputToOutput);

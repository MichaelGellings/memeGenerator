"use strict";

const meme_text = document.getElementById("meme_input");
const output = document.getElementById("output_text");

// function outputInput(event) {
//   output.innerHTML = event.target.value;
// }

const canvas = document.getElementById("meme_canvas");
const ctx = canvas.getContext("2d");

const parent = document.getElementById("canvas_div");
const img = document.getElementById("image_chosen");
canvas.width = parent.offsetWidth;
canvas.height = img.height * (parent.offsetWidth / img.width); // keeps ratio of the image
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

function outputInput(event) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  let fontSize = canvas.height / 5;
  let fontSizeString = fontSize + "px";
  ctx.font = fontSizeString + " Impact, sans-serif";
  ctx.strokeStyle = "black";
  ctx.lineWidth = fontSize / 8;
  ctx.textAlign = "center";

  let txt = event.target.value;

  if (ctx.measureText(txt).width <= canvas.width - 20) {
    ctx.strokeText(txt, canvas.width / 2, fontSize, canvas.width - 2);

    ctx.fillStyle = "white";
    ctx.fillText(txt, canvas.width / 2, fontSize, canvas.width - 2);
  } else {
    document.getElementById("err01").innerHTML = "Too long for one line!";
  }
}

meme_text.addEventListener("keyup", outputInput);

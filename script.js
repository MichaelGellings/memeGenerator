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
ctx.font = "30px Verdana, sans-serif";
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
function outputInput(event) {
  ctx.strokeText(event.target.value, 10, 50, canvas.width);

  ctx.fillStyle = "white";
  ctx.fillText(event.target.value, 10, 50, canvas.width);
}

meme_text.addEventListener("keyup", outputInput);

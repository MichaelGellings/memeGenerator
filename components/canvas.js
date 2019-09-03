import { getText, getAlign } from "./meme.js";

const parent = document.querySelector("#canvas_div");
const img = document.querySelector("#image_current");

const canvas = document.querySelector("#meme_canvas");
const ctx = canvas.getContext("2d");
canvas.width = parent.offsetWidth;
canvas.height = img.height * (parent.offsetWidth / img.width); // keeps ratio of the image

export function inputToOutput() {
  clearCanvas();
  // determine font attributes
  let fontSize = canvas.height / 5;
  let fontSizeString = fontSize + "px";
  ctx.font = fontSizeString + " Impact, sans-serif";
  ctx.lineWidth = fontSize / 8;
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.textAlign = getAlign();

  if (ctx.measureText(getText()).width <= canvas.width - 20) {
    clearCanvas();
    document.querySelector("#err01").innerHTML = "";

    // determine start pos[ition] of text depending on alignment
    let pos;
    switch (ctx.textAlign) {
      case "left":
        pos = 20;
        break;
      case "center":
        pos = canvas.width / 2;
        break;
      case "right":
        pos = canvas.width - 20;
        break;
      default:
        console.log("Something wrong with value for text alignment");
    }

    // output text

    function strokeAndFill() {
      ctx.strokeText(arguments[0], arguments[1], arguments[2]);
      ctx.fillText(arguments[0], arguments[1], arguments[2]);
    }

    strokeAndFill(getText(), pos, fontSize);
  } else {
    // text too long for one line:
    document.querySelector("#err01").innerHTML = "Too long for one line!";
  }
}

export function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

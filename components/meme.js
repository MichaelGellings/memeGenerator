import { setItem, getItem } from "./storage.js";

// kopiert von Leon, wg. localStorage:
/*
const storageMeme = getItem("meme");
let meme;
if (storageMeme) {
  meme = storageMeme;
} else {
  meme = {
    src: "assets/Distracted-Boyfriend.jpg",
    texts: ["VSCode", "DEV", "CodePen"]
  };
}
*/

const storageMeme = getItem("meme");
if (!storageMeme) {
  let meme = {
    src: "",
    text_01: "Es ist Sommer!",
    alignment: "center"
  };
}

export function getText() {
  return meme.text_01;
}

export function setText(value) {
  meme.text_01 = value;
  setItem();
}

export function getAlign() {
  return meme.alignment;
}

export function setAlign(value) {
  meme.alignment = value;
}

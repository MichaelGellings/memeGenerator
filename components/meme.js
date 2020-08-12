import { saveStringifiedObject, getStringifiedObject } from "./storage.js";

const storageMeme = getStringifiedObject("localStoreMMM");
let meme;
if (storageMeme) {
  meme = storageMeme;
  meme.text_01 = "Es ist Sommer!";
} else {
  meme = {
    src: "",
    text_01: "Es ist Sommer!",
    alignment: "center"
  };
}

// Alternative for lines 4-13
// const meme = getItem("localStoreMMM") || {
//   src: "",
//   text_01: "Es ist Sommer!"
// };

export function getText() {
  // meme = getStringifiedObject("localStoreMMM");
  return meme.text_01;
}

export function setText(value) {
  meme.text_01 = value;
  saveStringifiedObject("localStoreMMM", meme);
}

export function getAlign() {
  return meme.alignment;
}

export function setAlign(value) {
  meme.alignment = value;
  saveStringifiedObject("localStoreMMM", meme);
}

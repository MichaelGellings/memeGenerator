const meme = {
  src: "",
  text_01: "Es ist Sommer!",
  alignment: "center"
};

export function getText() {
  return meme.text_01;
}

export function setText(value) {
  meme.text_01 = value;
}

export function getAlign() {
  return meme.alignment;
}

export function setAlign(value) {
  meme.alignment = value;
}

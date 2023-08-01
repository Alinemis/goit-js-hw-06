const elements = {
  inputFont: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

elements.inputFont.addEventListener("input", handlerFontSize);

function handlerFontSize() {
  elements.text.style.fontSize = elements.inputFont.value + "px";
}

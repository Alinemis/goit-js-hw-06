const elements = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

elements.nameInput.addEventListener("input", handlerName);

function handlerName(evt) {
  elements.nameOutput.textContent = evt.currentTarget.value;
}

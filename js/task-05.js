const elements = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

elements.nameInput.addEventListener("input", handlerName);

function handlerName(evt) {
  if (elements.nameInput.value !== "") {
    elements.nameOutput.textContent = evt.currentTarget.value;
  } else {
    return (elements.nameOutput.textContent = "Anonymous");
  }
}

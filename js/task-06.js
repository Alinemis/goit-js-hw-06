const inputValid = document.querySelector("#validation-input");

inputValid.addEventListener("blur", handlerCheck);

function handlerCheck(evt) {
  if (evt.currentTarget.value.length === Number(inputValid.dataset.length)) {
    inputValid.classList.remove("invalid");
    inputValid.classList.add("valid");
  } else {
    inputValid.classList.remove("valid");
    inputValid.classList.add("invalid");
  }
}

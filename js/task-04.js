const btnSub = document.querySelector(
  '#counter button[data-action = "decrement"]'
);

// console.log(btnSub.dataset.action);

const btnAdd = document.querySelector(
  '#counter button[data-action="increment"]'
);

// console.log(btnAdd.dataset.action);

const counter = document.querySelector("#value");

let counterValue = 0;

function newCounter() {
  counter.textContent = counterValue;
}

btnSub.addEventListener("click", handlerClickSub);

function handlerClickSub(event) {
  counterValue -= 1;
  newCounter();
}

btnAdd.addEventListener("click", handlerClickAdd);

function handlerClickAdd(event) {
  counterValue += 1;
  newCounter();
}

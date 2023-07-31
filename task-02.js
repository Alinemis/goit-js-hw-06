const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const li = document.createElement("li");
li.textContent = ingredients[0];
li.classList.add("item");

const li2 = document.createElement("li");
li2.textContent = ingredients[1];
li2.classList.add("item");

const li3 = document.createElement("li");
li3.textContent = ingredients[2];
li3.classList.add("item");

const li4 = document.createElement("li");
li4.textContent = ingredients[3];
li4.classList.add("item");

const li5 = document.createElement("li");
li5.textContent = ingredients[4];
li5.classList.add("item");

const li6 = document.createElement("li");
li6.textContent = ingredients[5];
li6.classList.add("item");

list.append(li, li2, li3, li4, li5, li6);
console.log(list);

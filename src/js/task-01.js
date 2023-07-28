const items = document.querySelectorAll(".item");
console.log(items.length);

const childrens = [...items].forEach((item) => {
  const value = item.firstElementChild.textContent;
  console.log(value);
  const count = item.lastElementChild.childElementCount;
  console.log(count);
});

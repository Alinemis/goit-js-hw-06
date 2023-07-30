const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  //   console.dir(evt.currentTarget);
  const { email, password } = evt.currentTarget.elements;
  const objectForm = {
    email: email.value,
    password: password.value,
  };
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  }

  console.log(objectForm);
  evt.currentTarget.reset();
}

const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js - greeting");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function hendleSubmit(event) {
  event.preventDefault();
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classlist.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {}

init();

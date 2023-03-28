//Option with local storage

// import { toggleFunction } from "./main.js";

// const button = document.getElementById("magnifier");
// const button2 = document.getElementById("burgerMagnifier");
// const inputHeader = document.getElementById("headerInput");
// const inputBurger = document.getElementById("burgerInput");

// const changePage = (e) => {
//   if (e.key === "Enter") {
//     //getting value from input
//     const value = inputHeader.value || inputBurger.value;
//     e.preventDefault;
//     //redirection
//     window.location.href = `./tags.html?search=${value}`;
//   }
// };

// const clearInput = (input) => {
//   input.value = "";
// };

// const addInputValueToLocalStorage = (elem) => {
//   if (!elem) {
//     return;
//   }
//   elem.addEventListener("input", (event) => {
//     localStorage.setItem("input", event.target.value);
//   });

//   clearInput(elem);
// };

// addInputValueToLocalStorage(inputHeader);
// addInputValueToLocalStorage(inputBurger);

// button.addEventListener("click", toggleFunction(inputHeader, "show__input"));
// button2.addEventListener("click", toggleFunction(inputBurger, "show__input"));

// inputHeader.addEventListener("keypress", changePage);
// inputBurger.addEventListener("keypress", changePage);

//Option without local storage

import { toggleFunction } from "./main.js";

const button = document.getElementById("magnifier");
const button2 = document.getElementById("burgerMagnifier");
const inputHeader = document.getElementById("headerInput");
const inputBurger = document.getElementById("burgerInput");

const changePage = (e) => {
  if (e.key === "Enter") {
    const value = inputHeader.value || inputBurger.value;
    e.preventDefault;
    window.location.href = `./tags.html?search=${value}`;
  }
};

button.addEventListener("click", toggleFunction(inputHeader, "show__input"));
button2.addEventListener("click", toggleFunction(inputBurger, "show__input"));

inputHeader.addEventListener("keypress", changePage);
inputBurger.addEventListener("keypress", changePage);

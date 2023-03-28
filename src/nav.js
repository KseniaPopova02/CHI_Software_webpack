import { toggleFunction } from "./main.js";

const burgerButton = document.getElementById("burgerButton");
const burgerNav = document.getElementById("burgerNavWrapper");

burgerButton.addEventListener("click", toggleFunction(burgerNav, "show__nav"));

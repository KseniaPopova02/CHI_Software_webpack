const cross = document.getElementById("burgerButton");

cross.addEventListener("click", (e) => {
  e.preventDefault();
  cross.classList.toggle("opened");
  cross.setAttribute("aria-expanded", cross.classList.contains("opened"));
});

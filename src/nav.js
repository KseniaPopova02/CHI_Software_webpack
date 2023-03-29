export const showNav = () => {
  const burgerButton = document.getElementById("burgerButton");
  const burgerNav = document.getElementById("burgerNavWrapper");

  burgerButton.addEventListener("click", toggleClass(burgerNav, "show__nav"));
};

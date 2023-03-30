export const toggleClass = (element, className) => {
  return () => {
    element.classList.toggle(className);
  };
};

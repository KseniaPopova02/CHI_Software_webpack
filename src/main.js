export const toggleFunction = (element, className) => {
  return () => {
    element.classList.toggle(className);
  };
};

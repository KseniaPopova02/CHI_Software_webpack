//Option with local storage

// const searchInput = document.getElementById("searchInput");
// const searchTags = document.querySelectorAll(".search__tags li");

// const filterList = (filter) => {
//   searchTags.forEach((item) => {
//     text = item.textContent;

//     if (text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
//       item.style.display = "";
//     } else {
//       item.style.display = "none";
//     }
//   });
//   localStorage.clear();
// };

// searchInput.addEventListener("input", (event) => {
//   filterList(event.target.value);
// });

// const getItemFromLocalStorage = () => {
//   return localStorage.getItem("input");
// };

// const savedValue = getItemFromLocalStorage();
// searchInput.value = savedValue;
// filterList(savedValue);

//Option without local storage

const searchInput = document.getElementById("searchInput");
const searchTags = document.querySelectorAll(".search__tags li");

const insertMark = (string, value) =>
  string.replace(
    new RegExp(`([\s\S])*(${value})([\s\S])*`, "g"),
    "$1<mark>$2</mark>$3"
  );

const filterList = (filter) => {
  searchTags.forEach((elem) => {
    const text = elem.textContent;

    if (!text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
      elem.classList.add("hide");
    } else {
      elem.classList.remove("hide");

      const str = elem.innerText;
      const result = insertMark(str, filter);

      elem.innerHTML = result;
    }
  });
};

searchInput.addEventListener("input", (event) =>
  filterList(event.target.value)
);

const getSearchItem = () => {
  const queryParams = window.location.search.slice(1).split("=");
  return queryParams[1] || "";
};

const savedValue = getSearchItem();

searchInput.value = savedValue;

filterList(savedValue);

import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./constants.js";

const categoryItem = document.querySelector("#category");

fetchApi(API_CATEGORY).then((data) => {
  let htmls = data.map((item) => {
    return `
            <div class="category__item">${item.name}</div>
        `;
  });

  categoryItem.innerHTML = htmls.join("");
});

import { drawProduct } from "./drawProduct.js";
import { params } from "./variable.js";
drawProduct();

//Search
const inputSearch = document.querySelector("#search input");
const buttonSearch = document.querySelector("#search button");
buttonSearch.addEventListener("click", function () {
  params.q = inputSearch.value;
  drawProduct();
});
//End search

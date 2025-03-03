import { drawProduct } from "./drawProduct.js";
import {
  params,
  inputSearch,
  pagiNext,
  pagiNumber,
  pagiPrev,
  buttonSearch,
} from "./variable.js";
drawProduct();

//Search
const search = () => {
  params.q = inputSearch.value;
  drawProduct();
};

buttonSearch.addEventListener("click", function () {
  search();
});

inputSearch.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    search();
  }
});
//End search

//Filter
const filter = document.querySelector("#filter");
filter.addEventListener("change", function (e) {
  console.log(e.target.value);
  switch (e.target.value) {
    case "mac-dinh":
      params.sort = "";
      params.order = "";
      break;
    case "gia-thap-den-cao":
      params.sort = "price";
      params.order = "asc";
      break;
    case "gia-cao-den-thap":
      params.sort = "price";
      params.order = "desc";
      break;
    case "giam-gia-nhieu":
      params.sort = "discountPercentage";
      params.order = "desc";
  }
  drawProduct();
});
//End Filter

//Pagination

pagiNext.addEventListener("click", function () {
  params.page = params.page + 1;
  pagiNumber.innerHTML = params.page;
  drawProduct();
});
pagiPrev.addEventListener("click", function () {
  if (params.page > 1) {
    params.page = params.page - 1;
    pagiNumber.innerHTML = params.page;
    drawProduct();
  }
});
//End Pagination

export let params = {
  q: "",
  sort: "",
  order: "",
  page: 1,
  limit: 8,
  category: "",
};

export const inputSearch = document.querySelector("#search input");
export const buttonSearch = document.querySelector("#search button");

export const pagiPrev = document.querySelector("#paginationPrev");
export const pagiNext = document.querySelector("#paginationNext");
export const pagiNumber = document.querySelector("#paginationNumber");

export const categoryItem = document.querySelector("#category");

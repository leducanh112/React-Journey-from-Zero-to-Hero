import { fetchApi } from "./helpers/fetchApi.js";
//Get category
fetchApi("http://localhost:3000/categories").then((data) => {
  let htmls = "";
  data.forEach((item) => {
    htmls += `
                <div class="category-item">${item.slug}</div>
            `;
  });
  const divCategory = document.querySelector("#category");
  divCategory.innerHTML += htmls;
});

fetchApi("http://localhost:3000/products").then((data) => {
  let htmls = "";
  data.products.forEach((item) => {
    htmls += `
          <div class="product-item">
                  <img src="${item.thumbnail}" alt="tiêu đề ..." />
                  <h3>${item.title}</h3>
                  <p>${item.price}</p>
              </div>
          `;
  });
  const productItem = document.querySelector("#products");
  productItem.innerHTML += htmls;
});

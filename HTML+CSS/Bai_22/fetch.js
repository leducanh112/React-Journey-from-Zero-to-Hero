//GET API
const fetchApi = (url) => {
  const result = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return result;
};
fetchApi("https://dummyjson.com/products/categories").then((data) =>
  console.log(data)
);

//Get category
fetch("https://dummyjson.com/products/categories")
  .then((response) => response.json())
  .then((data) => {
    let htmls = "";
    data.forEach((item) => {
      htmls += `
                <div class="category-item">${item.slug}</div>
            `;
    });
    const divCategory = document.querySelector("#category");
    divCategory.innerHTML += htmls;
  });

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
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

import { useState, useEffect } from "react";
import "./Product.scss";

function UseEffect3() {
  const limit = 10;
  const [data, setData] = useState([]);
  const [pageActive, setPageActive] = useState(0);
  const [quantityPage, setQuantityPage] = useState(0);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setQuantityPage(Math.ceil(data.total / limit));
      });
  }, [pageActive]);

  const handleCLickPagi = (e) => {
    setPageActive(e);
  };

  console.log([...Array(quantityPage)]);
  console.log(quantityPage);
  return (
    <>
      <div className="product__list">
        {data.map((item, index) => {
          return (
            <div className="product__item" key={item.id}>
              <div className="product__image">
                <img src={item.thumbnail}></img>
                <h3 className="product__title">{item.title}</h3>
                <div className="product__price">{item.price}</div>
              </div>
            </div>
          );
        })}
      </div>

      <ul className="pagination">
        {[...Array(quantityPage)].map((_, index) => {
          return (
            <li key={index} onClick={() => handleCLickPagi(index)}>
              {index + 1}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UseEffect3;

import { useState, useEffect } from "react";
import "./Product.scss";

function UseEffect2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      });
  }, []);
  console.log(data);
  return (
    <>
      <div className="product__list">
        {data.map((item, index) => {
          return (
            <div className="product__item">
              <div className="product__image">
                <img src={item.thumbnail}></img>
                <h3 className="product__title">{item.title}</h3>
                <div className="product__price">{item.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UseEffect2;

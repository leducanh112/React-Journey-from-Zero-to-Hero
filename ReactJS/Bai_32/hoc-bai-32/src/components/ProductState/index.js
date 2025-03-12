import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Product.css";
function ProductState() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
          setLoading(false);
        });
    };
    setTimeout(fetchApi, 3000);
  }, []);
  console.log(products);
  return (
    <>
      {!loading ? (
        <div className="product__list">
          {products.map((item) => {
            return (
              <div className="product__item">
                <img
                  className="product__image"
                  src={item.thumbnail}
                  alt={item.title}
                ></img>
                <h3 className="product__title" key={item.id}>
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="product__list">
          {[...Array(9)].map((_, index) => (
            <div className="product__item" key={index}>
              <Skeleton className="product__image"></Skeleton>
              <Skeleton className="product__title"></Skeleton>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ProductState;

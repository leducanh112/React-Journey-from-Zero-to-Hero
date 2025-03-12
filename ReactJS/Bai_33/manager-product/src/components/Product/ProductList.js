import { useEffect, useState } from "react";

function ProductList(props) {
  const [data, setData] = useState([]);
  const { reload } = props;

  useEffect(() => {
    const fetchApi = async () => {
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => {
          setData(data.reverse());
        });
    };
    fetchApi();
  }, [reload]);

  return (
    <>
      <div className="product__list">
        {data &&
          data.map((item) => {
            return (
              <div className="product__item" key={item.id}>
                <div className="product__image">
                  <img src={item.thumbnail}></img>
                </div>
                <h4 className="product__title">{item.title}</h4>
                <p className="product__price">{item.price}$</p>
                <p className="pruduct__percent">{item.discountPercentage}%</p>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ProductList;

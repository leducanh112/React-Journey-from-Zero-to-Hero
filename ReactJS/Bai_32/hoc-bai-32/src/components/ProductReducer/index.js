import { useState, useEffect, useReducer } from "react";

const init = {
  products: [],
  loading: true,
};
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type == "SUCCESS") {
    return {
      products: action.products,
      loading: false,
    };
  }
  return state;
};
function ProductReducer() {
  const [data, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    const fetchApi = () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "SUCCESS",
            products: data.products,
          });
          // setProducts(data.products);
          // setLoading(false);
        });
    };
    setTimeout(fetchApi, 3000);
  }, []);
  console.log(data);
  return (
    <>
      {!data.loading ? (
        <ul>
          {data.products.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default ProductReducer;

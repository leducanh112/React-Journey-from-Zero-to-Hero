import { useState, useEffect } from "react";
import { getProductList } from "../../services/productsService";
import "./Product.scss";
import ProductItem from "./ProductItem";
function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setProducts(result);
    };
    fetchApi();
  }, []);
  console.log(products);
  return (
    <>
      <div className="product">
        {products &&
          products.map((item) => {
            return <ProductItem item={item} key={item.id} />;
          })}
      </div>
    </>
  );
}

export default Product;

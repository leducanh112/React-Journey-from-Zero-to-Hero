import ProductList from "./ProductList";
import "./Product.css";
import CreateProduct from "../CreateProduct";
import { useState } from "react";

function Product() {
  const [reload, setReload] = useState(false);
  const handleReload = () => {
    setReload(!reload);
  };

  return (
    <>
      <h2>Danh sach sp</h2>
      <CreateProduct onReload={handleReload}></CreateProduct>
      <ProductList reload={reload}></ProductList>
    </>
  );
}

export default Product;

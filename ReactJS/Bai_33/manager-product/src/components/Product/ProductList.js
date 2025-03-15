import { useEffect, useState } from "react";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import { getProductList } from "../../services/productsService";

function ProductList(props) {
  const [data, setData] = useState([]);
  const { reload } = props;
  const [editReload, setEditReload] = useState(false);

  const handleReload = () => {
    setEditReload(!editReload);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setData(result.reverse());
    };
    fetchApi();
  }, [reload, editReload]);

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
                <EditProduct item={item} onReload={handleReload}></EditProduct>
                <DeleteProduct
                  item={item}
                  onReload={handleReload}
                ></DeleteProduct>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ProductList;

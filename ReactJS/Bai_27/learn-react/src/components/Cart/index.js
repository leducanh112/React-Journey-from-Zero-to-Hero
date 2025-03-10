import "./Cart.scss";
import { useState } from "react";

function Cart() {
  const unitPrice = 120000;

  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    console.log(e);
    setQuantity(e.target.value);
  };
  return (
    <>
      <table className="cart">
        <thead>
          <tr>
            <th>Tên sp</th>
            <th>số lượng</th>
            <th>đơn giá</th>
            <th>thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Giay the thao</td>
            <td>
              <input
                defaultValue={quantity}
                type="number"
                min={1}
                onChange={handleChange}
              />
            </td>
            <td>{unitPrice}đ</td>
            <td>{quantity * unitPrice}đ</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Cart;

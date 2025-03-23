import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import "./Cart.scss";
import { deleteAll } from "../../actions/cart";

function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => {
    const priceNew =
      (item.info.price * (100 - item.info.discountPercentage)) / 100;
    return sum + priceNew * item.quantity;
  }, 0);

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };
  return (
    <>
      <h2>Cart</h2>
      <button onClick={handleDeleteAll}>Delete All</button>

      {cart.length > 0 ? (
        <>
          <CartList></CartList>
          <div className="cart__total">
            Total: <span>{total.toFixed(2)}$</span>
          </div>
        </>
      ) : (
        <div>Empty</div>
      )}
    </>
  );
}

export default Cart;

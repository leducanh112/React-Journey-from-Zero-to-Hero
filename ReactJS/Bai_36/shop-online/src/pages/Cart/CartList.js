import { useSelector } from "react-redux";
import CartItem from "./CartItem";
function CartList() {
  const cart = useSelector((state) => state.cartReducer);
  return (
    <>
      <div className="cart">
        {cart.map((item) => {
          return (
            <>
              <CartItem item={item} key={item.id} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default CartList;

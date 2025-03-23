import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function CartMini() {
  const cart = useSelector((state) => state.cartReducer);
  const total = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
  console.log(total);
  return (
    <>
      <Link to="/cart">Cart ({total})</Link>
    </>
  );
}

export default CartMini;

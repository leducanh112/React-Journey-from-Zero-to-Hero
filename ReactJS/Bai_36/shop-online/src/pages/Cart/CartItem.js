import { useDispatch } from "react-redux";
import { updateQuantity, deleteItem } from "../../actions/cart";
import { useRef } from "react";

function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleUp = () => {
    dispatch(updateQuantity(item.id));
    inputRef.current.value++;
  };
  const handleDown = () => {
    if (inputRef.current.value > 1) {
      dispatch(updateQuantity(item.id, -1));
      inputRef.current.value--;
    }
  };

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };
  return (
    <>
      <div className="cart__item">
        <div className="cart__image">
          <img src={item.info.thumbnail}></img>
        </div>
        <div className="cart__content">
          <h4 className="cart__title">{item.info.title}</h4>
          <div className="cart__price-new">
            {(
              (item.info.price * (100 - item.info.discountPercentage)) /
              100
            ).toFixed(0)}
            $
          </div>
          <div className="cart__price-old">{item.info.price}</div>
        </div>
        <div className="cart__quantity">
          <button onClick={handleDown}>-</button>
          <input ref={inputRef} defaultValue={item.quantity}></input>
          <button onClick={handleUp}>+</button>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}
export default CartItem;

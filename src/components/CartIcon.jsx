import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../store/comfySlice";

function CartIcon() {
  const cartProducts = useSelector((state) => state.comfyState.cartProducts);
  const dispatch = useDispatch();

  const totalQuantity = cartProducts.reduce((sum, cp) => {
    return sum + cp.count;
  }, 0);

  return (
    <div className="toggle-container">
      <button onClick={() => dispatch(setShowCart())} className="toggle-cart">
        <i className="fa fa-shopping-cart"></i>
      </button>
      <span className="cart-item-count">{totalQuantity}</span>
    </div>
  );
}

export default CartIcon;

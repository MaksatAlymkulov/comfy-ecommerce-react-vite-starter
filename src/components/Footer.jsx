import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils/utils";
import { setShowCheckout } from "../store/comfySlice";

function Footer() {
  const cartProducts = useSelector((state) => state.comfyState.cartProducts);
  const dispatch = useDispatch();

  const totalPrice = cartProducts.reduce((sum, cp) => {
    return sum + cp.fields.price;
  }, 0);
  const totalQuantity = cartProducts.reduce((sum, cp) => {
    return sum + cp.count;
  }, 0);

  const price = formatPrice(totalPrice) * totalPrice;
  return (
    <footer>
      <h3 className="cart-total text-slanted">
        total : {formatPrice(totalPrice * totalQuantity)}
      </h3>
      <button
        onClick={() => dispatch(setShowCheckout())}
        className="cart-checkout btn"
      >
        checkout
      </button>
    </footer>
  );
}

export default Footer;

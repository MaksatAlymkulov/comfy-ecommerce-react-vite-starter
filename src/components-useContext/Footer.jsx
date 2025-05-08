import { useMyCustomContext } from "../hooks/custom";
import { formatPrice } from "../utils/utils";

function Footer() {
  const { cartProducts, showCheckout, setShowCheckout } = useMyCustomContext();
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
        onClick={() => setShowCheckout(!showCheckout)}
        className="cart-checkout btn"
      >
        checkout
      </button>
    </footer>
  );
}

export default Footer;

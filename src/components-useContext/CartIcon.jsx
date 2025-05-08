import { useMyCustomContext } from "../hooks/custom";

function CartIcon() {
  const { showCart, setShowCard, cartProducts } = useMyCustomContext();

  const totalQuantity = cartProducts.reduce((sum, cp) => {
    return sum + cp.count;
  }, 0);

  return (
    <div className="toggle-container">
      <button onClick={() => setShowCard(!showCart)} className="toggle-cart">
        <i className="fa fa-shopping-cart"></i>
      </button>
      <span className="cart-item-count">{totalQuantity}</span>
    </div>
  );
}

export default CartIcon;

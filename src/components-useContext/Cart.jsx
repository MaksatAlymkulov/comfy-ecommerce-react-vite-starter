import { useMyCustomContext } from "../hooks/custom";
import Footer from "./Footer";
import SingleCartProduct from "./SingleCartProduct";

function Cart() {
  const { showCart, setShowCard, cartProducts } = useMyCustomContext();

  const toggleCart = showCart ? "cart-overlay show" : "cart-overlay";
  return (
    <div className={toggleCart}>
      <aside className="cart">
        <button onClick={() => setShowCard(!showCart)} className="cart-close">
          <i className="fa fa-times"></i>
        </button>
        <header>
          <h3 className="text-slanted">your bag</h3>
        </header>
        {/* cart items */}
        <div className="cart-items">
          {cartProducts.map((cp) => (
            <SingleCartProduct key={cp.id} cp={cp} />
          ))}
        </div>
        {/* footer */}
        <Footer />
      </aside>
    </div>
  );
}

export default Cart;

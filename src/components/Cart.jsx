import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import SingleCartProduct from "./SingleCartProduct";
import { setShowCart } from "../store/comfySlice";
import { setStorageItem } from "../utils/utils";
import { useEffect } from "react";

function Cart() {
  const showCart = useSelector((state) => state.comfyState.showCart);
  const cartProducts = useSelector((state) => state.comfyState.cartProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    setStorageItem("cartProducts", cartProducts);
  }, [cartProducts]);

  const toggleCart = showCart ? "cart-overlay show" : "cart-overlay";
  return (
    <div className={toggleCart}>
      <aside className="cart">
        <button onClick={() => dispatch(setShowCart())} className="cart-close">
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

import { useDispatch, useSelector } from "react-redux";
import { setShowCheckout } from "../store/comfySlice";

function CheckoutModal() {
  const showCheckout = useSelector((state) => state.comfyState.showCheckout);
  const dispatch = useDispatch();

  const toogle = showCheckout ? "checkout-overlay show" : "checkout-overlay";
  return (
    <div className={toogle}>
      <aside className="checkout">
        <button
          onClick={() => dispatch(setShowCheckout())}
          className="checkout-close"
        >
          <i className="fa fa-times"></i>
        </button>
        <h3 className="checkout-error">
          sorry, checkout is under construction at the moment!
        </h3>
      </aside>
    </div>
  );
}

export default CheckoutModal;

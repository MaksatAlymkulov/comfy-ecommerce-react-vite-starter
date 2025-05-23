import { useDispatch } from "react-redux";
import { formatPrice } from "../utils/utils";
import {
  decreaseCountAmount,
  deleteCartProduct,
  increaseCountAmount,
} from "../store/comfySlice";

const SingleCartProduct = ({ cp }) => {
  const dispatch = useDispatch();

  const {
    id,
    fields: { name, image, price },
    count,
  } = cp;
  return (
    <article className="cart-item">
      <img src={image[0].url} className="cart-item-img" alt="high-back bench" />
      <div>
        <h4 className="cart-item-name">{name}</h4>
        <p className="cart-item-price">{formatPrice(price)}</p>
        <button
          onClick={() => dispatch(deleteCartProduct(cp))}
          className="cart-item-remove-btn"
        >
          remove
        </button>
      </div>

      <div>
        <button
          onClick={() => dispatch(increaseCountAmount(cp))}
          className="cart-item-increase-btn"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
        <p className="cart-item-amount">{count}</p>
        <button
          onClick={() => count > 1 && dispatch(decreaseCountAmount(cp))}
          className="cart-item-decrease-btn"
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </article>
  );
};

export default SingleCartProduct;

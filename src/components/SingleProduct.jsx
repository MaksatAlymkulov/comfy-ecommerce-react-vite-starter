import { Link } from "react-router-dom";
import { formatPrice } from "../utils/utils";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/comfySlice";

const SingleProduct = ({ fp }) => {
  const dispatch = useDispatch();
  const {
    id,
    fields: { name, image, price, company },
  } = fp;

  return (
    <article className="product">
      <div className="product-container">
        <img src={image[0].url} className="product-img img" alt="" />

        <div className="product-icons">
          <Link to={`/products/single/${id}`} className="product-icon">
            <i className="fa fa-search"></i>
          </Link>
          <button
            onClick={() => dispatch(addProductToCart(fp))}
            className="product-cart-btn product-icon"
          >
            <i className="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <footer>
        <p className="product-name">
          {name} ({company})
        </p>
        <h4 className="product-price">{formatPrice(price)}</h4>
      </footer>
    </article>
  );
};

export default SingleProduct;

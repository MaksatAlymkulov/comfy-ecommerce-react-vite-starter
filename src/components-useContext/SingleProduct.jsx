import { Link } from "react-router-dom";
import { useMyCustomContext } from "../hooks/custom";
import { formatPrice } from "../utils/utils";

const SingleProduct = ({ fp }) => {
  const { addProductToCart } = useMyCustomContext();
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
            onClick={() => addProductToCart(fp)}
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

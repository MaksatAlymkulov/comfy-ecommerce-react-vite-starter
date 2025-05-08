import { useParams } from "react-router-dom";
import { products } from "../assets/products-data";
import PageHero from "./PageHero";
import { formatPrice } from "../utils/utils";
import { useMyCustomContext } from "../hooks/custom";

const ProductDetails = () => {
  const { addProductToCart } = useMyCustomContext();
  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  const { name, image, company, colors, price } = product.fields;

  console.log(product);

  return (
    <>
      <PageHero path={name} />
      {/* product info */}
      <section className="single-product">
        <div className="section-center single-product-center">
          <img
            src={image[0].url}
            className="single-product-img img"
            alt={image[0].url}
          />
          <article className="single-product-info">
            <div>
              <h2 className="single-product-title">{name}</h2>
              <p className="single-product-company text-slanted">{company}</p>
              <p className="single-product-price">{formatPrice(price)}</p>
              <div className="single-product-colors">
                {colors.map((color, index) => {
                  return (
                    <span
                      key={index}
                      className="product-color"
                      style={{ backgroundColor: color }}
                    ></span>
                  );
                })}
              </div>
              <p className="single-product-desc">
                Cloud bread VHS hell of banjo bicycle rights jianbing umami
                mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                dreamcatcher waistcoat, authentic chillwave trust fund. Viral
                typewriter fingerstache pinterest pork belly narwhal. Schlitz
                venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
                trust fund hashtag kinfolk microdosing gochujang live-edge
              </p>
              <button
                onClick={() => addProductToCart(product)}
                className="addToCartBtn btn"
              >
                add to cart
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;

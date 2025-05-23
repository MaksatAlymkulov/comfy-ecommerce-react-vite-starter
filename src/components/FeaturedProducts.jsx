import { useEffect } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../store/comfySlice";

function FeaturedProducts() {
  const isLoading = useSelector((state) => state.comfyState.isLoading);
  const featuredProducts = useSelector(
    (state) => state.comfyState.featuredProducts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsLoading());
    }, 500);
  }, []);

  return (
    <section className="section featured">
      <div className="title">
        <h2>
          <span>/</span> featured
        </h2>
      </div>
      <div className="featured-center section-center">
        {!isLoading ? (
          <h2 className="section-loading">loading...</h2>
        ) : (
          featuredProducts.map((fp) => {
            return <SingleProduct fp={fp} key={fp.id} />;
          })
        )}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </section>
  );
}

export default FeaturedProducts;

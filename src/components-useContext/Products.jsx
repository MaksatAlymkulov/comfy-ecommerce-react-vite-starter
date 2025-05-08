import { useState } from "react";
import { products } from "../assets/products-data";
import PageHero from "./PageHero";
import SingleProduct from "./SingleProduct";
import { useMyCustomContext } from "../hooks/custom";

function Products() {
  const [priceInputVal, setPriceInputVal] = useState(500);
  const [searchVal, setSearchVal] = useState("");
  const [companyName, setCompanyName] = useState("all");

  const companies = ["all", ...new Set(products.map((p) => p.fields.company))];

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceInputVal(value);
  };

  const changeCompanyProducts = (name) => {
    setCompanyName(name);
  };

  const handleProductSearch = (e) => {
    const value = e.target.value;
    setSearchVal(value);
  };

  let filteredProducts =
    companyName === "all"
      ? products
      : products.filter((p) => p.fields.company === companyName);

  filteredProducts = filteredProducts.filter(
    (product) => (product.fields.price / 10).toFixed(2) < Number(priceInputVal)
  );

  filteredProducts = filteredProducts.filter((product) =>
    product.fields.name.toLowerCase().includes(searchVal.toLowerCase().trim())
  );

  return (
    <>
      <PageHero path="/products" />
      <section className="products">
        {/* filters */}
        <div className="filters">
          <div className="filters-container">
            {/* search */}
            <form className="input-form">
              <input
                type="text"
                className="search-input"
                placeholder="search..."
                value={searchVal}
                onChange={handleProductSearch}
              />
              {searchVal && (
                <i
                  onClick={() => setSearchVal("")}
                  className="fa fa-times clear-search"
                ></i>
              )}
            </form>
            {/* companies list */}
            <h4>Company</h4>
            <article className="companies">
              {companies.map((company, index) => {
                const companyClass =
                  company === companyName
                    ? "company-btn active"
                    : "company-btn";
                return (
                  <button
                    onClick={() => changeCompanyProducts(company)}
                    key={index}
                    className={companyClass}
                  >
                    {company}
                  </button>
                );
              })}
            </article>
            {/* price */}
            <h4>Price</h4>
            <form className="price-form">
              <input
                type="range"
                className="price-filter"
                min="0"
                value={priceInputVal}
                max="1000"
                onChange={handlePriceChange}
              />
            </form>
            <p className="price-value">Value: ${priceInputVal}</p>
          </div>
        </div>
        {/* products */}

        <div className="products-container">
          {filteredProducts.length ? (
            filteredProducts.map((fp) => <SingleProduct fp={fp} key={fp.id} />)
          ) : (
            <h3 className="filter-error">
              sorry, no products matched your search
            </h3>
          )}
        </div>
      </section>
    </>
  );
}

export default Products;

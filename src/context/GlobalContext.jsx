import React, { useEffect, useState } from "react";
import { MyContext } from "../hooks/custom.js";
import { products } from "../assets/products-data.js";
import { getStorageItem, setStorageItem } from "../utils/utils.js";

export default function GlobalContext({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showCart, setShowCard] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartProducts, setCartProducts] = useState(
    getStorageItem("cartProducts")
  );
  const featuredProducts = products.filter(
    (product) => product.fields.featured
  );

  useEffect(() => {
    setStorageItem("cartProducts", cartProducts);
  }, [cartProducts]);

  const addProductToCart = (product) => {
    const isExist = cartProducts.filter((cp) => cp.id === product.id);

    if (isExist.length) {
      setCartProducts((prevCartProducts) => {
        return prevCartProducts.map((cp) => {
          if (cp.id === product.id) {
            return { ...cp, count: cp.count + 1 };
          }

          return { ...cp };
        });
      });
    } else {
      setCartProducts((prevCartProducts) => {
        return [...prevCartProducts, { ...product, count: 1 }];
      });
    }
  };

  const deleteCartProduct = (product) => {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.filter((cp) => cp.id !== product.id);
    });
  };

  const increaseCountAmount = (product) => {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.map((cp) => {
        if (cp.id === product.id) {
          return { ...cp, count: cp.count + 1 };
        }

        return { ...cp };
      });
    });
  };

  const decreaseCountAmount = (product) => {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.map((cp) => {
        if (cp.id === product.id) {
          return { ...cp, count: cp.count - 1 };
        }

        return { ...cp };
      });
    });
  };

  const value = {
    isLoading,
    setIsLoading,
    featuredProducts,
    showCart,
    setShowCard,
    addProductToCart,
    cartProducts,
    setCartProducts,
    increaseCountAmount,
    decreaseCountAmount,
    deleteCartProduct,
    showCheckout,
    setShowCheckout,
    showSideBar,
    setShowSideBar,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

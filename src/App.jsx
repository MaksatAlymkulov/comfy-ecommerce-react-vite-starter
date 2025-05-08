import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";

import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";

import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Cart />
      <CheckoutModal />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path="single/:id" element={<ProductDetails />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

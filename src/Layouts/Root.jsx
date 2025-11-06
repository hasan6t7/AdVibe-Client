import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CartModal from "../Pages/Shop/CartModal";
import { useSelector } from "react-redux";

const Root = () => {
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const handleCartToggle = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="poppins">
      <nav className="sticky top-0 right-0 left-0 z-40  transition-all duration-500 backdrop-blur-sm">
        <Navbar onCartToggle={handleCartToggle}></Navbar>
      </nav>
      <main className="max-w-[1400px] mx-auto">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>

      {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
        />
      )}
    </div>
  );
};

export default Root;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const cart = useSelector((state) => state.cartReducer.cart.length);
  console.log(cart);

  return (
    <div className="p-2 text-center space-x-3 w-full shadow-md sticky top-0 bg-white z-50 flex justify-center">
      <div className="flex items-center gap-3">
        <Link to={"/"}>Home</Link>
        <Link to={"/postView"}>All Posts</Link>
        <Link to={'/cart'} className="relative">
          <span>Cart</span>
          <span className="bg-red-500 absolute -top-1 w-5 h-5 rounded-full text-white grid place-content-center -right-5 text-sm">
            {cart || 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

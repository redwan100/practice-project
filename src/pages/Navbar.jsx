import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="p-2 text-center space-x-3 w-full shadow-md sticky top-0 bg-white z-50">
      <Link to={"/"}>Home</Link>
      <Link to={"/show-book"}>Show book</Link>
      <Link to={"/add-book"}>Add book</Link>
    </div>
  );
};

export default Navbar;

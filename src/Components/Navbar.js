import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  // console.log(items.length);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#764abc",
        padding: "2vh",
        color: "#fff",
      }}
    >
      <span>REDUX STORE</span>
      <div>
        <Link to={"/"} className="navLink">
          Home
        </Link>
        <Link to={"/cart"} className="navLink">
          Cart
        </Link>
        <span className="cartCount">Cart Item: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;

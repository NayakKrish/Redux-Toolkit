import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, STATUES } from "../store/productSlice";

const Products = ({ setShowAlert }) => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  //   const [products, setProducts] = useState();

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    setShowAlert(true);
    dispatch(add(product));
  };

  if (status === STATUES.LOADING) {
    return <h2 style={{ color: "grey" }}>Loading...</h2>;
  }

  if (status === STATUES.ERROR) {
    return <h2 style={{ color: "red" }}>Something went wrong!</h2>;
  }

  return (
    <div className="productsWrapper">
      {products?.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleAdd(product)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

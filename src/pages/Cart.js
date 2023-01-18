import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const [showAlert, setShowAlert] = useState(false);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      const alert = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return () => clearTimeout(alert);
    }
  }, [showAlert]);

  if (products.length === 0) {
    return (
      <>
        <h2>Nothing to show!</h2>
        <h3>Add items to see in cart!</h3>
      </>
    );
  }

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
        }}
      >
        <Collapse in={showAlert}>
          <Alert
            color="warning"
            style={{ boxShadow: "0px 0px 3px grey" }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setShowAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Item removed from Cart!
          </Alert>
        </Collapse>
      </div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products?.map((product) => {
          return (
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => handleRemove(product.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;

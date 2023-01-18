import React, { useEffect, useState } from "react";
import Products from "../Components/Products";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const alert = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return () => clearTimeout(alert);
    }
  }, [showAlert]);

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
            // variant="filled"
            color="info"
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
            Item added to Cart!
          </Alert>
        </Collapse>
      </div>

      <h2 className="heading">Welcome to Redux Toolkit Store</h2>
      <section>
        <h3>Products</h3>
        <Products setShowAlert={setShowAlert} />
      </section>
    </div>
  );
};

export default Home;

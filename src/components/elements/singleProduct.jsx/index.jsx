import React from "react";
import { Box, Button, Typography } from "@mui/material";
import TextRating from "../rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/action";
import styled from "@emotion/styled";

function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart?.cart);

  const isItemInCart = cart.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    // Store product details in local storage
    const storedProducts = localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [];

    localStorage.setItem(
      "products",
      JSON.stringify([...storedProducts, product])
    );
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
    // Remove product details from local storage
    const storedProducts = localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [];
    const updatedProducts = storedProducts.filter(
      (item) => item.id !== product.id
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const StyledButton = styled(Button)({
    borderRadius: "8px",
    background: "#F7A928",
    color: "#fff",
    fontWeight: "500",
    padding: "10px 25px",
    width: "auto",
    marginTop: 20,
    "&:hover": {
      background: "#F9BF5E",
    },
  });

  return (
    <Box className="products">
      <img
        src={product?.image}
        alt={product?.title}
        width="250"
        height="250"
        style={{ objectFit: "contain" }}
      />
      <Typography
        variant="h5"
        fontSize={"15px"}
        color="error"
        fontWeight={600}
        align="left"
        textTransform={"capitalize"}
      >
        {product?.category}
      </Typography>
      <Typography
        variant="h5"
        fontSize={"18px"}
        color="#4D4F5C"
        fontWeight={700}
        align="left"
        className="text-limit"
      >
        {product?.title}
      </Typography>
      <Typography
        variant="h5"
        fontSize={"17px"}
        color="#4D4F5C"
        fontWeight={600}
        align="left"
      >
        ₹ {product?.price}
      </Typography>
      <TextRating value={product?.rating.rate} count={product.rating.count} />
      {isItemInCart ? (
        <StyledButton variant="contained" onClick={handleRemoveFromCart}>
          Remove from Cart
        </StyledButton>
      ) : (
        <StyledButton variant="contained" onClick={handleAddToCart}>
          Add to Cart
        </StyledButton>
      )}
    </Box>
  );
}

export default SingleProduct;

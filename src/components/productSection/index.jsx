import { Container, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SingleProduct from "../elements/singleProduct.jsx";
import useProducts from "./useProducts";

function Products({ category }) {
  const [products, loading] = useProducts({ category });
  return (
    <Container maxWidth="xl">
      {loading ? (
        <Grid container spacing={6} sx={{ marginTop: "15px" }}>
          <Grid item md={4} xs={6}>
            <Skeleton variant="rectangular" height={200} animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </Grid>
          <Grid item md={4} xs={6}>
            <Skeleton variant="rectangular" height={200} animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </Grid>
          <Grid item md={4} xs={6}>
            <Skeleton variant="rectangular" height={200} animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </Grid>
        </Grid>
      ) : (
        <Box>
          <Typography variant="h4" className="sectionTitle">
            {category}
          </Typography>
          <Grid container spacing={6}>
            {products.slice(0, 3).map((product) => (
              <Grid item md={4} xs={6}>
                <Box className="product-box">
                  <SingleProduct product={product} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default Products;

import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SingleProduct from "../elements/singleProduct.jsx";
import useProducts from "./useProducts";

function Products({ category }) {
  const [products, loading] = useProducts({ category });
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Box>
          <Typography variant="h4" className="sectionTitle">
            {category}
          </Typography>
          <Grid container spacing={12}>
            {products.slice(0, 3).map((product) => (
              <Grid item md={4} xs={6}>
                <SingleProduct product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
}

export default Products;

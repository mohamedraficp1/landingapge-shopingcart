import { Container, Grid } from "@mui/material";
import React from "react";
import SingleCategoryBox from "../elements/singleCategoryBox";
import watch from "../../assets/img/watch.png";
import bag from "../../assets/img/bag.png";
import shoes from "../../assets/img/shoes.png";

function CategorySection() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item md={3} xs={6}>
            <SingleCategoryBox
              color={"#ffa230"}
              image={watch}
              title={"Watches"}
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <SingleCategoryBox color={"#ff3f8c"} image={bag} title={"Bags"} />
          </Grid>
          <Grid item md={3} xs={6}>
            <SingleCategoryBox
              color={"#3ba9e8"}
              image={shoes}
              title={"Shoes"}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CategorySection;

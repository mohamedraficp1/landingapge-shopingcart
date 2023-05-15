import { Container, Grid } from "@mui/material";
import React from "react";
import SingleCategoryBox from "../elements/singleCategoryBox";
import watch from "../../assets/img/watch.png";
import bag from "../../assets/img/bag.png";
import shoes from "../../assets/img/shoes.png";
import mobile from "../../assets/img/mobile.png";

function CategorySection({ categories }) {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item md={3} xs={6}>
            <SingleCategoryBox
              color={"#ffa230"}
              image={mobile}
              title={categories[0]}
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <SingleCategoryBox
              color={"#ff3f8c"}
              image={bag}
              title={categories[1]}
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <SingleCategoryBox
              color={"#3ba9e8"}
              image={shoes}
              title={categories[2]}
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <SingleCategoryBox
              color={"#ffa230"}
              image={watch}
              title={categories[3]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CategorySection;

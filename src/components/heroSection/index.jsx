import styled from "@emotion/styled";
import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../../assets/img/xbox.png";

function HeroSection() {
  const OuterBox = styled(Grid)({
    backgroundColor: "#feeaeb",
    marginTop: 25,
    marginBottom: 35,
    padding: "30px 50px",
    borderRadius: 8,
    display: "flex",
  });

  const Title = styled(Typography)({
    fontWeight: "bold",
    marginBottom: 15,
  });

  const GridItem = styled(Grid)({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
  });

  const StyledButton = styled(Button)({
    borderRadius: "8px",
    background: "#F7A928",
    color: "#fff",
    fontWeight: "500",
    padding: "10px 25px",
    width: "125px",
    marginTop: 20,
    "&:hover": {
      background: "#F9BF5E",
    },
  });

  return (
    <>
      <Container maxWidth="xl">
        <OuterBox>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <GridItem item>
                <Title variant="h4" component="h3">
                  X Box for Your Living Room
                </Title>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br /> Cras egestas eget sem quis congue.
                </Typography>

                <StyledButton>Buy Now</StyledButton>
              </GridItem>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={Image} alt="Xbox" width="400" className="xboxImage" />
            </Grid>
          </Grid>
        </OuterBox>
      </Container>
    </>
  );
}

export default HeroSection;

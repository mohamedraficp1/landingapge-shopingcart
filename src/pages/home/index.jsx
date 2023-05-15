import { Container } from "@mui/material";
import React from "react";
import SubscribeSection from "../../components/bottomBar";
import CategorySection from "../../components/categorySection";
import HeroSection from "../../components/heroSection";
import Products from "../../components/productSection";
import AppBar from "../../layout/topbar";

function Home() {
  return (
    <Container maxWidth="xl">
      <AppBar />
      <HeroSection />
      <CategorySection />
      <Products category={"electronics"} />
      <Products category={"jewelery"} />
      <SubscribeSection />
    </Container>
  );
}

export default Home;

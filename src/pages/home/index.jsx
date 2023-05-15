import { Container } from "@mui/material";
import React from "react";
import SubscribeSection from "../../components/bottomBar";
import CategorySection from "../../components/categorySection";
import HeroSection from "../../components/heroSection";
import Products from "../../components/productSection";
import AppBar from "../../layout/topbar";
import useCategories from "./useCategory";

function Home() {
  const [categories, loading] = useCategories();
  return (
    <>
      <AppBar />
      <HeroSection />
      <CategorySection categories={categories} />
      {categories?.map((category, i) => (
        <Products category={category} key={i} />
      ))}
      <SubscribeSection />
    </>
  );
}

export default Home;

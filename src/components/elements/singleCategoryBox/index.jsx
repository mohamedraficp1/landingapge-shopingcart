import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function SingleCategoryBox({ color, image, title }) {
  const OuterBox = styled(Box)({
    backgroundColor: color,
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 8,
    alignItems: "center",
    padding: 20,
  });

  const Title = styled(Typography)({
    fontWeight: "600",
    fontSize: 24,
    color: "#fff",
  });
  return (
    <OuterBox>
      <Title variant="h4">{title}</Title>
      <img src={image} width="60" height="40" />
    </OuterBox>
  );
}

export default SingleCategoryBox;

import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Input, Typography } from "@mui/material";
import React from "react";

function SubscribeSection() {
  const OuterBox = styled(Box)({
    backgroundColor: "#feeaeb",
    marginTop: 45,
    marginBottom: 35,
    padding: "50px",
    borderRadius: 8,
  });

  const Title = styled(Typography)({
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  });

  const SubTitle = styled(Typography)({
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 10,
    display: "block",
    textAlign: "center",
  });

  const StyledButton = styled(Button)({
    borderRadius: " 0 8px 8px 0",
    background: "#F7A928",
    color: "#fff",
    fontWeight: "500",
    padding: "10px 15px",
    marginRight: 5,
    fontSize: "12px",
    width: "auto",
    height: "32px",
    "&:hover": {
      background: "#F9BF5E",
    },
  });

  const EmailCOntainer = styled(Box)({
    margin: "15px auto 10px",
    width: 299,
  });

  return (
    <>
      <Container maxWidth="xl">
        <OuterBox>
          <Title variant="h4" className="subtitle">
            Lets Stay in Touch
          </Title>
          <SubTitle variant="body" textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SubTitle>
          <EmailCOntainer>
            <Input className="input-box" placeholder="Enter Your Email Id" />
            <StyledButton>Subscribe</StyledButton>
          </EmailCOntainer>
        </OuterBox>
      </Container>
    </>
  );
}

export default SubscribeSection;

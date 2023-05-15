import { Button } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router";

const ErrorPage = ({ error }) => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="error-page-container">
      <div className="error-title">Oops..! Something went wrong</div>
      <div className="error-detail">
        <span className="error-detail-title">Details :</span>{" "}
        {error.componentStack || ""}
      </div>
      <Button variant="contained" disableElevation onClick={goBack}>
        Go Back
      </Button>
    </div>
  );
};

export default ErrorPage;
